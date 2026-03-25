import { LOCALES } from '../../astro.config';

export type Locale = (typeof LOCALES)[number];

export interface TranslationKeys {}
