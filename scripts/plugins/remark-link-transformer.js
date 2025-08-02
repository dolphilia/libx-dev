/**
 * MDXリンク変換プラグイン
 * 
 * このプラグインは、MDXファイル内のリンクを以下のように変換します：
 * 1. 相対リンク: 同じディレクトリ内のファイルへのリンクを正しいパスに変換
 * 2. プロジェクト内絶対パス: /en/v2/... のようなパスにベースパスを追加
 */

import { visit } from 'unist-util-visit';
import path from 'path';

export function remarkLinkTransformer(options = {}) {
  const { baseUrl = '/docs/sample-docs' } = options;
  
  return function transformer(tree, file) {
    // ファイルパスから現在の位置情報を取得
    const filePath = file.history[0] || '';
    const relativePath = path.relative(process.cwd(), filePath);
    
    // content/docs/[lang]/[version]/... の形式からパラメータを抽出
    const pathMatch = relativePath.match(/content\/docs\/([a-z]+)\/([a-z0-9]+)\/(.+)\.mdx?$/);
    if (!pathMatch) {
      // パスが期待される形式でない場合はスキップ
      return;
    }
    
    const [, lang, version, currentPath] = pathMatch;
    const currentDir = path.dirname(currentPath);
    
    visit(tree, 'link', (node) => {
      const url = node.url;
      
      // 外部URLやアンカーリンクはスキップ
      if (url.startsWith('http') || url.startsWith('#') || url.startsWith('mailto:')) {
        return;
      }
      
      // 1. 相対リンクの処理 (例: "02-creating-documents" or "./02-creating-documents")
      if (!url.startsWith('/')) {
        // 拡張子がない場合は追加
        let targetFile = url.replace(/^\.\//, ''); // ./ プレフィックスを削除
        
        // 現在のディレクトリ内の同じレベルのファイルを想定
        let targetPath;
        if (currentDir === '.') {
          // ルートレベルの場合
          targetPath = targetFile;
        } else {
          // サブディレクトリの場合
          targetPath = path.join(currentDir, targetFile);
        }
        
        // 最終的なURLを構築
        node.url = `${baseUrl}/${lang}/${version}/${targetPath}/`;
        
        console.log(`[Link Transform] 相対リンク変換: ${url} → ${node.url}`);
        return;
      }
      
      // 2. プロジェクト内絶対パスの処理 (例: "/en/v2/guide/creating-documents")
      if (url.match(/^\/[a-z]+\/[a-z0-9]+\//)) {
        // すでにプロジェクトベースパスが含まれていない場合のみ追加
        if (!url.startsWith(baseUrl)) {
          node.url = baseUrl + url;
          console.log(`[Link Transform] 絶対パス変換: ${url} → ${node.url}`);
        }
        return;
      }
      
      // 3. その他の絶対パス (例: "/guide/creating-documents") 
      // これは現在の言語とバージョンを使用して変換
      if (url.startsWith('/') && !url.startsWith(baseUrl)) {
        node.url = `${baseUrl}/${lang}/${version}${url}`;
        console.log(`[Link Transform] 言語・バージョン補完: ${url} → ${node.url}`);
        return;
      }
    });
  };
}

export default remarkLinkTransformer;