/**
 * プロジェクト全体の設定（JSON移行版）
 */
import type { LocaleKey } from '@docs/i18n/locales';
import {
  loadProjectConfig,
  getDisplayName as getDisplayNameSync,
  getDisplayDescription as getDisplayDescriptionSync,
  getCategoryTranslations as getCategoryTranslationsSync,
  createLegacyConfig
} from './project-config-loader';
import type { ProjectConfig, LegacyProjectConfig } from './project-config-schema';

// 設定をキャッシュする変数
let _configCache: ProjectConfig | null = null;
let _legacyConfigCache: LegacyProjectConfig | null = null;

/**
 * プロジェクト設定を非同期で読み込む
 */
export async function getProjectConfig(): Promise<ProjectConfig> {
  if (!_configCache) {
    _configCache = await loadProjectConfig();
  }
  return _configCache;
}

/**
 * 後方互換性のあるプロジェクト設定を非同期で読み込む
 */
export async function getLegacyProjectConfig(): Promise<LegacyProjectConfig> {
  if (!_legacyConfigCache) {
    const config = await getProjectConfig();
    _legacyConfigCache = createLegacyConfig(config);
  }
  return _legacyConfigCache;
}

/**
 * 言語別の表示名を取得する関数
 */
export async function getDisplayNameAsync(lang: LocaleKey): Promise<string> {
  const config = await getProjectConfig();
  return getDisplayNameSync(config, lang);
}

/**
 * 言語別の表示説明を取得する関数
 */
export async function getDisplayDescriptionAsync(lang: LocaleKey): Promise<string> {
  const config = await getProjectConfig();
  return getDisplayDescriptionSync(config, lang);
}

/**
 * カテゴリ翻訳を取得する関数
 */
export async function getCategoryTranslationsAsync(): Promise<Record<LocaleKey, Record<string, string>>> {
  const config = await getProjectConfig();
  return getCategoryTranslationsSync(config);
}

// 同期版API（後方互換性のため）
// 注意: 同期版はSSRでは使用しないでください
let _syncConfig: LegacyProjectConfig | null = null;

/**
 * 同期版の設定取得（後方互換性のため）
 * 注意: この関数は事前に非同期版を呼んでキャッシュを準備した後に使用してください
 */
function getSyncConfig(): LegacyProjectConfig {
  if (!_syncConfig) {
    throw new Error('Configuration not loaded. Call getProjectConfig() or getLegacyProjectConfig() first.');
  }
  return _syncConfig;
}

// 後方互換性のための同期関数
export const getDisplayName = (lang: LocaleKey): string => {
  const config = getSyncConfig();
  return getDisplayNameSync(config, lang);
};

export const getDisplayDescription = (lang: LocaleKey): string => {
  const config = getSyncConfig();
  return getDisplayDescriptionSync(config, lang);
};

export const getCategoryTranslations = (): Record<LocaleKey, Record<string, string>> => {
  const config = getSyncConfig();
  return getCategoryTranslationsSync(config);
};

export const getLegacyConfig = (): LegacyProjectConfig => {
  return getSyncConfig();
};

// デフォルトエクスポート用のプロキシオブジェクト
const configProxy = new Proxy({} as LegacyProjectConfig, {
  get(target, prop) {
    const config = getSyncConfig();
    return (config as any)[prop];
  }
});

// 設定の初期化を行う関数（サーバーサイドで使用）
export async function initializeConfig(): Promise<void> {
  _syncConfig = await getLegacyProjectConfig();
}

export default configProxy;
export type { ProjectConfig, LegacyProjectConfig };