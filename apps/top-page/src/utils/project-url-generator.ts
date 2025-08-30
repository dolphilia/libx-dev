/**
 * 設定ファイルベースのプロジェクトURL生成ユーティリティ
 * 各プロジェクトの言語サポート状況を考慮したURL生成
 */

import type { LocaleKey } from '@docs/i18n/locales';
import type { Project } from '../config/projects.config.new';
import { getTopPageConfig } from '../config/projects.config.new';
import fs from 'fs/promises';
import path from 'path';

/**
 * プロジェクトの最適なURLを生成
 * 1. プロジェクトの言語サポート状況を確認
 * 2. サポートしている場合は指定言語のURL
 * 3. サポートしていない場合はデフォルト言語（英語）にフォールバック
 */
export async function generateProjectUrl(project: Project, lang: LocaleKey): Promise<string> {
  // プロジェクトが指定言語をサポートしているかチェック
  const supportedLangs = await getProjectSupportedLanguages(project);
  const targetLang = supportedLangs.includes(lang) ? lang : 'en';
  
  // まずfallbackUrlを試す（より信頼性が高い）
  if (project.fallbackUrl && project.fallbackUrl[targetLang]) {
    return project.fallbackUrl[targetLang];
  }
  
  // targetLangが英語でない場合、英語のfallbackURLを試す
  if (project.fallbackUrl && project.fallbackUrl['en'] && targetLang !== 'en') {
    return project.fallbackUrl['en'];
  }
  
  // contentPathがある場合は動的生成を試行
  if (project.contentPath) {
    try {
      const dynamicUrl = await generateDynamicUrl(project.contentPath, targetLang, project.path);
      if (dynamicUrl) {
        return dynamicUrl;
      }
    } catch (error) {
      // 動的生成に失敗した場合は処理を継続
    }
  }
  
  // 最終フォールバック: 基本パス + 英語
  return `${project.path}/en`;
}

/**
 * プロジェクトがサポートしている言語一覧を取得
 */
async function getProjectSupportedLanguages(project: Project): Promise<LocaleKey[]> {
  if (!project.contentPath) {
    // contentPathがない場合はfallbackUrlから推測
    if (project.fallbackUrl) {
      return Object.keys(project.fallbackUrl) as LocaleKey[];
    }
    return ['en']; // デフォルト
  }

  try {
    // プロジェクトの設定ファイルから言語サポート情報を取得
    const projectConfigPath = path.resolve(process.cwd(), '..', '..', 'apps', project.contentPath, 'src', 'config', 'project.config.json');
    const configContent = await fs.readFile(projectConfigPath, 'utf-8');
    const config = JSON.parse(configContent);
    
    if (config.basic && config.basic.supportedLangs) {
      return config.basic.supportedLangs as LocaleKey[];
    }
  } catch (error) {
    // 設定ファイルが読み込めない場合は、実際のコンテンツディレクトリから判定
    try {
      const contentDir = path.resolve(process.cwd(), '..', '..', 'apps', project.contentPath, 'src', 'content', 'docs');
      const supportedLangs: LocaleKey[] = [];
      
      // 各バージョンディレクトリをチェック
      const versions = await fs.readdir(contentDir, { withFileTypes: true });
      for (const version of versions) {
        if (version.isDirectory()) {
          const versionPath = path.join(contentDir, version.name);
          const langs = await fs.readdir(versionPath, { withFileTypes: true });
          for (const langDir of langs) {
            if (langDir.isDirectory() && !supportedLangs.includes(langDir.name as LocaleKey)) {
              supportedLangs.push(langDir.name as LocaleKey);
            }
          }
        }
      }
      
      if (supportedLangs.length > 0) {
        return supportedLangs;
      }
    } catch (contentError) {
      // コンテンツディレクトリもチェックできない場合
    }
  }
  
  // フォールバック: fallbackUrlから推測、または英語のみ
  if (project.fallbackUrl) {
    return Object.keys(project.fallbackUrl) as LocaleKey[];
  }
  
  return ['en'];
}

/**
 * 動的URL生成（設定ファイルベース）
 */
async function generateDynamicUrl(contentPath: string, lang: LocaleKey, basePath: string): Promise<string | null> {
  // import.meta.env.PROD でビルド環境かどうか判定
  const isProd = typeof window !== 'undefined' || process.env.NODE_ENV === 'production';
  
  if (isProd) {
    // プロダクション環境では動的生成をスキップ
    return null;
  }
  
  // 設定ファイルから対応するプロジェクトを検索
  const config = await getTopPageConfig();
  const project = config.projects.find(p => p.contentPath === contentPath);
  
  if (project && project.fallbackUrl && project.fallbackUrl[lang]) {
    // 設定ファイルのフォールバックURLを使用
    return project.fallbackUrl[lang];
  }
  
  // プロジェクトが見つからない場合は、実際のコンテンツから最初のページを検索
  try {
    const firstPageUrl = await findFirstAvailablePage(contentPath, lang);
    if (firstPageUrl) {
      return `${basePath}/${firstPageUrl}`;
    }
  } catch (error) {
    // 実際のコンテンツ検索に失敗した場合は汎用パターンを生成
  }
  
  // 最終的な汎用パターン生成
  // 新しい構造: [version]/[lang]/ の順序で共通パターンを使用
  return `${basePath}/v2/${lang}/01-guide/01-getting-started`;
}

/**
 * 指定されたプロジェクトと言語で利用可能な最初のページを検索
 */
async function findFirstAvailablePage(contentPath: string, lang: LocaleKey): Promise<string | null> {
  try {
    const contentDir = path.resolve(process.cwd(), '..', '..', 'apps', contentPath, 'src', 'content', 'docs');
    
    // バージョンディレクトリを取得（v2, v1の順で優先）
    const versions = await fs.readdir(contentDir, { withFileTypes: true });
    const sortedVersions = versions
      .filter(v => v.isDirectory())
      .sort((a, b) => {
        // v2 > v1 の順序
        if (a.name === 'v2' && b.name === 'v1') return -1;
        if (a.name === 'v1' && b.name === 'v2') return 1;
        return a.name.localeCompare(b.name);
      });

    for (const version of sortedVersions) {
      const langDir = path.join(contentDir, version.name, lang);
      
      try {
        await fs.access(langDir);
        
        // カテゴリディレクトリを取得
        const categories = await fs.readdir(langDir, { withFileTypes: true });
        const sortedCategories = categories
          .filter(c => c.isDirectory())
          .sort((a, b) => a.name.localeCompare(b.name));

        for (const category of sortedCategories) {
          const categoryPath = path.join(langDir, category.name);
          const files = await fs.readdir(categoryPath);
          const mdxFiles = files
            .filter(f => f.endsWith('.mdx'))
            .sort();

          if (mdxFiles.length > 0) {
            const fileName = mdxFiles[0].replace('.mdx', '');
            return `${version.name}/${lang}/${category.name}/${fileName}`;
          }
        }
      } catch {
        // 言語ディレクトリが存在しない場合はスキップ
        continue;
      }
    }
  } catch (error) {
    // ディレクトリアクセスエラー
  }
  
  return null;
}