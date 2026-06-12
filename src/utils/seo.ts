import type { Lang } from './i18n';
import {
  CONTACT_EMAIL,
  DEFAULT_OG_IMAGE_ALT,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_PATH,
  DEFAULT_OG_IMAGE_WIDTH,
  SITE_NAME,
  SITE_URL,
  toAbsoluteUrl
} from './site';

export function getLocale(lang: Lang) {
  return lang === 'en' ? 'en_US' : 'es_ES';
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

interface LandingStructuredDataOptions {
  description: string;
  lang: Lang;
  path: string;
  title: string;
}

export function buildLandingStructuredData({
  description,
  lang,
  path,
  title
}: LandingStructuredDataOptions) {
  const pageUrl = toAbsoluteUrl(path);
  const imageUrl = toAbsoluteUrl(DEFAULT_OG_IMAGE_PATH);

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      email: CONTACT_EMAIL,
      logo: {
        '@type': 'ImageObject',
        url: imageUrl,
        width: DEFAULT_OG_IMAGE_WIDTH,
        height: DEFAULT_OG_IMAGE_HEIGHT,
        caption: DEFAULT_OG_IMAGE_ALT
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: ['es', 'en']
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      inLanguage: lang,
      isPartOf: {
        '@id': `${SITE_URL}/#website`
      },
      about: {
        '@id': `${SITE_URL}/#organization`
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: imageUrl,
        width: DEFAULT_OG_IMAGE_WIDTH,
        height: DEFAULT_OG_IMAGE_HEIGHT
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      serviceType: lang === 'en' ? 'Satellite imagery upscaling' : 'Reescalado de imagen satelital',
      name: title,
      description,
      provider: {
        '@id': `${SITE_URL}/#organization`
      },
      areaServed: {
        '@type': 'Place',
        name: 'Worldwide'
      },
      availableLanguage: ['es', 'en']
    }
  ];
}
