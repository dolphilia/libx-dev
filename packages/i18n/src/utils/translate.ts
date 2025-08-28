import { locales, defaultLocale, type LocaleKey } from '../locales';

/**
 * 翻訳キーに対応する翻訳テキストを取得する
 * 
 * @param key 翻訳キー (例: 'common.home')
 * @param lang 言語コード
 * @param params 置換パラメータ
 * @returns 翻訳されたテキスト
 */
export function t(
  key: string,
  lang: LocaleKey = defaultLocale,
  params: Record<string, string | number> = {}
): string {
  // キーをセグメントに分割
  const segments = key.split('.');
  
  // 翻訳データを取得
  let translation: any = locales[lang];
  
  // 指定された言語の翻訳データが存在しない場合はデフォルト言語を使用
  if (!translation) {
    translation = locales[defaultLocale];
  }
  
  // キーに対応する翻訳テキストを取得
  for (const segment of segments) {
    if (translation && typeof translation === 'object' && segment in translation) {
      translation = translation[segment];
    } else {
      // 翻訳が見つからない場合はデフォルト言語で試行
      if (lang !== defaultLocale) {
        return t(key, defaultLocale, params);
      }
      
      // デフォルト言語でも見つからない場合はキーをそのまま返す
      return key;
    }
  }
  
  // 翻訳テキストが文字列でない場合はキーをそのまま返す
  if (typeof translation !== 'string') {
    return key;
  }
  
  // パラメータを置換
  return replaceParams(translation, params);
}

/**
 * 翻訳テキスト内のパラメータを置換する
 * 
 * @param text 翻訳テキスト
 * @param params 置換パラメータ
 * @returns パラメータが置換されたテキスト
 */
function replaceParams(
  text: string,
  params: Record<string, string | number>
): string {
  return Object.entries(params).reduce((result, [key, value]) => {
    const regex = new RegExp(`{${key}}`, 'g');
    return result.replace(regex, String(value));
  }, text);
}

/**
 * 日付を現在の言語でフォーマットする
 * 
 * @param date 日付
 * @param lang 言語コード
 * @returns フォーマットされた日付文字列
 */
export function formatDate(
  date: Date | string | number,
  lang: LocaleKey = defaultLocale
): string {
  const dateObj = date instanceof Date ? date : new Date(date);
  
  // 言語コードからIntl.DateTimeFormatのロケールにマッピング
  const localeMap: Record<LocaleKey, string> = {
    'en': 'en-US',
    'ja': 'ja-JP',
    'zh-Hans': 'zh-CN',
    'zh-Hant': 'zh-TW',
    'es': 'es-ES',
    'pt-BR': 'pt-BR',
    'ko': 'ko-KR',
    'de': 'de-DE',
    'fr': 'fr-FR',
    'ru': 'ru-RU',
    'ar': 'ar-SA',
    'id': 'id-ID',
    'tr': 'tr-TR',
    'hi': 'hi-IN',
    'vi': 'vi-VN'
  };
  
  const intlLocale = localeMap[lang] || localeMap[defaultLocale];
  
  try {
    return new Intl.DateTimeFormat(intlLocale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(dateObj);
  } catch (error) {
    // フォーマットに失敗した場合はISO文字列を返す
    return dateObj.toISOString().split('T')[0];
  }
}
