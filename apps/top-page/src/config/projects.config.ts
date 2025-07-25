/**
 * ドキュメントプロジェクト一覧の設定（自動検出対応）
 */
import type { LocaleKey } from '@docs/i18n/locales';
import type { IconName } from '@docs/ui/components';
import { scanAppsDirectory, detectProject, type DetectedProject } from '../utils/project-auto-detector';

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
  // 動的URL生成用の情報
  contentPath?: string; // コンテンツディレクトリのパス（sample-docs等）
  fallbackUrl?: Record<LocaleKey, string>; // フォールバック用の固定URL
}

// プロジェクト装飾設定（手動設定が必要な部分のみ）
interface ProjectDecoration {
  icon?: IconName;
  tags?: string[];
  isNew?: boolean;
  isUpdated?: boolean;
}

const projectDecorations: Record<string, ProjectDecoration> = {
  'sample-docs': {
    icon: 'file-text',
    tags: ['sample', 'documentation'],
    isNew: true
  }
  // 新しいプロジェクトを追加する場合はここに装飾情報を追加
};

/**
 * 自動検出されたプロジェクトと手動設定を統合
 */
async function generateAutoProjects(): Promise<Project[]> {
  const projectIds = await scanAppsDirectory();
  const projects: Project[] = [];
  
  for (const id of projectIds) {
    try {
      const detected = await detectProject(id);
      const decoration = projectDecorations[id] || {};
      
      projects.push({
        id: detected.id,
        name: detected.name,
        description: detected.description,
        path: detected.basePath,
        contentPath: detected.id,
        fallbackUrl: detected.fallbackUrls,
        ...decoration
      });
    } catch (error) {
      console.warn(`プロジェクト ${id} の自動検出に失敗しました:`, error);
    }
  }
  
  return projects;
}

/**
 * トップページ設定を生成する関数
 */
export async function getTopPageConfig() {
  const projects = await generateAutoProjects();
  
  return {
    // プロジェクト一覧
    projects,
  
    // GitHub Pagesのベースパス
    baseUrl: '',
    
    // サポートされている言語
    supportedLangs: ['en', 'ja'],
    
    // デフォルト言語
    defaultLang: 'en',
    
    // リポジトリURL
    repository: 'https://github.com/dolphilia',
    
    // サイト名
    siteName: 'Libx',
    
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

}
