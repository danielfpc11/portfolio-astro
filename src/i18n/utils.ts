import { getRelativeLocaleUrl, getAbsoluteLocaleUrl } from 'astro:i18n';
import { LOCALES, DEFAULT_LOCALE } from '../../astro.config';
import type { Locale } from './types';

export function getCurrentLocale(astroCurrentLocale: string | undefined): Locale {
  if (astroCurrentLocale && (LOCALES as readonly string[]).includes(astroCurrentLocale)) {
    return astroCurrentLocale as Locale;
  }

  return DEFAULT_LOCALE;
}

export function getAlternateLocales(currentLocale: Locale): Locale[] {
  return LOCALES.filter((locale) => locale !== currentLocale);
}

export function getLocalizedPath(locale: Locale, hash?: string): string {
  const basePath = getRelativeLocaleUrl(locale);
  return hash ? `${basePath}${normalizeHash(hash)}` : basePath;
}

export function getAbsoluteLocalizedUrl(locale: Locale, hash?: string): string {
  const baseUrl = getAbsoluteLocaleUrl(locale);
  return hash ? `${baseUrl}${normalizeHash(hash)}` : baseUrl;
}

function normalizeHash(hash: string): string {
  return hash.startsWith('#') ? hash : `#${hash}`;
}