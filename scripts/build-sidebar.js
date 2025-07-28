#!/usr/bin/env node

/**
 * サイドバー生成スクリプト
 * 
 * このスクリプトは、ドキュメントコンテンツからサイドバーを生成し、
 * 静的JSONファイルとして出力します。
 * 
 * 拡張機能:
 * - 複数のプロジェクトに対応（apps/ディレクトリ内の全プロジェクト）
 * - 言語とバージョンを動的に検出
 * - JSONファイルの圧縮
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import { saveCompressedJson, parseMarkdownFile } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 基本設定
const config = {
  appsDir: path.join(rootDir, 'apps'),
  excludedProjects: ['top-page'], // 除外するプロジェクト名
};

/**
 * メイン処理
 */
async function main() {
  try {
    console.log('サイドバーの生成を開始します...');
    
    // appsディレクトリ内のプロジェクトを検出
    const projects = await detectProjects();
    
    if (projects.length === 0) {
      console.warn('ドキュメントプロジェクトが見つかりませんでした。');
      return;
    }
    
    // 各プロジェクトに対して処理を実行
    for (const project of projects) {
      console.log(`プロジェクト ${project.name} の処理を開始します...`);
      
      // 出力ディレクトリの作成
      await fs.mkdir(project.outputDir, { recursive: true });
      
      // 言語とバージョンの組み合わせごとにサイドバーを生成
      for (const lang of project.languages) {
        for (const version of project.versions) {
          console.log(`  ${lang}/${version} のサイドバーを生成中...`);
          
          try {
            // サイドバーを生成
            const sidebar = await generateSidebarForVersion(project, lang, version);
            
            // サイドバーをJSONとして保存（圧縮版も含む）
            const outputPath = path.join(project.outputDir, `sidebar-${lang}-${version}.json`);
            await saveCompressedJson(outputPath, sidebar);
          } catch (error) {
            console.error(`  ${lang}/${version} のサイドバー生成中にエラーが発生しました:`, error);
          }
        }
      }
    }
    
    console.log('サイドバーの生成が完了しました');
  } catch (error) {
    console.error('エラーが発生しました:', error);
    process.exit(1);
  }
}

/**
 * appsディレクトリ内のプロジェクトを検出する
 */
async function detectProjects() {
  const projects = [];
  
  try {
    // appsディレクトリ内のディレクトリを取得
    const entries = await fs.readdir(config.appsDir, { withFileTypes: true });
    const projectDirs = entries.filter(entry => entry.isDirectory());
    
    for (const dir of projectDirs) {
      const projectName = dir.name;
      
      // 除外プロジェクトをスキップ
      if (config.excludedProjects.includes(projectName)) {
        console.log(`プロジェクト ${projectName} は除外対象です。スキップします。`);
        continue;
      }
      
      const projectPath = path.join(config.appsDir, projectName);
      
      // src/content/docs ディレクトリが存在するかチェック
      const contentPath = path.join(projectPath, 'src', 'content', 'docs');
      try {
        await fs.access(contentPath);
      } catch (error) {
        // ドキュメントディレクトリがない場合はスキップ
        console.log(`${projectName} にはドキュメントディレクトリがありません。スキップします。`);
        continue;
      }
      
      // 言語ディレクトリを検出
      const languages = await detectLanguages(contentPath);
      
      if (languages.length === 0) {
        console.log(`${projectName} に言語ディレクトリが見つかりませんでした。スキップします。`);
        continue;
      }
      
      // 各言語ディレクトリ内のバージョンを検出
      const versions = await detectVersions(contentPath, languages[0]);
      
      if (versions.length === 0) {
        console.log(`${projectName} にバージョンディレクトリが見つかりませんでした。スキップします。`);
        continue;
      }
      
      // 出力ディレクトリを設定
      const outputDir = path.join(projectPath, 'public', 'sidebar');
      
      // プロジェクト情報を追加
      projects.push({
        name: projectName,
        path: projectPath,
        contentPath,
        outputDir,
        languages,
        versions
      });
      
      console.log(`プロジェクト ${projectName} を検出しました:`);
      console.log(`  言語: ${languages.join(', ')}`);
      console.log(`  バージョン: ${versions.join(', ')}`);
    }
  } catch (error) {
    console.error('プロジェクト検出中にエラーが発生しました:', error);
  }
  
  return projects;
}

/**
 * ドキュメントディレクトリ内の言語ディレクトリを検出する
 */
async function detectLanguages(contentPath) {
  try {
    const entries = await fs.readdir(contentPath, { withFileTypes: true });
    return entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name);
  } catch (error) {
    console.error('言語ディレクトリの検出中にエラーが発生しました:', error);
    return [];
  }
}

/**
 * 言語ディレクトリ内のバージョンディレクトリを検出する
 */
async function detectVersions(contentPath, language) {
  try {
    const langPath = path.join(contentPath, language);
    const entries = await fs.readdir(langPath, { withFileTypes: true });
    return entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name);
  } catch (error) {
    console.error('バージョンディレクトリの検出中にエラーが発生しました:', error);
    return [];
  }
}

/**
 * ディレクトリ名から順序番号を抽出します
 * @param dirname ディレクトリ名（例: "01-guide"）
 * @returns 順序番号（例: 1）、見つからない場合は999
 */
function extractOrderFromDirectoryName(dirname) {
  const match = dirname.match(/^(\d+)-/);
  return match ? parseInt(match[1], 10) : 999;
}

/**
 * 指定された言語とバージョンのサイドバーを生成する
 */
async function generateSidebarForVersion(project, lang, version) {
  // プロジェクトの翻訳設定を取得
  const categoryTranslations = await getProjectCategoryTranslations(project);
  // ドキュメントファイルを検索
  const pattern = `${lang}/${version}/**/*.{md,mdx}`;
  
  const files = await glob(pattern, { cwd: project.contentPath });
  
  // ドキュメント情報を収集
  const docs = [];
  
  for (const file of files) {
    try {
      const filePath = path.join(project.contentPath, file);
      const { frontmatter: data } = await parseMarkdownFile(filePath);
      
      // スラグを生成（ファイルパスから拡張子を除去）
      const slug = file.replace(/\.[^.]+$/, '');
      
      docs.push({
        slug,
        data
      });
    } catch (error) {
      console.warn(`ファイルの処理中にエラーが発生しました: ${file}`, error);
    }
  }
  
  // カテゴリごとにドキュメントを整理
  const categories = {};
  
  
  docs.forEach(doc => {
    // パスからカテゴリを取得
    const parts = doc.slug.split('/');
    const pathCategory = parts.length >= 3 ? parts[2] : 'uncategorized';
    
    // ディレクトリ名から純粋なカテゴリ名を抽出（数字プレフィックスを除去）
    const cleanCategory = pathCategory.replace(/^\d+-/, '');
    const category = doc.data.category || cleanCategory;
    
    // ディレクトリ名から順序を取得
    const categoryDirName = parts[2] || 'uncategorized';
    const order = extractOrderFromDirectoryName(categoryDirName);
    
    if (!categories[category]) {
      categories[category] = {
        docs: [],
        order: order,
        title: undefined // 後で設定
      };
    }
    
    // カテゴリの順序を更新（複数のドキュメントで同じカテゴリが使用されている場合、最小の順序を使用）
    if (order < categories[category].order) {
      categories[category].order = order;
    }
    
    categories[category].docs.push(doc);
  });
  
  // カテゴリごとにドキュメントを順序で並べ替え
  Object.keys(categories).forEach(category => {
    categories[category].docs.sort((a, b) => {
      const orderA = a.data.order || 999;
      const orderB = b.data.order || 999;
      return orderA - orderB;
    });
  });
  
  // カテゴリを順序で並べ替え
  const sortedCategories = Object.entries(categories).sort((a, b) => {
    return a[1].order - b[1].order;
  });
  
  // プロジェクト固有のベースURLを取得
  const baseUrl = await getProjectBaseUrl(project);
  
  // サイドバー項目の生成
  return sortedCategories.map(([category, { docs }]) => {
    // カテゴリ名を翻訳（プロジェクト設定から取得）
    const title = translateCategory(category, lang, categoryTranslations);
    
    return {
      title,
      items: docs.map(doc => {
        const slugParts = doc.slug.split('/').slice(2);
        let fullPath;
        if (baseUrl === '/') {
          fullPath = `/${lang}/${version}/${slugParts.join('/')}`;
        } else {
          fullPath = `${baseUrl}/${lang}/${version}/${slugParts.join('/')}`;
        }
        return {
          title: doc.data.title,
          href: fullPath
        };
      })
    };
  });
}

/**
 * プロジェクト設定からカテゴリ翻訳を取得する
 */
async function getProjectCategoryTranslations(project) {
  try {
    const configPath = path.join(project.path, 'src', 'config', 'project.config.ts');
    const configContent = await fs.readFile(configPath, 'utf-8');
    
    // プロジェクト設定ファイルの翻訳設定読み込みを試行（新構造対応）
    // 新しい translations 構造と古い categoryTranslations 構造の両方をサポート
    let categoryTranslationsMatch = configContent.match(/categoryTranslations\s*:\s*\{([\s\S]*?)\n\s*\}/);
    
    // 新しい translations 構造からも抽出を試行
    if (!categoryTranslationsMatch) {
      const translationsMatch = configContent.match(/translations\s*:\s*\{([\s\S]*?)\n\s*\}/);
      if (translationsMatch) {
        // translations 構造から categories を抽出
        categoryTranslationsMatch = extractCategoriesFromTranslations(translationsMatch[1]);
      }
    }
    
    if (categoryTranslationsMatch) {
      // 最小限の翻訳設定（よく使われるものだけ）
      const translations = {
        en: {
          guide: 'Guide',
          reference: 'Reference'
        },
        ja: {
          guide: 'ガイド',
          reference: 'リファレンス'
        }
      };
      return translations;
    }
  } catch (error) {
    console.warn(`  プロジェクト ${project.name} の翻訳設定の読み込み中にエラー: ${error.message}`);
  }
  
  return null;
}

/**
 * カテゴリ名を翻訳する
 */
function translateCategory(category, lang, translations) {
  if (translations && translations[lang] && translations[lang][category]) {
    return translations[lang][category];
  }
  
  // フォールバック: 英語の翻訳があればそれを使用
  if (translations && translations['en'] && translations['en'][category]) {
    return translations['en'][category];
  }
  
  // 最終フォールバック: カテゴリ名の先頭を大文字にして返す（既存のロジック）
  return category.charAt(0).toUpperCase() + category.slice(1);
}

/**
 * プロジェクト固有のベースURLを取得する
 */
async function getProjectBaseUrl(project) {
  // プロジェクト名に基づく動的なベースURL生成
  let projectSpecificBase = `/docs/${project.name}`;
  
  const configPath = path.join(project.path, 'astro.config.mjs');
  let astroBase = '';

  try {
    const configFileContent = await fs.readFile(configPath, 'utf-8');
    // export default defineConfig({ base: '/foo' }) や export default { base: "/bar" } や base: '.' に対応
    const baseMatch = configFileContent.match(/base\s*:\s*['"]((?:\/[^\\s'"]*|\.)*)['"]/);
    if (baseMatch && baseMatch[1]) {
      astroBase = baseMatch[1];
      if (astroBase === '.') { // '.' はルートを示すので空文字列に
        astroBase = '';
      }
      // astroBase が空でなく、かつ '/' で始まらない場合は '/' を追加
      if (astroBase && !astroBase.startsWith('/')) {
        astroBase = '/' + astroBase;
      }
      // astroBase が '/' より長く、かつ末尾が '/' の場合は削除 (例: /foo/ -> /foo)
      if (astroBase.length > 1 && astroBase.endsWith('/')) {
        astroBase = astroBase.slice(0, -1);
      }
      if (astroBase) {
        console.log(`  プロジェクト ${project.name} の astro.config.mjs から base='${astroBase}' を読み込みました。`);
      }
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      // astro.config.mjs が存在しないのは通常ケースなので、警告ログは出さない
      // console.log(`  astro.config.mjs が見つかりませんでした: ${project.name} (${configPath})`);
    } else {
      console.warn(`  プロジェクト ${project.name} の astro.config.mjs の読み込み/解析中にエラー: ${error.message}`);
    }
  }

  let finalBaseUrl = projectSpecificBase;
  if (astroBase && astroBase !== '/') { // astroBase が有効で、かつ単なる '/' でない場合
    // projectSpecificBase の末尾スラッシュを削除
    if (finalBaseUrl.endsWith('/')) {
      finalBaseUrl = finalBaseUrl.slice(0, -1);
    }
    // astroBase は先頭スラッシュが保証されているか、空文字列
    finalBaseUrl = finalBaseUrl + astroBase;
  }
  
  // 最終的なURLの末尾スラッシュを削除（ただしルート '/' の場合はそのまま）
  if (finalBaseUrl.endsWith('/') && finalBaseUrl !== '/') {
     finalBaseUrl = finalBaseUrl.slice(0, -1);
  }

  return finalBaseUrl;
}

/**
 * 新しい translations 構造から categories 部分を抽出
 */
function extractCategoriesFromTranslations(translationsContent) {
  try {
    // 各言語のセクションを抽出
    const langSections = {};
    const langRegex = /(\w+):\s*\{([\s\S]*?)\n\s*\}/g;
    let langMatch;
    
    while ((langMatch = langRegex.exec(translationsContent)) !== null) {
      const lang = langMatch[1];
      const langContent = langMatch[2];
      
      // categories オブジェクトを抽出
      const categoriesMatch = langContent.match(/categories:\s*\{([\s\S]*?)\n\s*\}/);
      if (categoriesMatch) {
        langSections[lang] = categoriesMatch[1];
      }
    }
    
    // categoryTranslations と同じ形式に変換
    if (Object.keys(langSections).length > 0) {
      let result = '';
      for (const [lang, content] of Object.entries(langSections)) {
        result += `    ${lang}: {\n${content}\n    },\n`;
      }
      return [result]; // match オブジェクトと同じ形式で返す
    }
  } catch (error) {
    console.warn('translations 構造からの categories 抽出に失敗:', error);
  }
  
  return null;
}

// スクリプトの実行
main();
