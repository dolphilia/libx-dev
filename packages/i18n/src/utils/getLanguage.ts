import { defaultLocale, supportedLocales, type LocaleKey } from '../locales';

/**
 * ブラウザの言語設定から最適な言語を検出する
 * 
 * @returns 検出された言語コード
 */
export function detectLanguage(): LocaleKey {
  if (typeof navigator === 'undefined') {
    return defaultLocale;
  }

  const browserLang = navigator.language.split('-')[0];
  
  if (supportedLocales.includes(browserLang as LocaleKey)) {
    return browserLang as LocaleKey;
  }
  
  return defaultLocale;
}

/**
 * URLパスから言語コードを抽出する
 * 
 * @param path URLパス (例: /ja/docs/getting-started)
 * @returns 言語コード
 */
export function getLanguageFromPath(path: string): LocaleKey {
  const pathSegments = path.split('/').filter(Boolean);
  
  if (pathSegments.length > 0) {
    const potentialLang = pathSegments[0];
    
    if (supportedLocales.includes(potentialLang as LocaleKey)) {
      return potentialLang as LocaleKey;
    }
  }
  
  return defaultLocale;
}

/**
 * 現在の言語を取得する
 * 
 * @param path 現在のURLパス
 * @returns 言語コード
 */
export function getCurrentLanguage(path?: string): LocaleKey {
  // URLパスから言語を取得
  if (path) {
    return getLanguageFromPath(path);
  }
  
  // ブラウザから言語を検出
  return detectLanguage();
}
