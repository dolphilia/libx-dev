/**
 * 設定ファイルベースのプロジェクトURL生成ユーティリティ
 */

import type { LocaleKey } from '@docs/i18n/locales';
import type { Project } from '../config/projects.config';
import { topPageConfig } from '../config/projects.config';

/**
 * プロジェクトの最適なURLを生成
 * 1. 動的生成を試行
 * 2. 失敗した場合はfallbackUrlを使用
 */
export async function generateProjectUrl(project: Project, lang: LocaleKey): Promise<string> {
  // まずfallbackUrlを試す（より信頼性が高い）
  if (project.fallbackUrl && project.fallbackUrl[lang]) {
    console.log(`[URL] Using fallback URL for ${project.id}: ${project.fallbackUrl[lang]}`);
    return project.fallbackUrl[lang];
  }
  
  // contentPathがある場合は動的生成を試行
  if (project.contentPath) {
    try {
      const dynamicUrl = await generateDynamicUrl(project.contentPath, lang, project.path);
      if (dynamicUrl) {
        console.log(`[URL] Using dynamic URL for ${project.id}: ${dynamicUrl}`);
        return dynamicUrl;
      }
    } catch (error) {
      console.warn(`[URL] Dynamic generation failed for ${project.id}:`, error);
    }
  }
  
  // 最終フォールバック: 基本パス + 言語
  const defaultUrl = `${project.path}/${lang}`;
  console.log(`[URL] Using default URL for ${project.id}: ${defaultUrl}`);
  return defaultUrl;
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
  const project = topPageConfig.projects.find(p => p.contentPath === contentPath);
  
  if (project && project.fallbackUrl && project.fallbackUrl[lang]) {
    // 設定ファイルのフォールバックURLを使用
    return project.fallbackUrl[lang];
  }
  
  // プロジェクトが見つからない場合は汎用的なパターンを生成
  // ほとんどのドキュメントプロジェクトで共通のパターンを使用
  return `${basePath}/${lang}/v2/guide/01-getting-started`;
}