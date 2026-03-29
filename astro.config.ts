import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/* i18n configuration */
export const LOCALES = ['es', 'en'] as const;
export const DEFAULT_LOCALE = 'es' as const;
export const LOCALE_LABELS: Record<(typeof LOCALES)[number], string> = {
  es: 'Español',
  en: 'English',
};

/* Open Graph configuration */
export const OG_LOCALES: Record<(typeof LOCALES)[number], string> = {
  es: 'es_ES',
  en: 'en_US',
};
export const OG_IMAGE_PATH = '/og-image.png';

/* Site configuration */
export const SITE_NAME = 'Daniel Pulgarin';
export const SITE_URL = 'https://danielpulgarin.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), sitemap()],
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: [...LOCALES],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
