/**
 * projects.config.json用のローダーユーティリティ
 * JSON設定読み込み + 動的プロジェクト生成の統合
 */
import fs from 'fs/promises';
import path from 'path';
import type { 
  ProjectsConfigJSON, 
  TopPageConfig, 
  Project, 
  ProjectDecoration,
  SiteConfigJSON,
  ContentConfigJSON
} from './projects-config-schema';
import { 
  convertProjectsConfigJSONToRuntime, 
  validateProjectsConfig 
} from './projects-config-schema';
import { scanAppsDirectory, detectProject, type DetectedProject } from '../utils/project-auto-detector';

// 設定キャッシュ
let _configCache: TopPageConfig | null = null;

/**
 * JSON設定ファイルを読み込み
 */
async function loadProjectsConfigFromJSON(configPath?: string): Promise<ProjectsConfigJSON> {
  const defaultPath = path.resolve(process.cwd(), 'src', 'config', 'projects.config.json');
  const filePath = configPath || defaultPath;
  
  try {
    const configContent = await fs.readFile(filePath, 'utf-8');
    const configJSON = JSON.parse(configContent) as ProjectsConfigJSON;
    
    // 設定の妥当性を検証
    if (!validateProjectsConfig(configJSON)) {
      throw new Error('Invalid projects configuration');
    }
    
    return configJSON;
  } catch (error) {
    throw new Error(`Failed to load projects config from ${filePath}: ${error}`);
  }
}

/**
 * 自動検出されたプロジェクトと手動設定を統合
 */
async function generateAutoProjects(decorations: Record<string, ProjectDecoration>): Promise<Project[]> {
  const projectIds = await scanAppsDirectory();
  const projects: Project[] = [];
  
  for (const id of projectIds) {
    try {
      const detected = await detectProject(id);
      const decoration = decorations[id] || {};
      
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
      console.warn(`プロジェクト ${id} の自動検出に失敗しました:`, error?.message || error);
      
      // 設定ファイルが見つからなくても基本情報でプロジェクトを追加
      const decoration = decorations[id] || {};
      
      // 基本的なフォールバックURLを生成（英語・日本語のみ）
      const basicFallbackUrl: Record<string, string> = {
        en: `/docs/${id}/en/v1/guide/getting-started`,
        ja: `/docs/${id}/ja/v1/guide/getting-started`
      };
      
      projects.push({
        id,
        name: {
          en: id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' '),
          ja: id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ')
        } as Record<string, string>,
        description: {
          en: `Documentation for ${id}`,
          ja: `${id}のドキュメント`
        } as Record<string, string>,
        path: `/docs/${id}`,
        contentPath: id,
        fallbackUrl: basicFallbackUrl,
        ...decoration
      });
    }
  }
  
  return projects;
}

/**
 * 完全なトップページ設定を生成
 */
export async function getTopPageConfig(): Promise<TopPageConfig> {
  if (_configCache) {
    return _configCache;
  }

  try {
    // JSON設定を読み込み
    const configJSON = await loadProjectsConfigFromJSON();
    const { siteConfig, content, projectDecorations } = convertProjectsConfigJSONToRuntime(configJSON);
    
    // 自動プロジェクト生成
    const projects = await generateAutoProjects(projectDecorations);
    
    // 統合設定を構築
    _configCache = {
      projects,
      ...siteConfig,
      ...content
    };
    
    return _configCache;
  } catch (error) {
    console.error('Failed to load top-page config:', error);
    
    // フォールバック設定
    return getFailsafeConfig();
  }
}

/**
 * エラー時のフォールバック設定
 */
function getFailsafeConfig(): TopPageConfig {
  return {
    projects: [],
    baseUrl: '',
    supportedLangs: ['en', 'ja'],
    defaultLang: 'en',
    repository: 'https://github.com/dolphilia',
    siteName: 'Libx',
    siteDescription: {
      en: 'Documentation site built with Astro',
      ja: 'Astroで構築されたドキュメントサイト'
    },
    heroTitle: {
      en: 'Documentation Hub',
      ja: 'ドキュメントハブ'
    },
    heroDescription: {
      en: 'Find all the documentation you need in one place',
      ja: '必要なすべてのドキュメントを一箇所で見つけることができます'
    }
  };
}

/**
 * 設定キャッシュをクリア（テスト用）
 */
export function clearConfigCache(): void {
  _configCache = null;
}

/**
 * JSON設定のみを読み込み（project生成を含まない）
 */
export async function loadStaticConfig(): Promise<{
  siteConfig: SiteConfigJSON;
  content: ContentConfigJSON;
  projectDecorations: Record<string, ProjectDecoration>;
}> {
  const configJSON = await loadProjectsConfigFromJSON();
  return convertProjectsConfigJSONToRuntime(configJSON);
}