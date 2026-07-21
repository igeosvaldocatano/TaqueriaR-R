# Taquería R&R — Menú digital

Menú interactivo de una sola página para Taquería R&R. Permite a los comensales explorar el catálogo completo, armar un pedido de antojitos (producto + proteína + cantidad) y enviarlo directo por WhatsApp para que el dueño confirme precio y pago en el negocio.

## Cómo verlo

Abre `index.html` directamente en el navegador. Es un archivo 100% autónomo y portátil: HTML + CSS + JS + tipografías (Baloo 2 y Nunito) + el logo y las 10 fotos de producto, todo embebido en base64 dentro de ese único archivo (~2.7 MB). No depende de ningún otro archivo de la carpeta, ni de conexión a internet, ni de build — se puede copiar, publicar o compartir como archivo suelto y se verá igual en cualquier lugar. Los únicos enlaces que salen del archivo son los de WhatsApp (`wa.me`), que se abren solo si el comensal hace clic en pedir o contactar.

Las fotos de producto se redujeron (máx. 960 px de lado largo, JPEG calidad 82) antes de embeberse — se ven igual en las tarjetas del menú pero evitan que el archivo pese ~25 MB de más.

> **Nota sobre `og:image`**: la vista previa al compartir el enlace por WhatsApp/redes (meta tag `og:image`) apunta a `Logo_Taq_RyR_4k.png` como archivo separado, porque los rastreadores de esas plataformas no aceptan imágenes embebidas en base64 para esa etiqueta — requieren una URL pública real. Si el sitio se publica en un hosting, ese archivo debe subirse junto al `index.html` (o cambiar la ruta a la URL final) para que la vista previa funcione; no afecta en nada al funcionamiento ni apariencia del menú en sí.

La página está diseñada **solo para vista mobile** (uso principal: código QR en las mesas del local), con todos los elementos apilados en una sola columna sin importar el ancho de pantalla.

## Estructura de archivos

- `index.html` — el entregable: la landing/menú completa (nombrado `index.html` para publicarse directamente en hosting estático). Autocontenido: no necesita ningún otro archivo de esta carpeta para funcionar.
- `Logo_Taq_RyR_4k.png` / `Logo_Taq_RyR.jpg` — logo oficial de la marca, en su resolución original. Ya está embebido (a menor resolución) dentro de `index.html`; estos archivos se conservan como fuente y para la etiqueta `og:image` si el sitio se publica en un hosting.
- `Imagenes de referencia/` — fotografías de producto originales (Tacos, Tortas, Gringas, Quesadillas, Volcanes, Barbacoa, Menudo, Aguas_Frescas, Refresco, Jugo_Naranja). Ya están embebidas (redimensionadas) dentro de `index.html`; esta carpeta se conserva como fuente por si se necesita volver a procesarlas.
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
