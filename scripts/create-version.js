#!/usr/bin/env node

/**
 * 新しいバージョンを追加するスクリプト（改良版）
 * 使用例: node scripts/create-version.js sample-docs v3
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import {
  loadProjectConfig,
  saveProjectConfig
} from './document-utils.js';

// コマンドライン引数の解析
function parseArguments() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.error('使用法: node scripts/create-version.js <project-name> <version> [options]');
    console.error('');
    console.error('引数:');
    console.error('  project-name    プロジェクト名');
    console.error('  version        新しいバージョン (例: v3, v2.1)');
    console.error('');
    console.error('オプション:');
    console.error('  --interactive  インタラクティブモードで実行');
    console.error('  --no-copy      前バージョンからコンテンツをコピーしない');
    console.error('  --help         このヘルプを表示');
    console.error('');
    console.error('例:');
    console.error('  node scripts/create-version.js sample-docs v3');
    console.error('  node scripts/create-version.js sample-docs v2.1 --no-copy');
    process.exit(1);
  }

  const [projectName, version, ...rest] = args;
  const isInteractive = rest.includes('--interactive');
  const noCopy = rest.includes('--no-copy');
  const isHelp = rest.includes('--help');
  
  if (isHelp) {
    console.log('バージョン作成ツール - 詳細ヘルプ');
    console.log('=====================================');
    console.log('');
    console.log('このツールは新しいドキュメントバージョンを作成します。');
    console.log('- project.config.jsonのversions配列を自動更新');
    console.log('- 前バージョンからのコンテンツコピー（オプション）');  
    console.log('- 全言語対応のディレクトリ構造作成');
    console.log('');
    process.exit(0);
  }

  return { projectName, version, isInteractive, noCopy };
}

// バージョン形式をバリデーション
function validateVersion(version) {
  const errors = [];
  
  if (!/^v\d+(\.\d+)*$/.test(version)) {
    errors.push('バージョンはv1, v2.0, v2.1のような形式である必要があります');
  }
  
  return errors;
}

// 前バージョンからコンテンツをコピー
async function copyFromPreviousVersion(projectName, newVersion, previousVersion, supportedLangs, noCopy) {
  if (noCopy) {
    console.log('⏩ 前バージョンからのコピーをスキップしました');
    return;
  }

  console.log(`📋 ${previousVersion} から ${newVersion} にコンテンツをコピーしています...`);
  
  const projectPath = path.join(process.cwd(), 'apps', projectName);
  
  for (const lang of supportedLangs) {
    const prevContentDir = path.join(projectPath, 'src', 'content', 'docs', lang, previousVersion);
    const newContentDir = path.join(projectPath, 'src', 'content', 'docs', lang, newVersion);
    
    if (fs.existsSync(prevContentDir)) {
      try {
        // ディレクトリを作成
        fs.mkdirSync(newContentDir, { recursive: true });
        
        // ファイルを再帰的にコピー
        await copyDirectoryRecursive(prevContentDir, newContentDir);
        console.log(`  ✅ ${lang}: ${previousVersion} → ${newVersion}`);
      } catch (error) {
        console.warn(`  ⚠️  ${lang}: コピー中にエラーが発生しました - ${error.message}`);
      }
    } else {
      console.log(`  ⚠️  ${lang}: ${previousVersion} が存在しません`);
      // 空のディレクトリを作成
      fs.mkdirSync(newContentDir, { recursive: true });
    }
  }
}

// ディレクトリを再帰的にコピー
async function copyDirectoryRecursive(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  fs.mkdirSync(dest, { recursive: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      await copyDirectoryRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// インタラクティブモードの実装
async function runInteractiveMode(projectName, version, config) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const ask = (question) => new Promise((resolve) => rl.question(question, resolve));

  try {
    console.log(`\n🚀 バージョン作成ツール (インタラクティブモード)`);
    console.log(`プロジェクト: ${projectName} | 新バージョン: ${version}\n`);

    // 現在のバージョン情報を表示
    console.log('📋 現在のバージョン:');
    config.versioning.versions.forEach((v, index) => {
      const status = v.isLatest ? ' (最新)' : '';
      console.log(`  ${index + 1}. ${v.id} - ${v.name}${status}`);
    });

    // バージョン名の入力
    const defaultName = `Version ${version.replace('v', '')}`;
    const versionName = await ask(`\nバージョンの表示名を入力してください (${defaultName}): `) || defaultName;

    // 前バージョンからのコピー確認
    const latestVersion = config.versioning.versions.find(v => v.isLatest);
    let copyFromPrevious = false;
    
    if (latestVersion) {
      console.log(`\n📋 前バージョンからのコピー:`);
      console.log(`前バージョン: ${latestVersion.id} (${latestVersion.name})`);
      
      const copyChoice = await ask('前バージョンからドキュメントをコピーしますか？ (Y/n): ');
      copyFromPrevious = copyChoice.toLowerCase() !== 'n' && copyChoice.toLowerCase() !== 'no';
    }

    // 確認
    console.log(`\n📄 作成内容の確認:`);
    console.log(`バージョンID: ${version}`);
    console.log(`バージョン名: ${versionName}`);
    console.log(`前バージョンコピー: ${copyFromPrevious ? 'はい' : 'いいえ'}`);
    console.log(`対象言語: ${config.basic.supportedLangs.join(', ')}`);
    
    const confirm = await ask('\n作成しますか？ (Y/n): ');
    
    if (confirm.toLowerCase() === 'n' || confirm.toLowerCase() === 'no') {
      console.log('キャンセルされました');
      process.exit(0);
    }
    
    return { versionName, copyFromPrevious };
    
  } finally {
    rl.close();
  }
}

// メイン処理
async function main() {
  try {
    const args = parseArguments();
    
    console.log(`\n🚀 バージョン作成ツール`);
    console.log(`プロジェクト: ${args.projectName}`);
    console.log(`新バージョン: ${args.version}`);

    // バリデーション
    const validationErrors = validateVersion(args.version);
    if (validationErrors.length > 0) {
      console.error('❌ バリデーションエラー:');
      validationErrors.forEach(error => console.error(`  - ${error}`));
      process.exit(1);
    }

    // プロジェクト設定を読み込み
    console.log('\n📖 プロジェクト設定を読み込んでいます...');
    const config = loadProjectConfig(args.projectName);

    // 既存バージョンとの重複チェック
    const existingVersions = config.versioning.versions.map(v => v.id);
    if (existingVersions.includes(args.version)) {
      console.error(`❌ バージョン "${args.version}" は既に存在します`);
      console.log('既存のバージョン:', existingVersions.join(', '));
      process.exit(1);
    }

    let versionName, copyFromPrevious;

    if (args.isInteractive) {
      // インタラクティブモード
      const result = await runInteractiveMode(args.projectName, args.version, config);
      ({ versionName, copyFromPrevious } = result);
    } else {
      // 非インタラクティブモード
      versionName = `Version ${args.version.replace('v', '')}`;
      copyFromPrevious = !args.noCopy;
    }

    // 既存のバージョンをすべて非最新に設定
    console.log('\n📝 バージョン設定を更新しています...');
    config.versioning.versions.forEach(version => {
      version.isLatest = false;
    });

    // 新しいバージョンを追加
    const newVersionEntry = {
      id: args.version,
      name: versionName,
      date: new Date().toISOString(),
      isLatest: true
    };

    config.versioning.versions.push(newVersionEntry);

    // 設定ファイルを保存
    saveProjectConfig(args.projectName, config);
    console.log('✅ project.config.json を更新しました');

    // 前バージョンからコンテンツをコピー
    const previousVersion = config.versioning.versions
      .filter(v => v.id !== args.version)
      .sort((a, b) => new Date(b.date) - new Date(a.date))[0];

    if (previousVersion && copyFromPrevious) {
      await copyFromPreviousVersion(
        args.projectName, 
        args.version, 
        previousVersion.id, 
        config.basic.supportedLangs,
        false
      );
    } else {
      // 空のディレクトリ構造を作成
      console.log('📁 空のディレクトリ構造を作成しています...');
      const projectPath = path.join(process.cwd(), 'apps', args.projectName);
      
      for (const lang of config.basic.supportedLangs) {
        const contentDir = path.join(projectPath, 'src', 'content', 'docs', lang, args.version);
        fs.mkdirSync(contentDir, { recursive: true });
        console.log(`  ✅ ${lang}/${args.version}/`);
      }
    }

    console.log('\n✅ バージョンが作成されました!');
    console.log(`📋 バージョン詳細:`);
    console.log(`  ID: ${args.version}`);
    console.log(`  名前: ${versionName}`);
    console.log(`  最新: はい`);
    console.log(`  対象言語: ${config.basic.supportedLangs.join(', ')}`);

    // 次のステップの案内
    console.log('\n📋 次のステップ:');
    console.log('1. 新しいバージョンのドキュメントを作成/編集');
    console.log('2. 開発サーバーで確認: pnpm dev');
    console.log('3. 必要に応じてcreate-document.jsでドキュメントを追加');
    console.log(`4. URL例: /ja/${args.version}/ または /en/${args.version}/`);

  } catch (error) {
    console.error('❌ エラーが発生しました:', error.message);
    process.exit(1);
  }
}

// スクリプトが直接実行された場合のみ実行
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main };