/**
 * プロジェクト全体の設定（統合版）
 */
import type { Version } from '@docs/versioning';
import type { LocaleKey } from '@docs/i18n/locales';

// プロジェクト設定の型定義
interface ProjectTranslations {
  displayName: string;
  displayDescription: string;
  categories: Record<string, string>;
}

interface ProjectConfig {
  basic: {
    baseUrl: string;
    supportedLangs: LocaleKey[];
    defaultLang: LocaleKey;
  };
  translations: Record<LocaleKey, ProjectTranslations>;
  versioning: {
    versions: Version[];
  };
}

const projectConfig: ProjectConfig = {
  // 基本設定
  basic: {
    baseUrl: '/docs/sample-docs',
    supportedLangs: ['en', 'ja'],
    defaultLang: 'en'
  },
  
  // 翻訳データ（統合）
  translations: {
    en: {
      displayName: 'Sample Documentation',
      displayDescription: 'A comprehensive sample documentation showcasing multi-language and multi-version support.',
      categories: {
        guide: 'Guide',
        components: 'Components',
        advanced: 'Advanced',
        reference: 'Reference'
      }
    },
    ja: {
      displayName: 'サンプルドキュメント',
      displayDescription: '多言語・多バージョン対応を実演する包括的なサンプルドキュメントです。',
      categories: {
        guide: 'ガイド',
        components: 'コンポーネント',
        advanced: '高度な設定',
        reference: 'リファレンス',
        api: 'API',
        examples: 'サンプル'
      }
    }
  },
  
  // バージョン情報
  versioning: {
    versions: [
      { 
        id: 'v1', 
        name: 'Version 1.0', 
        date: new Date('2024-01-01'), 
        isLatest: false 
      },
      { 
        id: 'v2', 
        name: 'Version 2.0', 
        date: new Date('2025-01-01'), 
        isLatest: true 
      }
    ]
  }
};

// 後方互換性のためのアクセサー関数
export const getDisplayName = (lang: LocaleKey): string => {
  return projectConfig.translations[lang]?.displayName || projectConfig.translations.en.displayName;
};

export const getDisplayDescription = (lang: LocaleKey): string => {
  return projectConfig.translations[lang]?.displayDescription || projectConfig.translations.en.displayDescription;
};

export const getCategoryTranslations = () => {
  const result: Record<LocaleKey, Record<string, string>> = {} as Record<LocaleKey, Record<string, string>>;
  for (const lang of projectConfig.basic.supportedLangs) {
    result[lang] = projectConfig.translations[lang].categories;
  }
  return result;
};

// 従来のAPIとの互換性のため
export const getLegacyConfig = () => ({
  baseUrl: projectConfig.basic.baseUrl,
  supportedLangs: projectConfig.basic.supportedLangs,
  defaultLang: projectConfig.basic.defaultLang,
  versions: projectConfig.versioning.versions,
  displayName: {
    en: projectConfig.translations.en.displayName,
    ja: projectConfig.translations.ja.displayName
  },
  displayDescription: {
    en: projectConfig.translations.en.displayDescription,
    ja: projectConfig.translations.ja.displayDescription
  },
  categoryTranslations: getCategoryTranslations()
});

// 後方互換性のため、古いAPIをデフォルトエクスポートに混在させる
const compatibleConfig = {
  ...projectConfig,
  // 古いAPIのプロパティを直接アクセス可能にする
  baseUrl: projectConfig.basic.baseUrl,
  supportedLangs: projectConfig.basic.supportedLangs,
  defaultLang: projectConfig.basic.defaultLang,
  versions: projectConfig.versioning.versions,
  displayName: {
    en: projectConfig.translations.en.displayName,
    ja: projectConfig.translations.ja.displayName
  },
  displayDescription: {
    en: projectConfig.translations.en.displayDescription,
    ja: projectConfig.translations.ja.displayDescription
  },
  categoryTranslations: getCategoryTranslations()
};

export default compatibleConfig;
export type { ProjectConfig, ProjectTranslations };