/**
 * プロジェクト設定JSONスキーマとTypeScript型定義
 */
import type { LocaleKey } from '@docs/i18n/locales';

/**
 * JSONファイル内で使用されるバージョン情報の型
 * Date型はISO文字列として保存される
 */
export interface VersionConfigJSON {
  id: string;
  name: string;
  date: string; // ISO文字列 (JSON内)
  isLatest?: boolean;
  tag?: string;
  description?: string;
}

/**
 * 実行時に使用されるバージョン情報の型
 * Date型はJavaScriptのDateオブジェクト
 */
export interface VersionConfig {
  id: string;
  name: string;
  date: Date; // Dateオブジェクト (実行時)
  isLatest?: boolean;
  tag?: string;
  description?: string;
}

/**
 * プロジェクトの翻訳情報
 */
export interface ProjectTranslations {
  displayName: string;
  displayDescription: string;
  categories: Record<string, string>;
}

/**
 * JSONファイル内のプロジェクト設定構造
 */
export interface ProjectConfigJSON {
  basic: {
    baseUrl: string;
    supportedLangs: LocaleKey[];
    defaultLang: LocaleKey;
  };
  translations: Record<LocaleKey, ProjectTranslations>;
  versioning: {
    versions: VersionConfigJSON[];
  };
}

/**
 * 実行時に使用されるプロジェクト設定構造
 */
export interface ProjectConfig {
  basic: {
    baseUrl: string;
    supportedLangs: LocaleKey[];
    defaultLang: LocaleKey;
  };
  translations: Record<LocaleKey, ProjectTranslations>;
  versioning: {
    versions: VersionConfig[];
  };
}

/**
 * 後方互換性のためのレガシー設定形式
 */
export interface LegacyProjectConfig extends ProjectConfig {
  // 後方互換性のため、フラット構造でもアクセス可能
  baseUrl: string;
  supportedLangs: LocaleKey[];
  defaultLang: LocaleKey;
  versions: VersionConfig[];
  displayName: Record<LocaleKey, string>;
  displayDescription: Record<LocaleKey, string>;
  categoryTranslations: Record<LocaleKey, Record<string, string>>;
}

/**
 * JSON設定ファイルのバリデーション
 */
export function validateProjectConfigJSON(config: any): config is ProjectConfigJSON {
  return (
    config &&
    typeof config === 'object' &&
    // basic section
    config.basic &&
    typeof config.basic.baseUrl === 'string' &&
    Array.isArray(config.basic.supportedLangs) &&
    typeof config.basic.defaultLang === 'string' &&
    // translations section
    config.translations &&
    typeof config.translations === 'object' &&
    // versioning section
    config.versioning &&
    Array.isArray(config.versioning.versions)
  );
}

/**
 * ISO文字列をDateオブジェクトに変換
 */
export function convertVersionJSONToRuntime(versionJSON: VersionConfigJSON): VersionConfig {
  return {
    ...versionJSON,
    date: new Date(versionJSON.date)
  };
}

/**
 * JSONスキーマから実行時設定に変換
 */
export function convertProjectConfigJSONToRuntime(configJSON: ProjectConfigJSON): ProjectConfig {
  return {
    ...configJSON,
    versioning: {
      versions: configJSON.versioning.versions.map(convertVersionJSONToRuntime)
    }
  };
}