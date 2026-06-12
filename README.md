# SatScale Landing

Landing bilingue en Astro para presentar SatScale y captar solicitudes de evaluacion.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run check`
- `npm run preview`

## Contacto

El formulario usa `PUBLIC_CONTACT_FORM_ENDPOINT` si existe. Si no esta configurado, hace fallback a `mailto:contact@satscale.ai`.
El boton flotante de WhatsApp solo aparece si defines `PUBLIC_WHATSAPP_NUMBER`. Puedes personalizar el texto inicial con `PUBLIC_WHATSAPP_MESSAGE`.

1. Copia `.env.example` a `.env`
2. Define `PUBLIC_CONTACT_FORM_ENDPOINT` con tu endpoint de formulario
3. Define `PUBLIC_WHATSAPP_NUMBER` en formato internacional, solo con codigo de pais y numero
4. Opcional: define `PUBLIC_WHATSAPP_MESSAGE` para precargar el mensaje inicial

## Docker

El contenedor sirve la version estatica con `nginx` en el puerto interno `80`.
En `docker-compose.yml` ya esta publicado como `5050:80`, asi que el puerto publico del servidor queda en `5050`.

1. Copia `.env.example` a `.env`
2. Completa las variables `PUBLIC_*` que quieras incluir en el build
3. Ejecuta `docker compose up --build -d`
4. Abre `http://TU_HOST:5050`

Comandos utiles:

- `docker compose up --build`
- `docker compose up -d`
- `docker compose logs -f web`
- `docker compose down`

Nota: como Astro genera un sitio estatico, las variables `PUBLIC_CONTACT_FORM_ENDPOINT`, `PUBLIC_WHATSAPP_NUMBER` y `PUBLIC_WHATSAPP_MESSAGE` se incorporan en tiempo de build. Si cambias una de ellas, debes reconstruir con `docker compose up --build -d`.

## Rutas

- `/` version en espanol
- `/en/` version en ingles
