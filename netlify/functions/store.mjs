import { getStore } from '@netlify/blobs';

// Almacén compartido para el menú y las fotos de Los Arcos de Doña Julia.
// GET  /.netlify/functions/store?key=menu    -> devuelve el menú guardado (público)
// GET  /.netlify/functions/store?key=images  -> devuelve las fotos personalizadas (público)
// POST /.netlify/functions/store?key=menu    -> guarda (requiere contraseña correcta)
export default async (req) => {
  const store = getStore('arcos');
  const url = new URL(req.url);
  const key = url.searchParams.get('key');

  if (key !== 'menu' && key !== 'images') {
    return new Response('Parámetro "key" inválido', { status: 400 });
  }

  if (req.method === 'GET') {
    const value = await store.get(key, { type: 'json' });
    return new Response(JSON.stringify(value ?? null), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (req.method === 'POST') {
    let body;
    try {
      body = await req.json();
    } catch {
      return new Response('JSON inválido', { status: 400 });
    }
    if (!process.env.ADMIN_PASSWORD || body.password !== process.env.ADMIN_PASSWORD) {
      return new Response('No autorizado', { status: 401 });
    }
    await store.setJSON(key, body.data);
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response('Método no permitido', { status: 405 });
};

