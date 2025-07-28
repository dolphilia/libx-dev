#!/usr/bin/env node

/**
 * 統合ビルドスクリプト
 * 
 * このスクリプトは、各アプリケーションのビルド出力を1つのディレクトリに統合します。
 * 1. ルートディレクトリに`dist`フォルダを作成
 * 2. 各アプリケーションをビルド
 * 3. 各アプリケーションのビルド出力をルートの`dist`フォルダにコピー
 * 4. サイドバーJSONファイルを正しい場所にコピー
 * 5. ローカル開発環境用のビルドでは、GitHub Pagesのベースパスを削除
 * 
 * オプション:
 * --local: ローカル開発環境用のビルドを行います。GitHub Pagesのベースパスを削除します。
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { copyDirRecursive } from './utils.js';

// コマンドライン引数を解析
const args = process.argv.slice(2);
const isLocalBuild = args.includes('--local');

// ESモジュールで__dirnameを取得
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

/**
 * appsディレクトリからアプリケーションリストを動的に生成
 */
async function generateAppsList() {
  const appsDir = path.join(rootDir, 'apps');
  const apps = [];
  
  try {
    const entries = await fs.readdirSync(appsDir, { withFileTypes: true });
    const appDirs = entries.filter(entry => entry.isDirectory());
    
    for (const dir of appDirs) {
      const appName = dir.name;
      const appPath = path.join(appsDir, appName);
      const srcDir = path.join(appPath, 'dist');
      
      if (appName === 'top-page') {
        // トップページはルートに配置
        apps.push({
          name: appName,
          srcDir,
          destDir: distDir,
          pathPrefix: ''
        });
      } else {
        // ドキュメントプロジェクトは/docs/{project-name}/に配置
        apps.push({
          name: appName,
          srcDir,
          destDir: path.join(distDir, 'docs', appName),
          pathPrefix: `/docs/${appName}`
        });
      }
    }
  } catch (error) {
    console.error('アプリケーションリストの生成中にエラーが発生しました:', error);
  }
  
  return apps;
}

// アプリケーションのリスト（動的生成）
let apps = [];

/**
 * HTMLファイル内のベースパスを修正する関数
 */
function updateBasePath(filePath, oldBasePath, newBasePath) {
  if (!fs.existsSync(filePath) || !filePath.endsWith('.html')) {
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // ローカルビルドの場合は、ベースパスを削除
  if (isLocalBuild) {
    oldBasePath = '/docs-astro';
    newBasePath = '';
  }
  
  // アセットパスの修正
  content = content.replace(
    new RegExp(`${oldBasePath}/assets/`, 'g'),
    `${newBasePath}/assets/`
  );
  
  // リダイレクト先URLの修正
  // index.htmlのリダイレクト先を修正
  if (filePath.endsWith('index.html')) {
    // リダイレクト時間を修正（数字ではなく言語コードになっている場合がある）
    content = content.replace(
      new RegExp(`content="([a-z]+);url=`, 'g'),
      `content="2;url=`
    );
    
    // リダイレクト先URLを修正
    content = content.replace(
      new RegExp(`content="[0-9]+;url=${oldBasePath}/([a-z]+)/"`, 'g'),
      `content="2;url=${newBasePath}/$1/"`
    );
    
    // リンクのhref属性を修正
    content = content.replace(
      new RegExp(`href="${oldBasePath}/([a-z]+)/"`, 'g'),
      `href="${newBasePath}/$1/"`
    );
    
    // リダイレクトメッセージを修正
    content = content.replace(
      new RegExp(`Redirecting from <code>${oldBasePath}</code> to <code>${oldBasePath}/([a-z]+)/</code>`, 'g'),
      `Redirecting from <code>${newBasePath}</code> to <code>${newBasePath}/$1/</code>`
    );
    
    // 直接HTMLを書き換える（ローカルビルドの場合）
    if (isLocalBuild) {
      // ローカル開発環境用のポート番号（デフォルト: 8080）
      const localPort = process.env.PORT || 8080;
      content = `<!doctype html><title>Redirecting to: /en/</title><meta http-equiv="refresh" content="2;url=/en/"><meta name="robots" content="noindex"><link rel="canonical" href="http://localhost:${localPort}/en/"><body><a href="/en/">Redirecting from <code>/</code> to <code>/en/</code></a></body>`;
    }
    
    // canonical URLを修正
    if (!isLocalBuild) {
      content = content.replace(
        new RegExp(`href="https://dolphilia.github.io${oldBasePath}/([a-z]+)/"`, 'g'),
        `href="https://dolphilia.github.io${newBasePath}/$1/"`
      );
    } else {
      // ローカル開発環境用のポート番号（デフォルト: 8080）
      const localPort = process.env.PORT || 8080;
      content = content.replace(
        new RegExp(`href="https://dolphilia.github.io${oldBasePath}/([a-z]+)/"`, 'g'),
        `href="http://localhost:${localPort}/$1/"`
      );
    }
  }
  
  // その他のパスも必要に応じて修正
  
  fs.writeFileSync(filePath, content, 'utf8');
}

/**
 * ディレクトリ内のHTMLファイルのベースパスを再帰的に修正する関数
 */
function updateBasePathsRecursive(dir, oldBasePath, newBasePath) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // サブディレクトリの場合は再帰的に処理
      updateBasePathsRecursive(fullPath, oldBasePath, newBasePath);
    } else if (entry.name.endsWith('.html')) {
      // HTMLファイルの場合はベースパスを修正
      updateBasePath(fullPath, oldBasePath, newBasePath);
    }
  }
}

/**
 * メイン処理
 */
async function main() {
  console.log('統合ビルドを開始します...');
  
  if (isLocalBuild) {
    console.log('ローカル開発環境用のビルドを行います...');
  }

  // アプリケーションリストを動的生成
  apps = await generateAppsList();
  console.log('検出されたアプリケーション:', apps.map(app => app.name).join(', '));


  // 既存のdistディレクトリを削除
  if (fs.existsSync(distDir)) {
    console.log('既存のdistディレクトリを削除します...');
    fs.rmSync(distDir, { recursive: true, force: true });
  }

  // distディレクトリを作成
  fs.mkdirSync(distDir, { recursive: true });
  


  // 各アプリケーションをビルド
  for (const app of apps) {
    console.log(`${app.name}をビルドしています...`);
    try {
      execSync(`pnpm --filter=apps-${app.name} build`, { stdio: 'inherit' });
    } catch (error) {
      console.error(`${app.name}のビルドに失敗しました:`, error);
      process.exit(1);
    }
  }

  // 各アプリケーションのビルド出力をdistディレクトリにコピー
  for (const app of apps) {
    console.log(`${app.name}のビルド出力をコピーしています...`);
    
    if (!fs.existsSync(app.srcDir)) {
      console.error(`${app.srcDir}が存在しません。`);
      continue;
    }

    // ディレクトリをコピー
    copyDirRecursive(app.srcDir, app.destDir);

    // サイドバーJSONファイルをコピー（ドキュメントプロジェクトの場合）
    if (app.name !== 'top-page') {
      const sidebarSrcDir = path.join(rootDir, 'apps', app.name, 'public', 'sidebar');
      const sidebarDestDir = path.join(app.destDir, 'sidebar');
      
      if (fs.existsSync(sidebarSrcDir)) {
        console.log(`${app.name}のサイドバーJSONファイルをコピーしています...`);
        if (!fs.existsSync(sidebarDestDir)) {
          fs.mkdirSync(sidebarDestDir, { recursive: true });
        }
        copyDirRecursive(sidebarSrcDir, sidebarDestDir);
        
        const additionalDestDir = path.join(app.destDir, 'pages', 'public', 'sidebar');
        if (!fs.existsSync(additionalDestDir)) {
          fs.mkdirSync(additionalDestDir, { recursive: true });
          console.log(`追加のサイドバーディレクトリを作成しました: ${additionalDestDir}`);
        }
        copyDirRecursive(sidebarSrcDir, additionalDestDir);
        console.log(`追加の場所にもサイドバーJSONファイルをコピーしました: ${additionalDestDir}`);
      } else {
        console.warn(`サイドバーディレクトリが見つかりません: ${sidebarSrcDir}`);
      }
    }
    

    // ベースパスの修正が必要な場合
    if (app.pathPrefix) {
      console.log(`${app.name}のベースパスを修正しています...`);
      let oldBasePath = '/docs-astro'; 
      let newBasePath = '/docs-astro' + app.pathPrefix; 
      
      if (isLocalBuild) {
        console.log(`ローカル開発環境用にベースパスを削除します...`);
        oldBasePath = '/docs-astro';
        newBasePath = '';
      }
      
      updateBasePathsRecursive(app.destDir, oldBasePath, newBasePath);
    }
  }

  // Pagefindインデックスを生成
  console.log('Pagefindインデックスを生成しています...');
  try {
    execSync('npx pagefind --source dist', { stdio: 'inherit' });
    console.log('Pagefindインデックスの生成が完了しました。');
  } catch (error) {
    console.error('Pagefindインデックスの生成中にエラーが発生しました:', error);
    console.warn('検索機能は利用できませんが、ビルドは続行します。');
  }

  console.log('統合ビルドが完了しました。');
}

main().catch(error => {
  console.error('統合ビルド中にエラーが発生しました:', error);
  process.exit(1);
});
