export const SITE_URL = 'https://satscale.ai';
export const SITE_NAME = 'SatScale';
export const DEFAULT_OG_IMAGE_PATH = '/381_escl.png';
export const DEFAULT_OG_IMAGE_ALT = 'Satellite comparison preview from SatScale';
export const DEFAULT_OG_IMAGE_WIDTH = 1238;
export const DEFAULT_OG_IMAGE_HEIGHT = 1238;
export const CONTACT_EMAIL =
  import.meta.env.PUBLIC_CONTACT_EMAIL?.trim() || 'ignite.apps.co@gmail.com';
export const DEFAULT_WHATSAPP_NUMBER = '573107798107';
export const DEFAULT_WHATSAPP_MESSAGE_ES =
  'Hola!, ví la página web y estoy interesado en los servicios de Sat Scale.';
export const DEFAULT_WHATSAPP_MESSAGE_EN =
  'Hi! I saw the website and I am interested in Sat Scale services.';

export function toAbsoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
