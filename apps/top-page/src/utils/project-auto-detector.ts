/**
 * プロジェクト自動検出ユーティリティ（JSON対応版）
 * apps/ディレクトリ内のドキュメントプロジェクトを自動検出し、
 * JSON設定ファイルとコンテンツ構造から完全なプロジェクト情報を生成
 */

import fs from 'fs/promises';
import path from 'path';
import type { LocaleKey } from '@docs/i18n/locales';

export interface DetectedProject {
  id: string;
  name: Record<LocaleKey, string>;
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
  
  // 基本情報をJSON設定ファイルから取得
  const docsConfig = await loadDocsConfigFromJSON(projectPath);
  
  // 最新バージョンを取得
  const latestVersion = getLatestVersion(docsConfig.versioning.versions);
  
  // コンテンツファイルをスキャン
  const contentFiles = await scanProjectContent(projectPath);
  
  // 各言語の最初のページを自動特定
  const fallbackUrls: Record<string, string> = {};
  for (const lang of docsConfig.basic.supportedLangs) {
    const firstFile = findFirstContentFile(contentFiles, lang, latestVersion);
    if (firstFile) {
      fallbackUrls[lang] = `${docsConfig.basic.baseUrl}/${lang}/${latestVersion}/${firstFile}`;
    } else {
      // コンテンツが存在しない言語は英語にフォールバック
      const englishFile = findFirstContentFile(contentFiles, 'en', latestVersion);
      fallbackUrls[lang] = `${docsConfig.basic.baseUrl}/en/${latestVersion}/${englishFile || 'guide/getting-started'}`;
    }
  }
  
  return {
    id: projectId,
    name: extractDisplayNames(docsConfig),
    description: extractDisplayDescriptions(docsConfig),
    basePath: docsConfig.basic.baseUrl,
    supportedLangs: docsConfig.basic.supportedLangs,
    fallbackUrls
  };
}

/**
 * JSON設定ファイルからプロジェクト設定を読み込み
 */
async function loadDocsConfigFromJSON(projectPath: string) {
  const configPath = path.join(projectPath, 'src', 'config', 'project.config.json');
  
  try {
    const configContent = await fs.readFile(configPath, 'utf-8');
    const config = JSON.parse(configContent);
    
    // Date文字列をDateオブジェクトに変換
    if (config.versioning?.versions) {
      config.versioning.versions = config.versioning.versions.map((version: any) => ({
        ...version,
        date: new Date(version.date)
      }));
    }
    
    return config;
  } catch (error) {
    throw new Error(`JSONプロジェクト設定ファイルの読み込みに失敗: ${configPath} - ${error}`);
  }
}

/**
 * 表示名を抽出
 */
function extractDisplayNames(config: any): Record<LocaleKey, string> {
  const result: Record<LocaleKey, string> = {} as Record<LocaleKey, string>;
  
  if (config.translations) {
    for (const [lang, translation] of Object.entries(config.translations)) {
      if (translation && typeof translation === 'object' && (translation as any).displayName) {
        result[lang as LocaleKey] = (translation as any).displayName;
      }
    }
  }
  
  // フォールバック
  if (Object.keys(result).length === 0) {
    result.en = 'Unknown Project';
    result.ja = '不明なプロジェクト';
  }
  
  return result;
}

/**
 * 表示説明を抽出
 */
function extractDisplayDescriptions(config: any): Record<LocaleKey, string> {
  const result: Record<LocaleKey, string> = {} as Record<LocaleKey, string>;
  
  if (config.translations) {
    for (const [lang, translation] of Object.entries(config.translations)) {
      if (translation && typeof translation === 'object' && (translation as any).displayDescription) {
        result[lang as LocaleKey] = (translation as any).displayDescription;
      }
    }
  }
  
  // フォールバック
  if (Object.keys(result).length === 0) {
    result.en = 'No description available';
    result.ja = '説明がありません';
  }
  
  return result;
}

/**
 * 最新バージョンを取得
 */
function getLatestVersion(versions: any[]): string {
  if (!versions || versions.length === 0) {
    return 'v1';
  }
  
  const latestVersion = versions.find(v => v.isLatest);
  if (latestVersion) {
    return latestVersion.id;
  }
  
  // フォールバック: v2 > v1 の順で検索
  const v2 = versions.find(v => v.id === 'v2');
  if (v2) return 'v2';
  
  const v1 = versions.find(v => v.id === 'v1');
  if (v1) return 'v1';
  
  // 最後のフォールバック
  return versions[0]?.id || 'v1';
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
function findFirstContentFile(files: ContentFile[], lang: string, version: string): string | null {
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
  
  // コンテンツが見つからない場合はnullを返す
  return null;
}