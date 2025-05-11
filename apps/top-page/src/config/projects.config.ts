/**
 * ドキュメントプロジェクト一覧の設定
 */
import type { LocaleKey } from '@docs/i18n/locales';
import type { IconName } from '@docs/ui/components';

// プロジェクト情報の型定義
export interface Project {
  id: string;
  name: string;
  description: Record<LocaleKey, string>;
  path: string;
  icon?: IconName;
  tags?: string[];
  isNew?: boolean;
  isUpdated?: boolean;
}

// プロジェクト一覧
const projects: Project[] = [
  {
    id: 'sample-docs',
    name: 'Sample Docs',
    description: {
      en: 'Sample documentation for the docs-astro project',
      ja: 'docs-astroプロジェクトのサンプルドキュメント'
    },
    path: '/docs/sample-docs',
    icon: 'document',
    tags: ['sample', 'documentation'],
    isNew: true
  }
  // 将来的に他のプロジェクトを追加する場合はここに追加
];

// トップページの設定
export const topPageConfig = {
  // プロジェクト一覧
  projects,
  
  // GitHub Pagesのベースパス
  baseUrl: '/docs-astro',
  
  // サポートされている言語
  supportedLangs: ['en', 'ja'],
  
  // デフォルト言語
  defaultLang: 'en',
  
  // リポジトリURL
  repository: 'https://github.com/dolphilia/docs-astro',
  
  // サイト名
  siteName: 'Docs Astro',
  
  // サイトの説明
  siteDescription: {
    en: 'Documentation site built with Astro',
    ja: 'Astroで構築されたドキュメントサイト'
  },
  
  // ヒーローセクションのタイトル
  heroTitle: {
    en: 'Documentation Hub',
    ja: 'ドキュメントハブ'
  },
  
  // ヒーローセクションの説明
  heroDescription: {
    en: 'Find all the documentation you need in one place',
    ja: '必要なすべてのドキュメントを一箇所で見つけることができます'
  }
};

export default topPageConfig;
