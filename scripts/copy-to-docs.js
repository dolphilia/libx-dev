#!/usr/bin/env node

/**
 * ビルド出力コピースクリプト
 * 
 * このスクリプトは、`dist/`ディレクトリ内のすべてのファイルを`../libx/`にコピーします。
 * 重複するファイルがある場合は上書きします。
 * 
 * 使用方法:
 * ```
 * node scripts/copy-to-docs.js
 * ```
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { copyDirRecursive } from './utils.js';

// ESモジュールで__dirnameを取得
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const docsDir = path.resolve(rootDir, '..', 'libx');

/**
 * メイン処理
 */
async function main() {
  console.log('ビルド出力のコピーを開始します...');

  // distディレクトリの存在確認
  if (!fs.existsSync(distDir)) {
    console.error(`エラー: ビルド出力ディレクトリが存在しません: ${distDir}`);
    console.error('先に `pnpm build` を実行してビルド出力を生成してください。');
    process.exit(1);
  }

  // libxディレクトリの存在確認（存在しない場合は作成）
  if (!fs.existsSync(docsDir)) {
    console.log(`コピー先ディレクトリを作成します: ${docsDir}`);
    fs.mkdirSync(docsDir, { recursive: true });
  }

  try {
    console.log(`${distDir} から ${docsDir} にファイルをコピーしています...`);
    
    // ディレクトリをコピー（既存ファイルは上書き）
    copyDirRecursive(distDir, docsDir);
    
    console.log('ファイルのコピーが完了しました。');
    console.log(`コピー先ディレクトリ: ${docsDir}`);
  } catch (error) {
    console.error('ファイルのコピー中にエラーが発生しました:', error);
    process.exit(1);
  }
}

main().catch(error => {
  console.error('スクリプト実行中にエラーが発生しました:', error);
  process.exit(1);
});
