import type { Locale, TranslationKeys } from './types';

const translations: Record<Locale, TranslationKeys> = {
  es: {},
  en: {},
};

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale];
}
