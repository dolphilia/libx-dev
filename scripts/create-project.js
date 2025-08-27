#!/usr/bin/env node

/**
 * 新しいドキュメントプロジェクトを自動作成するスクリプト
 * 
 * 使用例:
 * node scripts/create-project.js my-project "My Documentation" "私のドキュメント"
 * node scripts/create-project.js api-docs "API Documentation" "API文書" --icon=code --tags=api,reference
 * 
 * このスクリプトは以下の処理を自動化します:
 * 1. テンプレートプロジェクト（project-template）のコピー
 * 2. 各種設定ファイルの自動更新
 * 3. 依存関係のインストール
 * 4. 動作確認テスト
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { copyDirRecursive } from './utils.js';
import { loadProjectConfig, saveProjectConfig, normalizeFileName } from './document-utils.js';

// ESモジュールで__dirnameを取得
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

/**
 * コマンドライン引数を解析する
 */
function parseArguments() {
  const args = process.argv.slice(2);
  
  if (args.length < 3) {
    console.error('使用法: node scripts/create-project.js <project-name> <display-name-en> <display-name-ja> [options]');
    console.error('');
    console.error('引数:');
    console.error('  project-name      プロジェクトディレクトリ名（英数字・ハイフンのみ）');
    console.error('  display-name-en   英語表示名');
    console.error('  display-name-ja   日本語表示名');
    console.error('');
    console.error('オプション:');
    console.error('  --description-en=<text>  英語説明文');
    console.error('  --description-ja=<text>  日本語説明文');
    console.error('  --icon=<name>            アイコン名（デフォルト: file-text）');
    console.error('  --tags=<tag1,tag2>       カンマ区切りタグ（デフォルト: documentation）');
    console.error('  --template=<name>        テンプレートプロジェクト（デフォルト: project-template）');
    console.error('  --skip-test              動作確認テストをスキップ');
    console.error('');
    console.error('例:');
    console.error('  node scripts/create-project.js my-docs "My Documentation" "私のドキュメント"');
    console.error('  node scripts/create-project.js api-docs "API Docs" "API文書" --icon=code --tags=api,reference');
    process.exit(1);
  }

  const [projectName, displayNameEn, displayNameJa] = args.slice(0, 3);
  const options = {};

  // オプション引数を解析
  for (let i = 3; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      if (arg.includes('=')) {
        const [key, value] = arg.substring(2).split('=', 2);
        options[key] = value;
      } else {
        // フラグオプション（例: --skip-test）
        options[arg.substring(2)] = true;
      }
    }
  }

  return {
    projectName,
    displayNameEn,
    displayNameJa,
    descriptionEn: options['description-en'] || `Documentation for ${displayNameEn}`,
    descriptionJa: options['description-ja'] || `${displayNameJa}のドキュメントです`,
    icon: options.icon || 'file-text',
    tags: options.tags ? options.tags.split(',').map(tag => tag.trim()) : ['documentation'],
    template: options.template || 'project-template',
    skipTest: options['skip-test'] || false
  };
}

/**
 * プロジェクト名の妥当性をチェックする
 */
function validateProjectName(projectName) {
  const errors = [];
  
  // 文字種チェック（英数字とハイフンのみ）
  if (!/^[a-zA-Z0-9-]+$/.test(projectName)) {
    errors.push('プロジェクト名は英数字とハイフン(-)のみ使用できます');
  }
  
  // 長さチェック
  if (projectName.length < 2) {
    errors.push('プロジェクト名は2文字以上である必要があります');
  }
  
  if (projectName.length > 50) {
    errors.push('プロジェクト名は50文字以下である必要があります');
  }
  
  // 先頭・末尾ハイフンチェック
  if (projectName.startsWith('-') || projectName.endsWith('-')) {
    errors.push('プロジェクト名の先頭や末尾にハイフンは使用できません');
  }
  
  // 予約語チェック
  const reservedNames = ['node_modules', 'dist', 'build', 'test', 'src', 'public'];
  if (reservedNames.includes(projectName)) {
    errors.push(`"${projectName}" は予約語のため使用できません`);
  }
  
  return errors;
}

/**
 * プロジェクトの重複をチェックする
 */
function checkProjectDuplication(projectName) {
  const appsDir = path.join(rootDir, 'apps');
  const projectDir = path.join(appsDir, projectName);
  
  if (fs.existsSync(projectDir)) {
    return [`プロジェクト "${projectName}" は既に存在します: ${projectDir}`];
  }
  
  return [];
}

/**
 * テンプレートプロジェクトの存在確認
 */
function validateTemplate(templateName) {
  const templateDir = path.join(rootDir, 'apps', templateName);
  
  if (!fs.existsSync(templateDir)) {
    return [`テンプレートプロジェクト "${templateName}" が見つかりません: ${templateDir}`];
  }
  
  // 必須ファイルの存在確認
  const requiredFiles = [
    'package.json',
    'astro.config.mjs',
    'src/config/project.config.json'
  ];
  
  const missingFiles = requiredFiles.filter(file => 
    !fs.existsSync(path.join(templateDir, file))
  );
  
  if (missingFiles.length > 0) {
    return [`テンプレートプロジェクトに必須ファイルが不足しています: ${missingFiles.join(', ')}`];
  }
  
  return [];
}

/**
 * プログレス表示用のヘルパー関数
 */
function showProgress(step, total, message) {
  console.log(`[${step}/${total}] ${message}`);
}

/**
 * 除外ファイル・ディレクトリのパターン
 */
const EXCLUDE_PATTERNS = [
  'node_modules',
  'dist',
  '.env',
  '.env.local',
  '.env.development',
  '.env.production',
  '.DS_Store',
  'Thumbs.db',
  '*.log',
  '.cache',
  '.temp',
  '.tmp'
];

/**
 * ファイル/ディレクトリが除外対象かどうかを判定する
 */
function shouldExclude(name, isFile = false) {
  return EXCLUDE_PATTERNS.some(pattern => {
    if (pattern.includes('*')) {
      // ワイルドカード処理
      const regex = new RegExp(pattern.replace(/\*/g, '.*'));
      return regex.test(name);
    }
    return name === pattern;
  });
}

/**
 * テンプレートプロジェクトを新しいディレクトリにコピーする
 */
function copyTemplateProject(templateName, projectName) {
  const templateDir = path.join(rootDir, 'apps', templateName);
  const targetDir = path.join(rootDir, 'apps', projectName);
  
  console.log(`  コピー元: ${templateDir}`);
  console.log(`  コピー先: ${targetDir}`);
  
  // カスタムコピー関数（除外パターンに対応）
  function copyDirRecursiveWithExclusion(src, dest) {
    // ディレクトリが存在しない場合は作成
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    // ディレクトリ内のファイルとサブディレクトリを取得
    const entries = fs.readdirSync(src, { withFileTypes: true });
    let copiedCount = 0;
    let skippedCount = 0;

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      // 除外判定
      if (shouldExclude(entry.name, entry.isFile())) {
        console.log(`    スキップ: ${entry.name}`);
        skippedCount++;
        continue;
      }

      if (entry.isDirectory()) {
        // サブディレクトリの場合は再帰的にコピー
        const subResult = copyDirRecursiveWithExclusion(srcPath, destPath);
        copiedCount += subResult.copied;
        skippedCount += subResult.skipped;
      } else {
        // ファイルの場合はコピー
        fs.copyFileSync(srcPath, destPath);
        copiedCount++;
      }
    }
    
    return { copied: copiedCount, skipped: skippedCount };
  }
  
  const result = copyDirRecursiveWithExclusion(templateDir, targetDir);
  console.log(`  ✅ コピー完了: ${result.copied}個のファイル/ディレクトリ`);
  if (result.skipped > 0) {
    console.log(`  ⏩ スキップ: ${result.skipped}個のファイル/ディレクトリ`);
  }
  
  return targetDir;
}

/**
 * package.jsonを更新する
 */
function updatePackageJson(projectDir, projectName) {
  const packageJsonPath = path.join(projectDir, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
  
  packageJson.name = `apps-${projectName}`;
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('  ✅ package.json更新完了');
}

/**
 * astro.config.mjsを更新する
 */
function updateAstroConfig(projectDir, projectName) {
  const astroConfigPath = path.join(projectDir, 'astro.config.mjs');
  let content = fs.readFileSync(astroConfigPath, 'utf-8');
  
  // ベースパスを置換
  content = content.replace(
    /base:\s*['"`][^'"`]*['"`]/g,
    `base: '/docs/${projectName}'`
  );
  
  // remarkLinkTransformerのbaseUrlを置換
  content = content.replace(
    /\[remarkLinkTransformer,\s*\{\s*baseUrl:\s*['"`][^'"`]*['"`]\s*\}\]/g,
    `[remarkLinkTransformer, { baseUrl: '/docs/${projectName}' }]`
  );
  
  fs.writeFileSync(astroConfigPath, content);
  console.log('  ✅ astro.config.mjs更新完了');
}

/**
 * project.config.jsonを更新する
 */
function updateProjectConfig(projectDir, config) {
  const projectConfigPath = path.join(projectDir, 'src', 'config', 'project.config.json');
  const projectConfig = JSON.parse(fs.readFileSync(projectConfigPath, 'utf-8'));
  
  // 基本設定の更新
  projectConfig.basic.baseUrl = `/docs/${config.projectName}`;
  
  // 翻訳情報の更新
  projectConfig.translations.en.displayName = config.displayNameEn;
  projectConfig.translations.en.displayDescription = config.descriptionEn;
  
  projectConfig.translations.ja.displayName = config.displayNameJa;
  projectConfig.translations.ja.displayDescription = config.descriptionJa;
  
  fs.writeFileSync(projectConfigPath, JSON.stringify(projectConfig, null, 2));
  console.log('  ✅ project.config.json更新完了');
}

/**
 * top-pageのprojects.config.jsonを更新する
 */
function updateTopPageConfig(config) {
  const topPageConfigPath = path.join(rootDir, 'apps', 'top-page', 'src', 'config', 'projects.config.json');
  const topPageConfig = JSON.parse(fs.readFileSync(topPageConfigPath, 'utf-8'));
  
  // プロジェクトデコレーションを追加
  topPageConfig.projectDecorations[config.projectName] = {
    icon: config.icon,
    tags: config.tags,
    isNew: true
  };
  
  fs.writeFileSync(topPageConfigPath, JSON.stringify(topPageConfig, null, 2));
  console.log('  ✅ top-page projects.config.json更新完了');
}

/**
 * すべての設定ファイルを更新する
 */
function updateAllConfigFiles(projectDir, config) {
  console.log('  設定ファイルを更新しています...');
  
  updatePackageJson(projectDir, config.projectName);
  updateAstroConfig(projectDir, config.projectName);
  updateProjectConfig(projectDir, config);
  updateTopPageConfig(config);
  
  console.log('  🎉 すべての設定ファイルの更新完了！');
}

/**
 * 依存関係をインストールする
 */
function installDependencies(projectDir) {
  console.log('  依存関係をインストールしています...');
  
  try {
    // プロジェクトディレクトリに移動して pnpm install を実行
    execSync('pnpm install', { 
      cwd: projectDir,
      stdio: ['inherit', 'pipe', 'pipe'],
      timeout: 120000 // 2分タイムアウト
    });
    
    console.log('  ✅ 依存関係のインストール完了');
    return true;
  } catch (error) {
    console.error('  ❌ 依存関係のインストールに失敗しました');
    console.error(`  エラー: ${error.message}`);
    return false;
  }
}

/**
 * プロジェクトの動作テストを実行する
 */
async function runProjectTests(projectName, skipTest = false) {
  if (skipTest) {
    console.log('  ⏩ テストをスキップしました');
    return { success: true, message: 'テストスキップ' };
  }

  console.log('  プロジェクトの動作テストを実行しています...');
  
  // ビルドテスト
  console.log('    📦 ビルドテストを実行中...');
  try {
    execSync(`pnpm --filter=apps-${projectName} build`, {
      stdio: ['inherit', 'pipe', 'pipe'],
      timeout: 120000, // 2分タイムアウト
      cwd: rootDir
    });
    console.log('    ✅ ビルドテスト成功');
    
    return { success: true, message: 'すべてのテストが成功しました' };
  } catch (error) {
    console.error('    ❌ ビルドテストに失敗しました');
    console.error(`    エラー: ${error.message}`);
    return { success: false, message: `ビルドテストエラー: ${error.message}` };
  }
}

/**
 * 成功レポートを表示する
 */
function showSuccessReport(config, projectDir, testResult) {
  console.log('\n🎉 新しいドキュメントプロジェクトの作成が完了しました！\n');
  
  console.log('📋 作成されたプロジェクト情報:');
  console.log(`  プロジェクト名: ${config.projectName}`);
  console.log(`  プロジェクトパス: ${projectDir}`);
  console.log(`  パッケージ名: apps-${config.projectName}`);
  console.log(`  英語表示名: ${config.displayNameEn}`);
  console.log(`  日本語表示名: ${config.displayNameJa}`);
  console.log(`  ベースURL: /docs/${config.projectName}`);
  console.log(`  アイコン: ${config.icon}`);
  console.log(`  タグ: ${config.tags.join(', ')}`);
  console.log('');
  
  console.log('🧪 テスト結果:');
  console.log(`  ${testResult.success ? '✅' : '❌'} ${testResult.message}`);
  console.log('');
  
  console.log('🚀 次のステップ:');
  console.log('  1. 開発サーバーを起動:');
  console.log(`     pnpm --filter=apps-${config.projectName} dev`);
  console.log(`     または: cd apps/${config.projectName} && pnpm dev`);
  console.log('');
  console.log('  2. ブラウザでアクセス:');
  console.log(`     http://localhost:4321/docs/${config.projectName}`);
  console.log('');
  console.log('  3. 統合ビルドでテスト:');
  console.log('     pnpm build');
  console.log('');
  console.log('  4. ドキュメントファイルの編集:');
  console.log(`     apps/${config.projectName}/src/content/docs/`);
  console.log('');
  
  if (!testResult.success) {
    console.log('⚠️  警告: テストが失敗しました。上記のエラーを確認して問題を解決してください。');
  }
}

/**
 * メイン処理
 */
async function main() {
  console.log('🚀 新しいドキュメントプロジェクト作成スクリプト\n');
  
  // 1. 引数解析
  showProgress(1, 7, '引数を解析しています...');
  const config = parseArguments();
  
  console.log(`プロジェクト名: ${config.projectName}`);
  console.log(`英語表示名: ${config.displayNameEn}`);
  console.log(`日本語表示名: ${config.displayNameJa}`);
  console.log(`テンプレート: ${config.template}`);
  console.log('');
  
  // 2. バリデーション
  showProgress(2, 7, 'プロジェクト設定を検証しています...');
  
  const validationErrors = [
    ...validateProjectName(config.projectName),
    ...checkProjectDuplication(config.projectName),
    ...validateTemplate(config.template)
  ];
  
  if (validationErrors.length > 0) {
    console.error('❌ エラーが発生しました:');
    validationErrors.forEach(error => console.error(`  - ${error}`));
    process.exit(1);
  }
  
  console.log('✅ バリデーション完了');
  console.log('');
  
  // 3. テンプレートプロジェクトのコピー
  showProgress(3, 7, 'テンプレートプロジェクトをコピーしています...');
  
  const targetDir = copyTemplateProject(config.template, config.projectName);
  console.log('✅ プロジェクトコピー完了');
  console.log('');
  
  // 4. 設定ファイルの更新
  showProgress(4, 7, '設定ファイルを更新しています...');
  
  updateAllConfigFiles(targetDir, config);
  console.log('✅ 設定ファイル更新完了');
  console.log('');
  
  // 5. 依存関係のインストール
  showProgress(5, 7, '依存関係をインストールしています...');
  
  const installSuccess = installDependencies(targetDir);
  if (!installSuccess) {
    console.error('❌ 依存関係のインストールに失敗しました。手動でインストールしてください。');
    console.error(`   cd apps/${config.projectName} && pnpm install`);
    process.exit(1);
  }
  
  console.log('✅ 依存関係インストール完了');
  console.log('');
  
  // 6. 動作テスト
  showProgress(6, 7, '動作テストを実行しています...');
  
  const testResult = await runProjectTests(config.projectName, config.skipTest);
  console.log('✅ テスト実行完了');
  console.log('');
  
  // 7. 完了レポート
  showProgress(7, 7, '完了レポートを生成しています...');
  
  showSuccessReport(config, targetDir, testResult);
  
  // 成功時は終了コード0、テスト失敗時は終了コード1
  process.exit(testResult.success ? 0 : 1);
}

// エラーハンドリング付きでメイン処理を実行
main().catch(error => {
  console.error('\n❌ 予期しないエラーが発生しました:', error.message);
  console.error('スタックトレース:', error.stack);
  process.exit(1);
});