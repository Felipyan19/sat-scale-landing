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

## Rutas

- `/` version en espanol
- `/en/` version en ingles
