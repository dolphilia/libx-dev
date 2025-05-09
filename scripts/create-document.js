#!/usr/bin/env node
/**
 * 新しいドキュメントを追加するスクリプト
 * 使用例: node scripts/create-document.js sample-docs en v1 guide/installation
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirnameの代替を作成
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// コマンドライン引数の取得
const [, , projectName, lang, version, slug] = process.argv;

if (!projectName || !lang || !version || !slug) {
  console.error('使用法: node scripts/create-document.js <project-name> <lang> <version> <slug>');
  process.exit(1);
}

// プロジェクトのパス
const projectPath = path.join(__dirname, '..', 'apps', projectName);

// プロジェクトが存在するか確認
if (!fs.existsSync(projectPath)) {
  console.error(`プロジェクト "${projectName}" が見つかりません`);
  process.exit(1);
}

// ドキュメントのパス
const docPath = path.join(projectPath, 'src', 'content', 'docs', lang, version, `${slug}.mdx`);

// ディレクトリの作成
fs.mkdirSync(path.dirname(docPath), { recursive: true });

// ドキュメントのタイトルを生成
const title = slug.split('/').pop().split('-').map(word => 
  word.charAt(0).toUpperCase() + word.slice(1)
).join(' ');

// カテゴリを取得
const category = slug.split('/')[0];

// 前後のページのリンクを生成
let prevLink = null;
let nextLink = null;

// 同じカテゴリの他のドキュメントを検索
const categoryDir = path.join(projectPath, 'src', 'content', 'docs', lang, version, category);
if (fs.existsSync(categoryDir)) {
  try {
    const files = fs.readdirSync(categoryDir)
      .filter(file => file.endsWith('.mdx'))
      .map(file => file.replace('.mdx', ''));
    
    // ファイル名でソート
    files.sort();
    
    // 現在のスラグの位置を取得
    const currentSlug = slug.split('/').pop();
    const index = files.indexOf(currentSlug);
    
    // 前のページ
    if (index > 0) {
      const prevSlug = files[index - 1];
      prevLink = {
        text: prevSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        link: `/docs-astro/${lang}/${version}/${category}/${prevSlug}`
      };
    }
    
    // 次のページ
    if (index < files.length - 1) {
      const nextSlug = files[index + 1];
      nextLink = {
        text: nextSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        link: `/docs-astro/${lang}/${version}/${category}/${nextSlug}`
      };
    }
  } catch (error) {
    console.warn(`カテゴリディレクトリの読み込み中にエラーが発生しました: ${error.message}`);
  }
}

// ドキュメントのテンプレート
let docContent = `---
title: "${title}"
description: "Description of ${title}"
pubDate: ${new Date().toISOString().split('T')[0]}
author: "Docs Team"
order: 1
`;

// 前のページへのリンクがある場合
if (prevLink) {
  docContent += `prev:
  text: "${prevLink.text}"
  link: "${prevLink.link}"
`;
}

// 次のページへのリンクがある場合
if (nextLink) {
  docContent += `next:
  text: "${nextLink.text}"
  link: "${nextLink.link}"
`;
}

// フロントマターの終了
docContent += `---

# ${title}

Write your content here...
`;

// ドキュメントの作成
fs.writeFileSync(docPath, docContent);
console.log(`ドキュメントを作成しました: ${docPath}`);

// サイドバー設定ファイルのパス
const sidebarConfigPath = path.join(projectPath, 'src', 'config', 'sidebar.config.ts');

// サイドバー設定ファイルが存在するか確認
if (fs.existsSync(sidebarConfigPath)) {
  console.log(`注意: 必要に応じて ${sidebarConfigPath} を更新してください`);
  console.log(`新しいドキュメントのパス: /${lang}/${version}/${slug}`);
  
  // サイドバー設定ファイルの内容を読み込む
  const sidebarConfigContent = fs.readFileSync(sidebarConfigPath, 'utf-8');
  
  // カテゴリが既に存在するか確認
  const categoryRegex = new RegExp(`title: translate\\('docs\\.${category}'`);
  if (categoryRegex.test(sidebarConfigContent)) {
    console.log(`カテゴリ "${category}" は既にサイドバーに存在します`);
    console.log(`以下のようなコードを追加してください:

{ 
  title: translate('docs.${title.toLowerCase().replace(/ /g, '_')}', lang), 
  href: \`\${baseUrl}/\${lang}/\${version}/${slug}\` 
},`);
  } else {
    console.log(`カテゴリ "${category}" はサイドバーに存在しません`);
    console.log(`以下のようなコードを追加してください:

{
  title: translate('docs.${category}', lang),
  items: [
    { 
      title: translate('docs.${title.toLowerCase().replace(/ /g, '_')}', lang), 
      href: \`\${baseUrl}/\${lang}/\${version}/${slug}\` 
    },
  ]
},`);
  }
}
