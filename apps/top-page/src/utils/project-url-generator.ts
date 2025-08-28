/**
 * 設定ファイルベースのプロジェクトURL生成ユーティリティ
 */

import type { LocaleKey } from '@docs/i18n/locales';
import type { Project } from '../config/projects.config.new';
import { getTopPageConfig } from '../config/projects.config.new';

/**
 * プロジェクトの最適なURLを生成
 * 1. 動的生成を試行
 * 2. 失敗した場合はfallbackUrlを使用
 */
export async function generateProjectUrl(project: Project, lang: LocaleKey): Promise<string> {
  // まずfallbackUrlを試す（より信頼性が高い）
  if (project.fallbackUrl && project.fallbackUrl[lang]) {
    return project.fallbackUrl[lang];
  }
  
  // 指定した言語のfallbackURLが存在しない場合は英語にフォールバック
  if (project.fallbackUrl && project.fallbackUrl['en'] && lang !== 'en') {
    return project.fallbackUrl['en'];
  }
  
  // contentPathがある場合は動的生成を試行
  if (project.contentPath) {
    try {
      const dynamicUrl = await generateDynamicUrl(project.contentPath, lang, project.path);
      if (dynamicUrl) {
        return dynamicUrl;
      }
    } catch (error) {
      // 動的生成に失敗した場合は処理を継続
    }
  }
  
  // 最終フォールバック: 基本パス + 英語
  return `${project.path}/en`;
}

/**
 * 動的URL生成（設定ファイルベース）
 */
async function generateDynamicUrl(contentPath: string, lang: LocaleKey, basePath: string): Promise<string | null> {
  // import.meta.env.PROD でビルド環境かどうか判定
  const isProd = typeof window !== 'undefined' || process.env.NODE_ENV === 'production';
  
  if (isProd) {
    // プロダクション環境では動的生成をスキップ
    return null;
  }
  
  // 設定ファイルから対応するプロジェクトを検索
  const config = await getTopPageConfig();
  const project = config.projects.find(p => p.contentPath === contentPath);
  
  if (project && project.fallbackUrl && project.fallbackUrl[lang]) {
    // 設定ファイルのフォールバックURLを使用
    return project.fallbackUrl[lang];
  }
  
  // プロジェクトが見つからない場合は汎用的なパターンを生成
  // ほとんどのドキュメントプロジェクトで共通のパターンを使用
  return `${basePath}/${lang}/v2/guide/01-getting-started`;
}