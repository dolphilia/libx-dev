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

// コマンドライン引数を解析
const args = process.argv.slice(2);
const isLocalBuild = args.includes('--local');

// ESモジュールで__dirnameを取得
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

// アプリケーションのリスト
const apps = [
  {
    name: 'top-page',
    srcDir: path.join(rootDir, 'apps', 'top-page', 'dist'),
    destDir: distDir,
    // トップページはルートに配置
    pathPrefix: ''
  },
  {
    name: 'sample-docs',
    srcDir: path.join(rootDir, 'apps', 'sample-docs', 'dist'),
    destDir: path.join(distDir, 'docs', 'sample-docs'),
    // sample-docsは/docs/sample-docs/に配置
    pathPrefix: '/docs/sample-docs'
  }
  // 他のアプリケーションがある場合はここに追加
];

/**
 * ディレクトリを再帰的にコピーする関数
 */
function copyDirRecursive(src, dest) {
  // ディレクトリが存在しない場合は作成
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // ディレクトリ内のファイルとサブディレクトリを取得
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // サブディレクトリの場合は再帰的にコピー
      copyDirRecursive(srcPath, destPath);
    } else {
      // ファイルの場合はコピー
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

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

    // サイドバーJSONファイルをコピー（sample-docsの場合）
    if (app.name === 'sample-docs') {
      const sidebarSrcDir = path.join(rootDir, 'apps', 'sample-docs', 'public', 'sidebar');
      const sidebarDestDir = path.join(app.destDir, 'sidebar');
      
      if (fs.existsSync(sidebarSrcDir)) {
        console.log(`サイドバーJSONファイルをコピーしています...`);
        // サイドバーディレクトリが存在しない場合は作成
        if (!fs.existsSync(sidebarDestDir)) {
          fs.mkdirSync(sidebarDestDir, { recursive: true });
        }
        
        // サイドバーJSONファイルをコピー
        copyDirRecursive(sidebarSrcDir, sidebarDestDir);
        
        // ビルド後の環境でも正しく読み込めるように、追加の場所にもコピー
        const additionalDestDir = path.join(app.destDir, 'pages', 'public', 'sidebar');
        if (!fs.existsSync(additionalDestDir)) {
          fs.mkdirSync(additionalDestDir, { recursive: true });
          console.log(`追加のサイドバーディレクトリを作成しました: ${additionalDestDir}`);
        }
        
        // 追加の場所にもサイドバーJSONファイルをコピー
        copyDirRecursive(sidebarSrcDir, additionalDestDir);
        console.log(`追加の場所にもサイドバーJSONファイルをコピーしました: ${additionalDestDir}`);
      } else {
        console.warn(`サイドバーディレクトリが見つかりません: ${sidebarSrcDir}`);
      }
    }

    // ベースパスの修正が必要な場合
    if (app.pathPrefix) {
      console.log(`${app.name}のベースパスを修正しています...`);
      let oldBasePath = '/docs-astro'; // GitHub Pagesのベースパス
      let newBasePath = '/docs-astro' + app.pathPrefix; // 新しいパス
      
      // ローカルビルドの場合はベースパスを削除
      if (isLocalBuild) {
        console.log(`ローカル開発環境用にベースパスを削除します...`);
        oldBasePath = '/docs-astro';
        newBasePath = '';
      }
      
      updateBasePathsRecursive(app.destDir, oldBasePath, newBasePath);
    }
  }

  // ルートのindex.htmlを直接修正（ローカルビルドの場合）
  // if (isLocalBuild) {
  //   console.log('ルートのindex.htmlを直接修正しています...');
  //   const indexPath = path.join(distDir, 'index.html');
  //   if (fs.existsSync(indexPath)) {
  //     // ローカル開発環境用のポート番号（デフォルト: 8080）
  //     const localPort = process.env.PORT || 8080;
  //     const content = `<!doctype html><title>Redirecting to: /en/</title><meta http-equiv="refresh" content="2;url=/en/"><meta name="robots" content="noindex"><link rel="canonical" href="http://localhost:${localPort}/en/"><body><a href="/en/">Redirecting from <code>/</code> to <code>/en/</code></a></body>`;
  //     fs.writeFileSync(indexPath, content, 'utf8');
  //     console.log('ルートのindex.htmlを修正しました。');
  //   } else {
  //     console.warn('ルートのindex.htmlが見つかりません。');
  //   }
  // }

  console.log('統合ビルドが完了しました。');
}

main().catch(error => {
  console.error('統合ビルド中にエラーが発生しました:', error);
  process.exit(1);
});
