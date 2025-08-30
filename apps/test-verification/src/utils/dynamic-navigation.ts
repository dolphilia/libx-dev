/**
 * ファイルベースで動的に最新バージョンと最初のページを特定するユーティリティ
 */

import { getCollection } from 'astro:content';
import type { LocaleKey } from '@docs/i18n/locales';

/**
 * 利用可能なバージョンを取得し、最新のものを特定
 */
export async function getLatestVersion(lang: LocaleKey): Promise<string> {
  const docs = await getCollection('docs');
  
  // 指定した言語のドキュメントをフィルタ
  const langDocs = docs.filter(entry => {
    const parts = entry.slug.split('/');
    return parts.length >= 2 && parts[1] === lang;
  });
  
  // バージョンを抽出（例: "v1/en/guide/..." -> "v1"）
  const versions = Array.from(new Set(
    langDocs.map(entry => {
      const parts = entry.slug.split('/');
      return parts[0]; // バージョン部分を取得
    })
  )).filter(version => version.match(/^v\d+$/)); // v1, v2, ... の形式のみ
  
  // バージョン番号でソートし、最新を取得
  versions.sort((a, b) => {
    const numA = parseInt(a.replace('v', ''));
    const numB = parseInt(b.replace('v', ''));
    return numB - numA; // 降順
  });
  
  return versions[0] || 'v1';
}

/**
 * 指定した言語・バージョンの最初のページを特定
 */
export async function getFirstPage(lang: LocaleKey, version: string): Promise<string | null> {
  const docs = await getCollection('docs');
  
  // 指定した言語・バージョンのドキュメントをフィルタ
  const versionDocs = docs.filter(entry => 
    entry.slug.startsWith(`${version}/${lang}/`)
  );
  
  if (versionDocs.length === 0) {
    return null;
  }
  
  // ファイル名でソート（01-getting-started.mdx が最初に来るように）
  versionDocs.sort((a, b) => {
    const slugA = a.slug.split('/').slice(2).join('/'); // lang/version以降の部分
    const slugB = b.slug.split('/').slice(2).join('/');
    return slugA.localeCompare(slugB);
  });
  
  // 最初のドキュメントのパスを生成
  const firstDoc = versionDocs[0];
  const slugParts = firstDoc.slug.split('/');
  // "v1/en/guide/01-getting-started" -> "/guide/01-getting-started"  
  const path = '/' + slugParts.slice(2).join('/');
  
  return path;
}

/**
 * 動的に決定されたリダイレクト先URLを生成
 */
export async function generateRedirectUrl(lang: LocaleKey, baseUrl: string): Promise<string> {
  const latestVersion = await getLatestVersion(lang);
  const firstPage = await getFirstPage(lang, latestVersion);
  
  if (!firstPage) {
    // フォールバック: デフォルトのパス
    return `${baseUrl}/${latestVersion}/${lang}/guide/getting-started`;
  }
  
  return `${baseUrl}/${latestVersion}/${lang}${firstPage}`;
}