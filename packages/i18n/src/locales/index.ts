/**
 * 翻訳ファイル
 */

import en from './en.json';
import ja from './ja.json';

export const locales = {
  en,
  ja
};

export type LocaleKey = keyof typeof locales;
export type SupportedLocales = Record<LocaleKey, Record<string, string>>;

export const defaultLocale: LocaleKey = 'en';
export const supportedLocales: LocaleKey[] = ['en', 'ja'];
