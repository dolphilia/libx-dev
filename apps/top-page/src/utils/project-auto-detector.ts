/**
 * プロジェクト自動検出ユーティリティ
 * apps/ディレクトリ内のドキュメントプロジェクトを自動検出し、
 * 設定ファイルとコンテンツ構造から完全なプロジェクト情報を生成
 */

import fs from 'fs/promises';
import path from 'path';
import type { LocaleKey } from '@docs/i18n/locales';

export interface DetectedProject {
  id: string;
  name: string;
  description: Record<LocaleKey, string>;
  basePath: string;
  supportedLangs: LocaleKey[];
  fallbackUrls: Record<LocaleKey, string>;
}

export interface ContentFile {
  lang: string;
  version: string;
  section: string;
  fileName: string;
  url: string;
}

/**
 * apps/ディレクトリ内のドキュメントプロジェクトを検出
 */
export async function scanAppsDirectory(): Promise<string[]> {
  const appsDir = path.resolve(process.cwd(), '..', '..');
  const projects: string[] = [];
  
  try {
    const entries = await fs.readdir(appsDir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (!entry.isDirectory() || entry.name === 'top-page') {
        continue;
      }
      
      // 中身がappsディレクトリの場合、その中のプロジェクトをチェック
      if (entry.name === 'apps') {
        const appsSubDir = path.join(appsDir, entry.name);
        try {
          const appEntries = await fs.readdir(appsSubDir, { withFileTypes: true });
          for (const appEntry of appEntries) {
            if (!appEntry.isDirectory() || appEntry.name === 'top-page') {
              continue;
            }
            
            const contentPath = path.join(appsSubDir, appEntry.name, 'src', 'content', 'docs');
            try {
              await fs.access(contentPath);
              projects.push(appEntry.name);
            } catch {
              // ドキュメントディレクトリがない場合はスキップ
            }
          }
        } catch (error) {
          console.warn(`appsディレクトリのスキャンに失敗: ${error}`);
        }
      } else {
        // 通常のディレクトリとして処理
        const contentPath = path.join(appsDir, entry.name, 'src', 'content', 'docs');
        try {
          await fs.access(contentPath);
          projects.push(entry.name);
        } catch {
          // ドキュメントディレクトリがない場合はスキップ
        }
      }
    }
  } catch (error) {
    console.warn('apps/ディレクトリのスキャンに失敗しました:', error);
  }
  
  return projects;
}

/**
 * 指定されたプロジェクトの情報を自動検出
 */
export async function detectProject(projectId: string): Promise<DetectedProject> {
  const appsDir = path.resolve(process.cwd(), '..', '..');
  const projectPath = path.join(appsDir, 'apps', projectId);
  
  // 基本情報を docs.config.ts から取得
  const docsConfig = await loadDocsConfig(projectPath);
  
  // 最新バージョンを versions.config.ts から取得
  const latestVersion = await getLatestVersion(projectPath);
  
  // コンテンツファイルをスキャン
  const contentFiles = await scanProjectContent(projectPath);
  
  // 各言語の最初のページを自動特定
  const fallbackUrls: Record<string, string> = {};
  for (const lang of docsConfig.supportedLangs) {
    const firstFile = findFirstContentFile(contentFiles, lang, latestVersion);
    fallbackUrls[lang] = `${docsConfig.basePath}/${lang}/${latestVersion}/${firstFile}`;
  }
  
  return {
    id: projectId,
    name: docsConfig.name,
    description: docsConfig.description,
    basePath: docsConfig.basePath,
    supportedLangs: docsConfig.supportedLangs,
    fallbackUrls
  };
}

/**
 * project.config.ts または docs.config.ts から基本設定を読み込み
 */
async function loadDocsConfig(projectPath: string) {
  // 統合設定ファイル（project.config.ts）を優先
  const projectConfigPath = path.join(projectPath, 'src', 'config', 'project.config.ts');
  const docsConfigPath = path.join(projectPath, 'src', 'config', 'docs.config.ts');
  
  try {
    let configContent: string;
    let isProjectConfig = false;
    
    // project.config.ts を優先的に読み込み
    try {
      configContent = await fs.readFile(projectConfigPath, 'utf-8');
      isProjectConfig = true;
    } catch {
      // フォールバック: docs.config.ts を読み込み
      configContent = await fs.readFile(docsConfigPath, 'utf-8');
    }
    
    // 設定値を抽出するシンプルなパーサー
    const name = extractConfigValue(configContent, 'name') || 'Unknown Project';
    const description = extractConfigValue(configContent, 'description') || 'No description available';
    const baseUrl = extractConfigValue(configContent, isProjectConfig ? 'baseUrl' : 'baseUrl') || `/docs/${path.basename(projectPath)}`;
    const supportedLangs = extractArrayValue(configContent, 'supportedLangs') || ['en', 'ja'];
    
    return {
      name,
      description: {
        en: description,
        ja: description
      } as Record<LocaleKey, string>,
      basePath: baseUrl,
      supportedLangs: supportedLangs as LocaleKey[]
    };
  } catch (error) {
    console.warn(`設定ファイルの読み込みに失敗: ${projectPath}`, error);
    
    // フォールバック設定
    return {
      name: path.basename(projectPath),
      description: {
        en: `Documentation for ${path.basename(projectPath)}`,
        ja: `${path.basename(projectPath)}のドキュメント`
      } as Record<LocaleKey, string>,
      basePath: `/docs/${path.basename(projectPath)}`,
      supportedLangs: ['en', 'ja'] as LocaleKey[]
    };
  }
}

/**
 * project.config.ts または versions.config.ts から最新バージョンを取得
 */
async function getLatestVersion(projectPath: string): Promise<string> {
  const projectConfigPath = path.join(projectPath, 'src', 'config', 'project.config.ts');
  const versionsPath = path.join(projectPath, 'src', 'config', 'versions.config.ts');
  
  // 統合設定ファイル（project.config.ts）を優先
  try {
    const projectContent = await fs.readFile(projectConfigPath, 'utf-8');
    
    // isLatest: true を持つバージョンを検索
    const latestMatch = projectContent.match(/id:\s*['"`]([^'"`]+)['"`][^}]*isLatest:\s*true/);
    if (latestMatch) {
      return latestMatch[1];
    }
    
    // フォールバック: v2 > v1 の順で検索
    if (projectContent.includes("'v2'") || projectContent.includes('"v2"')) {
      return 'v2';
    }
    if (projectContent.includes("'v1'") || projectContent.includes('"v1"')) {
      return 'v1';
    }
  } catch {
    // project.config.ts が見つからない場合、versions.config.ts を試す
    try {
      const versionsContent = await fs.readFile(versionsPath, 'utf-8');
      
      // isLatest: true を持つバージョンを検索
      const latestMatch = versionsContent.match(/id:\s*['"`]([^'"`]+)['"`][^}]*isLatest:\s*true/);
      if (latestMatch) {
        return latestMatch[1];
      }
      
      // フォールバック: v2 > v1 の順で検索
      if (versionsContent.includes("'v2'") || versionsContent.includes('"v2"')) {
        return 'v2';
      }
      if (versionsContent.includes("'v1'") || versionsContent.includes('"v1"')) {
        return 'v1';
      }
    } catch (error) {
      console.warn(`バージョン設定ファイルの読み込みに失敗: ${projectPath}`, error);
    }
  }
  
  return 'v1'; // デフォルト
}

/**
 * プロジェクトのコンテンツファイルをスキャン
 */
async function scanProjectContent(projectPath: string): Promise<ContentFile[]> {
  const contentDir = path.join(projectPath, 'src', 'content', 'docs');
  const files: ContentFile[] = [];
  
  try {
    const mdxFiles = await scanDirectory(contentDir);
    
    for (const filePath of mdxFiles) {
      const pathParts = filePath.split(path.sep);
      
      if (pathParts.length >= 4) {
        const [lang, version, section, fileName] = pathParts;
        
        // ファイル名から拡張子を除去
        const fileSlug = fileName.replace(/\.mdx?$/, '');
        
        files.push({
          lang,
          version,
          section,
          fileName: fileSlug,
          url: `${section}/${fileSlug}`
        });
      }
    }
  } catch (error) {
    console.warn(`コンテンツスキャンに失敗: ${projectPath}`, error);
  }
  
  return files;
}

/**
 * ディレクトリを再帰的にスキャンしてMDXファイルを探す
 */
async function scanDirectory(dirPath: string, basePath: string = ''): Promise<string[]> {
  const files: string[] = [];
  
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const relativePath = basePath ? path.join(basePath, entry.name) : entry.name;
      
      if (entry.isDirectory()) {
        const subFiles = await scanDirectory(fullPath, relativePath);
        files.push(...subFiles);
      } else if (entry.isFile() && entry.name.match(/\.mdx?$/)) {
        files.push(relativePath);
      }
    }
  } catch (error) {
    // ディレクトリが存在しない場合やアクセス権限がない場合はスキップ
  }
  
  return files;
}

/**
 * 指定した言語・バージョンの最初のコンテンツファイルを特定
 */
function findFirstContentFile(files: ContentFile[], lang: string, version: string): string {
  const filtered = files
    .filter(f => f.lang === lang && f.version === version)
    .sort((a, b) => {
      // セクション優先度
      const sectionPriority: Record<string, number> = { 
        guide: 0, 
        api: 1, 
        examples: 2, 
        reference: 3,
        faq: 4
      };
      const aPriority = sectionPriority[a.section] || 99;
      const bPriority = sectionPriority[b.section] || 99;
      
      if (aPriority !== bPriority) {
        return aPriority - bPriority;
      }
      
      // ファイル番号でソート（01-getting-started等）
      const aNum = parseInt(a.fileName.match(/^(\d+)-/)?.[1] || '999');
      const bNum = parseInt(b.fileName.match(/^(\d+)-/)?.[1] || '999');
      return aNum - bNum;
    });
    
  if (filtered.length > 0) {
    return filtered[0].url;
  }
  
  // フォールバック
  return 'guide/getting-started';
}

/**
 * 設定ファイルから値を抽出するヘルパー
 */
function extractConfigValue(content: string, key: string): string | null {
  const regex = new RegExp(`${key}:\\s*['"\`]([^'"\`]+)['"\`]`);
  const match = content.match(regex);
  return match ? match[1] : null;
}

/**
 * 設定ファイルから配列値を抽出するヘルパー
 */
function extractArrayValue(content: string, key: string): string[] | null {
  const regex = new RegExp(`${key}:\\s*\\[([^\\]]+)\\]`);
  const match = content.match(regex);
  if (match) {
    return match[1]
      .split(',')
      .map(item => item.trim().replace(/['"`]/g, ''))
      .filter(item => item.length > 0);
  }
  return null;
}