#!/usr/bin/env node

/**
 * 検索インデックス作成スクリプト
 * 
 * このスクリプトは、ドキュメントコンテンツから検索インデックスを作成し、
 * 静的ファイルとして出力します。
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import { createSearchIndex, exportSearchIndex } from '../packages/search/src/utils/indexer.js';
import { parseMarkdownFile } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 設定
const config = {
  appsDir: path.join(rootDir, 'apps'),
  // outputDir はプロジェクトごとに設定するため、ここでは共通の親ディレクトリのみ指定
  baseOutputDir: path.join(rootDir, 'apps'), 
  fileExtensions: ['.astro', '.md', '.mdx'],
  excludedProjects: ['top-page'], // 除外するプロジェクト名
};

/**
 * appsディレクトリ内のプロジェクトを検出する
 */
async function detectProjects() {
  const projects = [];
  try {
    const entries = await fs.readdir(config.appsDir, { withFileTypes: true });
    const projectDirs = entries.filter(entry => 
      entry.isDirectory() && !config.excludedProjects.includes(entry.name)
    );

    for (const dir of projectDirs) {
      const projectName = dir.name;
      const projectPath = path.join(config.appsDir, projectName);
      const contentDir = path.join(projectPath, 'src', 'content', 'docs');
      
      try {
        await fs.access(contentDir);
      } catch (error) {
        console.log(`プロジェクト ${projectName} にコンテンツディレクトリ ${contentDir} が見つかりません。スキップします。`);
        continue;
      }

      const languages = await detectLanguages(contentDir);
      if (languages.length === 0) {
        console.log(`プロジェクト ${projectName} の ${contentDir} に言語ディレクトリが見つかりませんでした。スキップします。`);
        continue;
      }

      // 最初の言語ディレクトリを基準にバージョンを検出（全ての言語でバージョン構成は同じと仮定）
      const versions = await detectVersions(contentDir, languages[0]);
      if (versions.length === 0) {
        console.log(`プロジェクト ${projectName} の ${path.join(contentDir, languages[0])} にバージョンディレクトリが見つかりませんでした。スキップします。`);
        continue;
      }
      
      // プロジェクトごとの出力ディレクトリ
      const outputDir = path.join(projectPath, 'public', 'search');

      projects.push({
        name: projectName,
        contentDir: contentDir,
        outputDir: outputDir,
        languages,
        versions,
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
    // console.error(`言語ディレクトリの検出中にエラーが発生しました (${contentPath}):`, error);
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
    // console.error(`バージョンディレクトリの検出中にエラーが発生しました (${langPath}):`, error);
    return [];
  }
}

/**
 * メイン処理
 */
async function main() {
  try {
    console.log('検索インデックスの作成を開始します...');
    
    const projects = await detectProjects();

    if (projects.length === 0) {
      console.warn('処理対象のドキュメントプロジェクトが見つかりませんでした。');
      return;
    }

    for (const project of projects) {
      console.log(`プロジェクト ${project.name} のインデックスを作成します...`);
      // 出力ディレクトリの作成
      await fs.mkdir(project.outputDir, { recursive: true });

      for (const lang of project.languages) {
        // この言語に対応するバージョンを取得（言語ごとにバージョンが異なる場合に対応するため再取得）
        const currentLangVersions = await detectVersions(project.contentDir, lang);
        if (currentLangVersions.length === 0) {
          console.log(`  ${lang} にバージョンが見つかりませんでした。スキップします。`);
          continue;
        }

        for (const version of currentLangVersions) {
          console.log(`  ${project.name} - ${lang}/${version} のインデックスを作成中...`);
          
          const documents = await collectDocuments(project, lang, version);
          console.log(`  ${documents.length} 件のドキュメントを収集しました`);
          
          if (documents.length > 0) {
            const index = createSearchIndex(documents);
            const indexJson = exportSearchIndex(index);
            
            // インデックスを保存
            const outputPath = path.join(project.outputDir, `index-${lang}-${version}.json`);
            await fs.writeFile(outputPath, indexJson);
            console.log(`  インデックスを保存しました: ${outputPath}`);
          }
        }
      }
    }
    
    console.log('検索インデックスの作成が完了しました');
  } catch (error) {
    console.error('エラーが発生しました:', error);
    process.exit(1);
  }
}

/**
 * 指定されたプロジェクト、言語、バージョンのドキュメントを収集する
 */
async function collectDocuments(project, lang, version) {
  const versionSpecificContentPath = path.join(project.contentDir, lang, version);
  const pattern = `**/*{${config.fileExtensions.join(',')}}`;
  
  let files;
  try {
    files = await glob(pattern, { cwd: versionSpecificContentPath, absolute: true });
  } catch (err) {
    console.warn(`  globの実行中にエラーが発生しました (${versionSpecificContentPath}):`, err.message);
    return []; // エラーが発生した場合は空のドキュメントリストを返す
  }
  
  const documents = [];
  let idCounter = 1;
  
  for (const file of files) {
    try {
      // contentDir (例: apps/sample-docs/src/content/docs) からの相対パス
      const relativePathFromProjectContent = path.relative(project.contentDir, file); 
      
      const ext = path.extname(file);
      let title = '';
      let extractedContent = '';
      
      if (ext === '.astro') {
        const fileContent = await fs.readFile(file, 'utf-8');
        const titleMatch = fileContent.match(/<h1[^>]*>(.*?)<\/h1>/s);
        title = titleMatch ? titleMatch[1].trim() : path.basename(file, ext);
        
        extractedContent = fileContent
          .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
          .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
          .replace(/---[\s\S]*?---/g, '') // Frontmatterを除去
          .replace(/<[^>]+>/g, ' ') // HTMLタグを除去
          .replace(/\s+/g, ' ')
          .trim();
      } else if (ext === '.md' || ext === '.mdx') {
        const { frontmatter: data, content: mdContent } = await parseMarkdownFile(file);
        title = data.title || path.basename(file, ext);
        extractedContent = mdContent; // Markdownのコンテンツはそのまま利用
      }
      
      // URLを生成
      // relativePathFromProjectContent は lang/version/path/to/file.ext の形式
      // これを /project-name/lang/version/path/to/file に変換
      const slug = relativePathFromProjectContent.replace(/\.[^.]+$/, '');
      const url = `/${project.name}/${slug}`; // プロジェクト名をURLの先頭に追加
      
      documents.push({
        id: `${project.name}-${lang}-${version}-${idCounter++}`,
        title,
        content: extractedContent,
        url,
        project: project.name,
        version,
        language: lang,
        lastUpdated: new Date(), // 必要に応じてファイルの最終更新日時を取得するロジックを追加
      });
    } catch (error) {
      console.warn(`  ファイルの処理中にエラーが発生しました: ${file}`, error);
    }
  }
  
  return documents;
}

// スクリプトの実行
main();
