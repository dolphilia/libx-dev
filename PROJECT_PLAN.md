# 複数Astroプロジェクトのモノレポ構造によるドキュメントサイト計画

## 1. プロジェクト構造

```
docs-astro-dev/
├── .github/                    # GitHub関連設定
│   └── workflows/              # GitHub Actions設定
├── packages/                   # 共有パッケージ
│   ├── ui/                     # 共通UIコンポーネント
│   ├── theme/                  # 共通テーマ
│   ├── i18n/                   # 国際化ユーティリティ
│   ├── search/                 # 検索機能
│   └── versioning/             # バージョン管理機能
├── apps/                       # 各ドキュメントプロジェクト
│   ├── project-1/              # プロジェクト1
│   ├── project-2/              # プロジェクト2
│   └── ...                     # その他プロジェクト
├── config/                     # 共通設定
│   ├── eslint/                 # ESLint設定
│   └── tsconfig/               # TypeScript設定
├── scripts/                    # ユーティリティスクリプト
│   ├── build-all.js            # 全プロジェクトビルド
│   └── deploy.js               # デプロイスクリプト
├── .gitignore
├── package.json
├── pnpm-workspace.yaml         # pnpmワークスペース設定
└── README.md
```

## 2. 技術スタック

- **パッケージマネージャー**: pnpm (ワークスペース機能を活用)
- **フレームワーク**: Astro
- **型システム**: TypeScript
- **スタイリング**: TailwindCSS
- **検索エンジン**: Algolia DocSearch または MeiliSearch
- **国際化**: Astro i18n
- **バージョン管理**: カスタムソリューション
- **デプロイ**: GitHub Actions + GitHub Pages

## 3. モノレポ管理

### pnpmワークスペース設定

```yaml
# pnpm-workspace.yaml
packages:
  - 'packages/*'
  - 'apps/*'
```

### ルートpackage.json

```json
{
  "name": "docs-astro",
  "private": true,
  "scripts": {
    "dev": "pnpm --filter=./apps/* dev",
    "build": "pnpm --filter=./apps/* build",
    "preview": "pnpm --filter=./apps/* preview",
    "lint": "eslint .",
    "format": "prettier --write ."
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0"
  }
}
```

## 4. 共通パッケージ

### UI コンポーネント

共通のUIコンポーネントを作成し、各プロジェクトで再利用します。

```
packages/ui/
├── src/
│   ├── components/
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Navigation.astro
│   │   └── ...
│   └── index.ts
├── package.json
└── tsconfig.json
```

### 多言語対応

i18nユーティリティを作成し、多言語対応を実装します。

```
packages/i18n/
├── src/
│   ├── utils/
│   │   ├── getLanguage.ts
│   │   ├── translatePath.ts
│   │   └── ...
│   ├── locales/
│   │   ├── en.json
│   │   ├── ja.json
│   │   └── ...
│   └── index.ts
├── package.json
└── tsconfig.json
```

### 検索機能

横断的な検索機能を実装します。

```
packages/search/
├── src/
│   ├── components/
│   │   ├── SearchBar.astro
│   │   └── SearchResults.astro
│   ├── utils/
│   │   ├── indexer.ts
│   │   └── search.ts
│   └── index.ts
├── package.json
└── tsconfig.json
```

## 5. ドキュメントプロジェクト構造

各ドキュメントプロジェクトは以下の構造を持ちます。

```
apps/project-name/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   └── project-specific/
│   ├── content/
│   │   ├── docs/
│   │   │   ├── en/
│   │   │   │   ├── v1/
│   │   │   │   │   ├── guide/
│   │   │   │   │   │   └── getting-started.md
│   │   │   │   │   └── ...
│   │   │   │   └── v2/
│   │   │   └── ja/
│   │   │       ├── v1/
│   │   │       │   ├── guide/
│   │   │       │   │   └── getting-started.md
│   │   │       │   └── ...
│   │   │       └── v2/
│   │   └── config.ts
│   ├── layouts/
│   │   ├── DocLayout.astro
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── [lang]/
│   │   │   ├── [version]/
│   │   │   │   ├── [...slug].astro
│   │   │   │   └── index.astro
│   │   │   └── index.astro
│   │   └── index.astro
│   └── env.d.ts
├── astro.config.mjs
├── package.json
├── tailwind.config.cjs
└── tsconfig.json
```

## 6. バージョン管理の実装

ドキュメントのバージョン管理は以下の方法で実装します：

1. コンテンツディレクトリ内にバージョンごとのサブディレクトリを作成
2. URLパスにバージョン情報を含める（例：`/ja/v1/guide/getting-started`）
3. バージョン切り替えUIを実装
4. バージョン間の差分を表示する機能を追加

## 7. 多言語対応の実装

多言語対応は以下の方法で実装します：

1. コンテンツディレクトリ内に言語ごとのサブディレクトリを作成
2. URLパスに言語情報を含める（例：`/ja/v1/guide/getting-started`）
3. 言語切り替えUIを実装
4. デフォルト言語からのフォールバック機能を実装

## 8. 検索機能の実装

検索機能は以下の方法で実装します：

1. Algolia DocSearchまたはMeiliSearchを使用
2. 各ドキュメントのインデックス作成
3. 言語・バージョンごとの検索フィルタリング
4. 検索結果の表示とナビゲーション

## 9. GitHub Pagesへのデプロイ

GitHub Actionsを使用して自動デプロイを設定します：

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'pnpm'
      - name: Install dependencies
        run: pnpm install
      - name: Build all projects
        run: pnpm build
      - name: Upload artifacts
        uses: actions/upload-pages-artifact@v1
        with:
          path: './dist'

  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

## 10. 開発ワークフロー

1. **新規プロジェクト追加**:
   ```bash
   pnpm create astro apps/new-project --template minimal
   ```

2. **依存関係の追加**:
   ```bash
   pnpm --filter=@docs/new-project add @docs/ui @docs/theme @docs/i18n @docs/search
   ```

3. **開発サーバー起動**:
   ```bash
   # 特定のプロジェクトのみ
   pnpm --filter=@docs/project-name dev
   
   # すべてのプロジェクト
   pnpm dev
   ```

4. **ビルド**:
   ```bash
   # 特定のプロジェクトのみ
   pnpm --filter=@docs/project-name build
   
   # すべてのプロジェクト
   pnpm build
   ```

## 11. 翻訳ワークフロー

1. 原文（英語）ドキュメントの作成/更新
2. 翻訳が必要なファイルの抽出
3. 翻訳作業（手動または翻訳ツール支援）
4. 翻訳ファイルのレビューと修正
5. 翻訳ファイルのコミットとデプロイ

このワークフローを自動化するスクリプトも作成可能です。

## 12. 実装ステップ

1. モノレポの基本構造セットアップ
2. 共通パッケージの作成
3. サンプルドキュメントプロジェクトの作成
4. 多言語対応の実装
5. バージョン管理の実装
6. 検索機能の実装
7. GitHub Actionsによるデプロイ設定
8. 残りのプロジェクトの追加と設定
