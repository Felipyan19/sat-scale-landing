export const SITE_URL = 'https://satscale.ai';
export const SITE_NAME = 'SatScale';
export const DEFAULT_OG_IMAGE_PATH = '/381_escl.png';
export const DEFAULT_OG_IMAGE_ALT = 'Satellite comparison preview from SatScale';
export const DEFAULT_OG_IMAGE_WIDTH = 1238;
export const DEFAULT_OG_IMAGE_HEIGHT = 1238;
export const CONTACT_EMAIL = 'contact@satscale.ai';

export function toAbsoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
