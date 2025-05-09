#!/usr/bin/env node
/**
 * 新しいバージョンを追加するスクリプト
 * 使用例: node scripts/create-version.js sample-docs v3
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// __dirnameの代替を作成
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// コマンドライン引数の取得
const [, , projectName, version] = process.argv;

if (!projectName || !version) {
  console.error('使用法: node scripts/create-version.js <project-name> <version>');
  process.exit(1);
}

// プロジェクトのパス
const projectPath = path.join(__dirname, '..', 'apps', projectName);

// プロジェクトが存在するか確認
if (!fs.existsSync(projectPath)) {
  console.error(`プロジェクト "${projectName}" が見つかりません`);
  process.exit(1);
}

// バージョン設定ファイルのパス
const versionsConfigPath = path.join(projectPath, 'src', 'config', 'versions.config.ts');

// バージョン設定ファイルが存在するか確認
if (!fs.existsSync(versionsConfigPath)) {
  console.error(`バージョン設定ファイル "${versionsConfigPath}" が見つかりません`);
  process.exit(1);
}

// バージョン設定ファイルの内容を読み込む
const versionsConfigContent = fs.readFileSync(versionsConfigPath, 'utf-8');

// 既存のバージョンを抽出
const versionsMatch = versionsConfigContent.match(/const versions: Version\[\] = \[([\s\S]*?)\];/);
if (!versionsMatch) {
  console.error('バージョン設定ファイルの形式が正しくありません');
  process.exit(1);
}

// 既存のバージョンを解析
const versionsStr = versionsMatch[1];
const versions = [];
const versionRegex = /{\s*id:\s*['"]([^'"]+)['"]/g;
let match;
while ((match = versionRegex.exec(versionsStr)) !== null) {
  versions.push(match[1]);
}

// 既に同じバージョンが存在するか確認
if (versions.includes(version)) {
  console.error(`バージョン "${version}" は既に存在します`);
  process.exit(1);
}

// 既存のバージョンをすべて非最新に設定
const updatedVersionsContent = versionsConfigContent.replace(/isLatest:\s*true/g, 'isLatest: false');

// 新しいバージョンを追加
const newVersionStr = `
  { 
    id: '${version}', 
    name: 'Version ${version.replace('v', '')}', 
    date: new Date('${new Date().toISOString().split('T')[0]}'), 
    isLatest: true 
  },`;

const updatedContent = updatedVersionsContent.replace(
  /const versions: Version\[\] = \[([\s\S]*?)\];/,
  `const versions: Version[] = [${versionsStr}${newVersionStr}\n];`
);

// 設定ファイルを更新
fs.writeFileSync(versionsConfigPath, updatedContent);
console.log(`バージョン設定ファイルを更新しました: ${versionsConfigPath}`);

// ドキュメント設定ファイルのパス
const docsConfigPath = path.join(projectPath, 'src', 'config', 'docs.config.ts');

// ドキュメント設定ファイルが存在するか確認
if (!fs.existsSync(docsConfigPath)) {
  console.error(`ドキュメント設定ファイル "${docsConfigPath}" が見つかりません`);
  process.exit(1);
}

// ドキュメント設定ファイルの内容を読み込む
const docsConfigContent = fs.readFileSync(docsConfigPath, 'utf-8');

// サポートされている言語を抽出
const langsMatch = docsConfigContent.match(/supportedLangs:\s*\[([^\]]+)\]/);
if (!langsMatch) {
  console.error('ドキュメント設定ファイルの形式が正しくありません');
  process.exit(1);
}

const langsStr = langsMatch[1];
const langs = langsStr.split(',').map(lang => lang.trim().replace(/['"]/g, ''));

// 各言語のインデックスページを作成
langs.forEach(lang => {
  // ディレクトリの作成
  const contentDir = path.join(projectPath, 'src', 'content', 'docs', lang, version);
  const pagesDir = path.join(projectPath, 'src', 'pages', lang, version);
  
  fs.mkdirSync(contentDir, { recursive: true });
  fs.mkdirSync(pagesDir, { recursive: true });
  
  // インデックスページの作成
  const indexPagePath = path.join(pagesDir, 'index.astro');
  const indexPageContent = `---
import { getCollection, type CollectionEntry } from 'astro:content';
import MainLayout from '../../../layouts/MainLayout.astro';
import { Card } from '@docs/ui/components';
import type { LocaleKey } from '@docs/i18n/locales';
import { translate } from '@docs/i18n/utils';
import docsConfig from '../../../config/docs.config';

// 言語とバージョンの設定
const lang: LocaleKey = '${lang}';
const version = '${version}';

// ベースパス
const baseUrl = docsConfig.baseUrl;

// 型定義
type DocEntry = CollectionEntry<'docs'>;

// ${version}の${lang}ドキュメントを取得
const docs = await getCollection('docs', (entry: DocEntry) => {
  return entry.slug.startsWith(\`\${lang}/\${version}/\`);
});

// カテゴリごとにドキュメントを整理
const categories = docs.reduce((acc: Record<string, DocEntry[]>, doc: DocEntry) => {
  // スラグからカテゴリを抽出（例: ${lang}/${version}/guide/getting-started → guide）
  const parts = doc.slug.split('/');
  if (parts.length >= 3) {
    const category = parts[2]; // 3番目の部分がカテゴリ
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(doc);
  }
  return acc;
}, {});

// カテゴリごとにドキュメントを順序で並べ替え
Object.keys(categories).forEach(category => {
  categories[category].sort((a: DocEntry, b: DocEntry) => {
    const orderA = a.data.order || 999;
    const orderB = b.data.order || 999;
    return orderA - orderB;
  });
});

// カテゴリの表示名マッピング
const categoryNames: Record<string, string> = {
  'guide': translate('docs.guide', lang),
  'api': translate('navigation.api', lang),
  'examples': translate('docs.examples', lang)
};
---

<MainLayout title={\`\${translate('docs.documentation', lang)} (\${version})\`} lang={lang} version={version}>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-8">{translate('docs.documentation', lang)} - {version}</h1>
    
    <div class="space-y-12">
      {Object.keys(categories).map(category => (
        <div>
          <h2 class="text-2xl font-semibold mb-4">{categoryNames[category] || category}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories[category].map((doc: DocEntry) => (
              <Card
                title={doc.data.title}
                href={\`\${baseUrl}/\${lang}/\${version}/\${doc.slug.split('/').slice(2).join('/')}\`}
              >
                <p class="text-gray-600 dark:text-gray-400">{doc.data.description}</p>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
    
    {Object.keys(categories).length === 0 && (
      <div class="text-center py-12">
        <p class="text-gray-600 dark:text-gray-400">{translate('docs.no_documents', lang)}</p>
      </div>
    )}
  </div>
</MainLayout>`;
  
  fs.writeFileSync(indexPagePath, indexPageContent);
  console.log(`インデックスページを作成しました: ${indexPagePath}`);
  
  // 前のバージョンからドキュメントをコピー（オプション）
  const latestVersion = versions.find(v => v !== version);
  if (latestVersion) {
    const prevContentDir = path.join(projectPath, 'src', 'content', 'docs', lang, latestVersion);
    if (fs.existsSync(prevContentDir)) {
      try {
        // ディレクトリ内のファイルをコピー
        const files = fs.readdirSync(prevContentDir, { recursive: true });
        for (const file of files) {
          const srcPath = path.join(prevContentDir, file);
          const destPath = path.join(contentDir, file);
          
          // ファイルの場合のみコピー
          if (fs.statSync(srcPath).isFile()) {
            // 親ディレクトリを作成
            fs.mkdirSync(path.dirname(destPath), { recursive: true });
            
            // ファイルをコピー
            fs.copyFileSync(srcPath, destPath);
          }
        }
        console.log(`${lang}の${latestVersion}から${version}にドキュメントをコピーしました`);
      } catch (error) {
        console.error(`ドキュメントのコピー中にエラーが発生しました: ${error.message}`);
      }
    }
  }
});

console.log(`${projectName}に${version}を追加しました`);
