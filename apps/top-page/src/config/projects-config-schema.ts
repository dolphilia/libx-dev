/**
 * projects.config.json用のTypeScript型定義とスキーマ
 */
import type { LocaleKey } from '@docs/i18n/locales';
import type { IconName } from '@docs/ui/components';

// JSON構造の型定義
export interface ProjectsConfigJSON {
  siteConfig: SiteConfigJSON;
  content: ContentConfigJSON;
  projectDecorations: Record<string, ProjectDecorationJSON>;
}

export interface SiteConfigJSON {
  baseUrl: string;
  supportedLangs: LocaleKey[];
  defaultLang: LocaleKey;
  repository: string;
  siteName: string;
}

export interface ContentConfigJSON {
  siteDescription: Record<LocaleKey, string>;
  heroTitle: Record<LocaleKey, string>;
  heroDescription: Record<LocaleKey, string>;
}

export interface ProjectDecorationJSON {
  icon?: IconName;
  tags?: string[];
  isNew?: boolean;
  isUpdated?: boolean;
}

// ランタイム設定の型定義（既存のProject等と互換性保持）
export interface Project {
  id: string;
  name: Record<LocaleKey, string>;
  description: Record<LocaleKey, string>;
  path: string;
  icon?: IconName;
  tags?: string[];
  isNew?: boolean;
  isUpdated?: boolean;
  // 動的URL生成用の情報
  contentPath?: string; // コンテンツディレクトリのパス（sample-docs等）
  fallbackUrl?: Record<LocaleKey, string>; // フォールバック用の固定URL
}

export interface TopPageConfig {
  projects: Project[];
  baseUrl: string;
  supportedLangs: LocaleKey[];
  defaultLang: LocaleKey;
  repository: string;
  siteName: string;
  siteDescription: Record<LocaleKey, string>;
  heroTitle: Record<LocaleKey, string>;
  heroDescription: Record<LocaleKey, string>;
}

// プロジェクト装飾設定（旧projectDecorationsと互換）
export interface ProjectDecoration {
  icon?: IconName;
  tags?: string[];
  isNew?: boolean;
  isUpdated?: boolean;
}

/**
 * JSON設定をランタイム設定に変換
 */
export function convertProjectsConfigJSONToRuntime(configJSON: ProjectsConfigJSON): {
  siteConfig: SiteConfigJSON;
  content: ContentConfigJSON;
  projectDecorations: Record<string, ProjectDecoration>;
} {
  return {
    siteConfig: configJSON.siteConfig,
    content: configJSON.content,
    projectDecorations: configJSON.projectDecorations
  };
}

/**
 * 設定の妥当性を検証
 */
export function validateProjectsConfig(config: ProjectsConfigJSON): boolean {
  // 必須フィールドの存在確認
  if (!config.siteConfig || !config.content || !config.projectDecorations) {
    return false;
  }

  // サイト設定の検証
  const { baseUrl, supportedLangs, defaultLang, repository, siteName } = config.siteConfig;
  if (typeof baseUrl !== 'string' || 
      !Array.isArray(supportedLangs) || 
      typeof defaultLang !== 'string' ||
      typeof repository !== 'string' ||
      typeof siteName !== 'string') {
    return false;
  }

  // コンテンツ設定の検証
  const { siteDescription, heroTitle, heroDescription } = config.content;
  if (!siteDescription || !heroTitle || !heroDescription) {
    return false;
  }

  // 各言語でのコンテンツ存在確認
  for (const lang of supportedLangs) {
    if (!siteDescription[lang] || !heroTitle[lang] || !heroDescription[lang]) {
      return false;
    }
  }

  return true;
}