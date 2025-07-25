/**
 * プロジェクト全体の設定（統合版）
 */
import type { Version } from '@docs/versioning';

const projectConfig = {
  // プロジェクト基本情報
  name: 'Sample Docs',
  description: 'Sample documentation for the docs-astro project',
  baseUrl: '/docs/sample-docs',
  supportedLangs: ['en', 'ja'],
  defaultLang: 'en',
  
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
  ] as Version[]
};

export default projectConfig;