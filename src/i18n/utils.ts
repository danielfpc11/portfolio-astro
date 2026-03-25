import { getRelativeLocaleUrl, getAbsoluteLocaleUrl } from 'astro:i18n';
import { LOCALES, DEFAULT_LOCALE } from '../../astro.config';
import type { Locale } from './types';

function normalizeHash(hash: string): string {
  return hash.startsWith('#') ? hash : `#${hash}`;
}

export function getCurrentLocale(astroCurrentLocale: string | undefined): Locale {
  if (
    astroCurrentLocale &&
    (LOCALES as readonly string[]).includes(astroCurrentLocale)
  ) {
    return astroCurrentLocale as Locale;
  }

  return DEFAULT_LOCALE;
}

export function getLocalizedPath(locale: Locale, hash?: string): string {
  const basePath = getRelativeLocaleUrl(locale);

  if (!hash) return basePath;

  return `${basePath}${normalizeHash(hash)}`;
}

export function getAbsoluteLocalizedUrl(locale: Locale, hash?: string): string {
  const baseUrl = getAbsoluteLocaleUrl(locale);

  if (!hash) return baseUrl;

  return `${baseUrl}${normalizeHash(hash)}`;
}

export function getAlternateLocales(currentLocale: Locale): Locale[] {
  return LOCALES.filter((locale) => locale !== currentLocale);
}
