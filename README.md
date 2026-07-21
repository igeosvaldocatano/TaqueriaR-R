 Taquería R&R — Menú digital

Menú interactivo de una sola página para Taquería R&R. Permite a los comensales explorar el catálogo completo, armar un pedido de antojitos (producto + proteína + cantidad) y enviarlo directo por WhatsApp para que el dueño confirme precio y pago en el negocio.

## Cómo verlo

Abre `index.html` directamente en el navegador. Es un archivo autocontenido (HTML + CSS + JS embebido), sin build ni dependencias — solo requiere conexión a internet para cargar las tipografías de Google Fonts (Baloo 2 y Nunito).

La página está diseñada **solo para vista mobile** (uso principal: código QR en las mesas del local), con todos los elementos apilados en una sola columna sin importar el ancho de pantalla.

## Estructura de archivos

- `index.html` — el entregable: la landing/menú completa (nombrado `index.html` para publicarse directamente en hosting estático).
- `Logo_Taq_RyR_4k.png` / `Logo_Taq_RyR.jpg` — logo oficial de la marca (el primero se usa en la página; el segundo es referencia).
- `Imagenes de referencia/` — fotografías de producto usadas en las tarjetas del menú (Tacos, Tortas, Gringas, Quesadillas, Volcanes, Barbacoa, Menudo, Aguas_Frescas, Refresco, Jugo_Naranja).
- `brief-taqueria-ryr.md` / `Brief de proyecto Taq_RyR.rtf` — brief original del proyecto con el alcance, catálogo y restricciones de producto acordadas.

## Contenido del menú

La navegación superior salta por ancla a cada grupo:

- **Antojitos con proteína** (Tacos, Tortas, Gringas, Quesadillas, Volcanes) — cada producto requiere elegir 1 de 6 proteínas (Barbacoa, Bistec, Chorizo, Combinado, Hígado, Arrachera) antes de poder agregarse al carrito. Es el único grupo con carrito.
- **Especialidades** (Barbacoa por kilo, Menudo) — solo informativo, sin carrito.
- **Complementos** (cebolla asada, chile toreado, consomé, etc.) — lista simple, sin fotos.
- **Bebidas** (Agua de frutas, Refrescos, Jugo de naranja) — solo informativo, sin carrito.
- **Servicios especiales** (Taquizas y eventos) — bloque de contacto por WhatsApp, sin acceso directo desde el nav.

Cada producto puede llevar una o más insignias reutilizables (aplicadas manualmente, sin lógica de fecha/hora): "Solo domingos", "Sujeto a disponibilidad", "Preparado en el momento", "< 5 minutos", "El más pedido", "Especialidad de la casa".

## Carrito y WhatsApp

- El carrito vive en un panel lateral (botón "Tu pedido" en el header) y solo acepta productos del Grupo A, cada uno con su proteína y cantidad.
- **Sin precios, sin combos, sin pago en línea** — es comportamiento esperado, no una limitación temporal. El botón "Realizar pedido por WhatsApp" arma un mensaje con la lista de productos y lo envía al número del negocio para que ahí se confirme precio y pago.
- El botón flotante de WhatsApp (esquina inferior derecha, siempre visible) es el canal genérico de contacto/consulta para los Grupos B–E y para dudas generales.
- Número de WhatsApp: 444 639 4094 (código de país 52).

## Pendientes conocidos

- **Paleta de colores oficial**: la paleta actual (vino `#9E1B32` / crema `#FBF3E7` / marrón `#3B2417`) es provisional, derivada del logo, mientras el cliente confirma su paleta de marca oficial.
- **Precios de productos**: se omiten deliberadamente en toda la página (ver sección "Carrito y WhatsApp").

## Convenciones al editar

Ver `CLAUDE.md` (en esta carpeta y en la carpeta padre) para el detalle de restricciones de producto/alcance que no deben modificarse sin confirmar con el cliente — p. ej. no agregar precios, tamaños/variantes, combos o pago en línea.
