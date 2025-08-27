#!/usr/bin/env node

/**
 * 新しいドキュメントを作成するスクリプト（改良版）
 * 使用例: 
 * node scripts/create-document.js sample-docs en v2 guide "Getting Started"
 * node scripts/create-document.js sample-docs en v2 --interactive
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import {
  loadProjectConfig,
  analyzeProjectStructure,
  getNextCategoryNumber,
  normalizeFileName,
  getCategoryDisplayName,
  generateDocumentTemplate,
  validateDocumentPath,
  createDocumentFile,
  displayProjectStructure
} from './document-utils.js';

// コマンドライン引数の解析
function parseArguments() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.error('使用法: node scripts/create-document.js <project-name> <lang> <version> [category] [title] [options]');
    console.error('');
    console.error('引数:');
    console.error('  project-name    プロジェクト名');
    console.error('  lang           言語 (en, ja)');
    console.error('  version        バージョン (v1, v2)');
    console.error('  category       カテゴリ名（省略可）');
    console.error('  title          ドキュメントタイトル（省略可）');
    console.error('');
    console.error('オプション:');
    console.error('  --interactive  インタラクティブモードで実行');
    console.error('  --help         このヘルプを表示');
    console.error('');
    console.error('例:');
    console.error('  node scripts/create-document.js sample-docs en v2 guide "Getting Started"');
    console.error('  node scripts/create-document.js sample-docs ja v2 --interactive');
    process.exit(1);
  }

  const [projectName, lang, version, ...rest] = args;
  const isInteractive = rest.includes('--interactive');
  const isHelp = rest.includes('--help');
  
  if (isHelp) {
    console.log('ドキュメント作成ツール - 詳細ヘルプ');
    console.log('=====================================');
    console.log('');
    console.log('このツールは現在のプロジェクト構造に基づいて新しいドキュメントを作成します。');
    console.log('- 既存のカテゴリを自動検出');
    console.log('- ファイル番号の自動採番');  
    console.log('- 適切なテンプレートの自動生成');
    console.log('');
    process.exit(0);
  }

  // 非インタラクティブモードの場合
  if (!isInteractive) {
    const [category, title] = rest.filter(arg => !arg.startsWith('--'));
    return { projectName, lang, version, category, title, isInteractive: false };
  }

  return { projectName, lang, version, isInteractive: true };
}

// インタラクティブモードの実装
async function runInteractiveMode(projectName, lang, version) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const ask = (question) => new Promise((resolve) => rl.question(question, resolve));

  try {
    console.log(`\n🚀 ドキュメント作成ツール (インタラクティブモード)`);
    console.log(`プロジェクト: ${projectName} | 言語: ${lang} | バージョン: ${version}\n`);

    // プロジェクト設定を読み込み
    const config = loadProjectConfig(projectName);
    
    // 現在の構造を分析
    const categories = analyzeProjectStructure(projectName, lang, version);
    
    // プロジェクト構造を表示
    displayProjectStructure(categories, lang, config);

    // カテゴリの選択
    let categoryName, categoryDir, fileName;
    
    if (Object.keys(categories).length > 0) {
      console.log('\n📋 カテゴリ選択:');
      console.log('1. 既存のカテゴリを使用');
      console.log('2. 新しいカテゴリを作成');
      
      const categoryChoice = await ask('選択してください (1-2): ');
      
      if (categoryChoice === '1') {
        // 既存カテゴリから選択
        const categoryList = Object.keys(categories);
        console.log('\n既存のカテゴリ:');
        categoryList.forEach((cat, index) => {
          const displayName = getCategoryDisplayName(config, lang, cat);
          console.log(`${index + 1}. ${cat} (${displayName})`);
        });
        
        const categoryIndex = await ask('カテゴリ番号を選択してください: ');
        const selectedIndex = parseInt(categoryIndex) - 1;
        
        if (selectedIndex >= 0 && selectedIndex < categoryList.length) {
          categoryName = categoryList[selectedIndex];
          categoryDir = categories[categoryName].fullDir;
        } else {
          console.error('無効な選択です');
          process.exit(1);
        }
      } else if (categoryChoice === '2') {
        // 新しいカテゴリを作成
        categoryName = await ask('新しいカテゴリ名を入力してください: ');
        const categoryNumber = getNextCategoryNumber(categories);
        categoryDir = `${categoryNumber}-${normalizeFileName(categoryName)}`;
      } else {
        console.error('無効な選択です');
        process.exit(1);
      }
    } else {
      // 初回作成
      console.log('\n📁 最初のカテゴリを作成します');
      categoryName = await ask('カテゴリ名を入力してください: ');
      categoryDir = `01-${normalizeFileName(categoryName)}`;
    }

    // ドキュメントタイトルの入力
    const title = await ask('\nドキュメントタイトルを入力してください: ');
    const description = await ask('ドキュメントの説明を入力してください (省略可): ');
    
    // ファイル名の生成
    if (categories[categoryName]) {
      const nextNumber = categories[categoryName].nextNumber;
      fileName = `${nextNumber}-${normalizeFileName(title)}`;
    } else {
      fileName = `01-${normalizeFileName(title)}`;
    }

    console.log(`\n📄 作成予定のファイル: ${categoryDir}/${fileName}.mdx`);
    const confirm = await ask('作成しますか？ (y/N): ');
    
    if (confirm.toLowerCase() === 'y' || confirm.toLowerCase() === 'yes') {
      return { categoryName, categoryDir, fileName, title, description };
    } else {
      console.log('キャンセルされました');
      process.exit(0);
    }
    
  } finally {
    rl.close();
  }
}

// メイン処理
async function main() {
  try {
    const args = parseArguments();
    
    // 基本バリデーション
    const validationErrors = validateDocumentPath(
      args.projectName, 
      args.lang, 
      args.version, 
      args.category || 'test',
      'test'
    );
    
    if (validationErrors.length > 0) {
      console.error('❌ バリデーションエラー:');
      validationErrors.forEach(error => console.error(`  - ${error}`));
      process.exit(1);
    }

    console.log(`\n🚀 ドキュメント作成ツール`);
    console.log(`プロジェクト: ${args.projectName}`);
    console.log(`言語: ${args.lang}`);
    console.log(`バージョン: ${args.version}`);

    let categoryName, categoryDir, fileName, title, description;

    if (args.isInteractive) {
      // インタラクティブモード
      const result = await runInteractiveMode(args.projectName, args.lang, args.version);
      ({ categoryName, categoryDir, fileName, title, description } = result);
    } else {
      // 非インタラクティブモード
      if (!args.category || !args.title) {
        console.error('❌ 非インタラクティブモードではカテゴリとタイトルが必要です');
        process.exit(1);
      }

      // プロジェクト設定を読み込み
      const config = loadProjectConfig(args.projectName);
      const categories = analyzeProjectStructure(args.projectName, args.lang, args.version);
      
      categoryName = args.category;
      title = args.title;
      description = '';

      // カテゴリディレクトリを決定
      if (categories[categoryName]) {
        categoryDir = categories[categoryName].fullDir;
        const nextNumber = categories[categoryName].nextNumber;
        fileName = `${nextNumber}-${normalizeFileName(title)}`;
      } else {
        // 新しいカテゴリ
        const categoryNumber = getNextCategoryNumber(categories);
        categoryDir = `${categoryNumber}-${normalizeFileName(categoryName)}`;
        fileName = `01-${normalizeFileName(title)}`;
      }
    }

    // ドキュメントファイルの作成
    console.log('\n📝 ドキュメントファイルを作成しています...');
    
    const content = generateDocumentTemplate(title, description, categoryName);
    const docPath = createDocumentFile(
      args.projectName, 
      args.lang, 
      args.version, 
      categoryDir, 
      fileName, 
      content
    );

    console.log('✅ ドキュメントファイルが作成されました!');
    console.log(`📄 ファイルパス: ${docPath}`);
    console.log(`🌐 URL: /${args.lang}/${args.version}/${categoryDir.replace(/^\d+-/, '')}/${fileName.replace(/^\d+-/, '')}`);

    // 次のステップの案内
    console.log('\n📋 次のステップ:');
    console.log('1. 作成されたファイルを編集してコンテンツを追加');
    console.log('2. 開発サーバーで確認: pnpm dev');
    console.log('3. 必要に応じて他の言語版も作成');

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