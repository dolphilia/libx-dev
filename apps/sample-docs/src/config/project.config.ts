/**
 * プロジェクト全体の設定（統合版）
 */
import type { Version } from '@docs/versioning';

const projectConfig = {
  // プロジェクト基本情報
  baseUrl: '/docs/sample-docs',
  supportedLangs: ['en', 'ja'],
  defaultLang: 'en',
  
  // 多言語対応の表示名と説明（トップページでの表示用）
  displayName: {
    en: 'Sample Documentation',
    ja: 'サンプルドキュメント'
  },
  displayDescription: {
    en: 'A comprehensive sample documentation showcasing multi-language and multi-version support.',
    ja: '多言語・多バージョン対応を実演する包括的なサンプルドキュメントです。'
  },
  
  // バージョン情報
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
  ] as Version[],
  
  // カテゴリ翻訳
  categoryTranslations: {
    en: {
      guide: 'Guide',
      components: 'Components',
      advanced: 'Advanced',
      reference: 'Reference',
    },
    ja: {
      guide: 'ガイド',
      components: 'コンポーネント',
      advanced: '高度な設定',
      reference: 'リファレンス',
      api: 'API',
      examples: 'サンプル',
    }
  }
};

export default projectConfig;