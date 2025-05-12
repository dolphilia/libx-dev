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
  contentDir: path.join(rootDir, 'apps/sample-docs/src/pages'),
  outputDir: path.join(rootDir, 'apps/sample-docs/public/search'),
  supportedLanguages: ['en', 'ja'],
  supportedVersions: ['v1', 'v2'],
  fileExtensions: ['.astro', '.md', '.mdx'],
};

/**
 * メイン処理
 */
async function main() {
  try {
    console.log('検索インデックスの作成を開始します...');
    
    // 出力ディレクトリの作成
    await fs.mkdir(config.outputDir, { recursive: true });
    
    // 各言語・バージョンごとにインデックスを作成
    for (const lang of config.supportedLanguages) {
      for (const version of config.supportedVersions) {
        console.log(`${lang}/${version} のインデックスを作成中...`);
        
        const documents = await collectDocuments(lang, version);
        console.log(`${documents.length} 件のドキュメントを収集しました`);
        
        if (documents.length > 0) {
          const index = createSearchIndex(documents);
          const indexJson = exportSearchIndex(index);
          
          // インデックスを保存
          const outputPath = path.join(config.outputDir, `index-${lang}-${version}.json`);
          await fs.writeFile(outputPath, indexJson);
          console.log(`インデックスを保存しました: ${outputPath}`);
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
 * 指定された言語とバージョンのドキュメントを収集する
 */
async function collectDocuments(lang, version) {
  const contentPath = path.join(config.contentDir, lang, version);
  const pattern = `**/*{${config.fileExtensions.join(',')}}`;
  
  // ファイルの一覧を取得
  const files = await glob(pattern, { cwd: contentPath, absolute: true });
  
  const documents = [];
  let idCounter = 1;
  
  for (const file of files) {
    try {
      const relativePath = path.relative(contentPath, file);
      
      // ファイル拡張子に基づいて処理
      const ext = path.extname(file);
      let title = '';
      let extractedContent = '';
      
      if (ext === '.astro') {
        // Astroファイルからコンテンツを抽出
        const titleMatch = content.match(/<h1[^>]*>(.*?)<\/h1>/s);
        title = titleMatch ? titleMatch[1].trim() : path.basename(file, ext);
        
        // HTMLタグを除去してコンテンツを抽出
        extractedContent = content
          .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
          .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
          .replace(/---[\s\S]*?---/g, '')
          .replace(/<[^>]+>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
      } else if (ext === '.md' || ext === '.mdx') {
        // Markdown/MDXファイルからコンテンツを抽出
        const { frontmatter: data, content: mdContent } = await parseMarkdownFile(file);
        title = data.title || path.basename(file, ext);
        extractedContent = mdContent;
      }
      
      // URLを生成
      const slug = relativePath.replace(/\.[^.]+$/, '');
      const url = `/${lang}/${version}/${slug}`;
      
      // ドキュメントを追加
      documents.push({
        id: `${lang}-${version}-${idCounter++}`,
        title,
        content: extractedContent,
        url,
        project: 'sample-docs',
        version,
        language: lang,
        lastUpdated: new Date(),
      });
    } catch (error) {
      console.warn(`ファイルの処理中にエラーが発生しました: ${file}`, error);
    }
  }
  
  return documents;
}

// スクリプトの実行
main();
