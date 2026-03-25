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

export default defineConfig({
  site: 'https://danielpulgarin.com',
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
