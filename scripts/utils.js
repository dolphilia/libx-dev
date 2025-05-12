import fsPromises from 'fs/promises';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { promisify } from 'util';
import matter from 'gray-matter';

const gzip = promisify(zlib.gzip);

/**
 * JSONファイルを圧縮して保存
 */
export async function saveCompressedJson(filePath, data) {
  try {
    // 通常のJSONファイルを保存
    await fsPromises.writeFile(filePath, JSON.stringify(data, null, 2));
    console.log(`  通常のJSONファイルを保存しました: ${filePath}`);
    
    // 圧縮版のJSONファイルを保存
    const compressedData = await gzip(JSON.stringify(data));
    const compressedPath = `${filePath}.gz`;
    await fsPromises.writeFile(compressedPath, compressedData);
    console.log(`  圧縮版のJSONファイルを保存しました: ${compressedPath}`);
    
    // 圧縮率を計算
    const originalSize = JSON.stringify(data).length;
    const compressedSize = compressedData.length;
    const compressionRatio = ((originalSize - compressedSize) / originalSize * 100).toFixed(2);
    console.log(`  圧縮率: ${compressionRatio}% (${originalSize} → ${compressedSize} bytes)`);
  } catch (error) {
    console.error(`  JSONファイルの保存中にエラーが発生しました:`, error);
    // エラーを再スローして呼び出し元で処理できるようにする
    throw error; 
  }
}

/**
 * ディレクトリを再帰的にコピーする関数
 */
export function copyDirRecursive(src, dest) {
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
 * Markdown/MDX ファイルを解析してフロントマターとコンテンツを取得する関数
 */
export async function parseMarkdownFile(filePath) {
  try {
    const fileContent = await fsPromises.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    return { frontmatter: data, content };
  } catch (error) {
    console.error(`Markdownファイルの解析中にエラーが発生しました: ${filePath}`, error);
    // エラーを再スローして呼び出し元で処理できるようにする
    throw error;
  }
}
