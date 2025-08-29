import { defaultLocale, type LocaleKey } from '../locales';
import { getLanguageFromPath } from './getLanguage';

/**
 * 言語コードを含むパスを生成する
 * 
 * @param path 元のパス
 * @param lang 言語コード
 * @returns 言語コードを含むパス
 */
export function localizedPath(path: string, lang: LocaleKey): string {
  // ルートパスの場合
  if (path === '/') {
    return lang === defaultLocale ? '/' : `/${lang}/`;
  }

  // 現在のパスから言語コードを抽出
  const currentLang = getLanguageFromPath(path);
  const pathWithoutLang = removeLanguagePrefix(path, currentLang);
  
  // デフォルト言語の場合は言語コードを含めない
  if (lang === defaultLocale) {
    return pathWithoutLang;
  }
  
  // 言語コードを含むパスを生成
  return `/${lang}${pathWithoutLang}`;
}

/**
 * パスから言語コードプレフィックスを削除する
 * 
 * @param path URLパス
 * @param lang 言語コード
 * @returns 言語コードプレフィックスを削除したパス
 */
export function removeLanguagePrefix(path: string, lang: LocaleKey): string {
  // ルートパスの場合
  if (path === '/' || path === `/${lang}/`) {
    return '/';
  }
  
  // 言語コードプレフィックスを削除
  if (path.startsWith(`/${lang}/`)) {
    return path.substring(lang.length + 1);
  }
  
  return path;
}

/**
 * 現在のパスを別の言語に変換する
 * 
 * @param currentPath 現在のパス
 * @param targetLang 対象の言語コード
 * @returns 変換されたパス
 */
export function switchLanguage(currentPath: string, targetLang: LocaleKey): string {
  return localizedPath(currentPath, targetLang);
}

/**
 * バージョンと言語を含むパスを生成する
 * 
 * @param lang 言語コード
 * @param version バージョン
 * @param slug スラッグ
 * @returns 生成されたパス
 */
export function createLocalizedVersionedPath(
  lang: LocaleKey,
  version: string,
  slug: string | string[]
): string {
  const slugPath = Array.isArray(slug) ? slug.join('/') : slug;
  
  // 新しい構造: 全ての言語でバージョン/言語の順序に統一
  return `/${version}/${lang}/${slugPath}`;
}
