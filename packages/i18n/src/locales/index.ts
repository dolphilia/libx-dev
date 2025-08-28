/**
 * 翻訳ファイル
 */

import en from './en.json';
import ja from './ja.json';
import zhHans from './zh-Hans.json';
import zhHant from './zh-Hant.json';
import es from './es.json';
import ptBR from './pt-BR.json';
import ko from './ko.json';
import de from './de.json';
import fr from './fr.json';
import ru from './ru.json';
import ar from './ar.json';
import id from './id.json';
import tr from './tr.json';
import hi from './hi.json';
import vi from './vi.json';

export const locales = {
  en,
  ja,
  'zh-Hans': zhHans,
  'zh-Hant': zhHant,
  es,
  'pt-BR': ptBR,
  ko,
  de,
  fr,
  ru,
  ar,
  id,
  tr,
  hi,
  vi
};

export type LocaleKey = keyof typeof locales;
export type SupportedLocales = Record<LocaleKey, Record<string, string>>;

export const defaultLocale: LocaleKey = 'en';
export const supportedLocales: LocaleKey[] = [
  'en', 
  'ja', 
  'zh-Hans', 
  'zh-Hant', 
  'es', 
  'pt-BR', 
  'ko', 
  'de', 
  'fr', 
  'ru', 
  'ar', 
  'id', 
  'tr', 
  'hi', 
  'vi'
];
