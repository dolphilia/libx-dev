# トップページ作成計画

## 概要

現状、`./apps/sample-docs/`でトップページとドキュメントページを管理していますが、トップページは別に管理し、`./apps/sample-docs/`はドキュメントページだけを提供するように変更します。最終的に`./apps/*/`で作成したすべてのドキュメントページに1つのトップページからアクセスできるようにします。

## 目標

1. トップページを`./apps/top-page/`として独立させる
2. `./apps/sample-docs/`はドキュメントページのみを提供するように変更する
3. トップページから各ドキュメントプロジェクトにアクセスできるようにする
4. 多言語対応を維持する

## 実装計画

### 1. トップページプロジェクトの作成

#### 1.1 プロジェクト構造

```
apps/top-page/
├── astro.config.mjs        # Astro設定ファイル
├── package.json            # パッケージ設定
├── public/                 # 静的ファイル
│   └── favicon.svg         # ファビコン
├── src/
│   ├── components/         # コンポーネント
│   │   ├── LanguageSelector.astro  # 言語選択コンポーネント
│   │   └── ProjectCard.astro       # プロジェクトカードコンポーネント
│   ├── config/             # 設定ファイル
│   │   └── projects.config.ts      # プロジェクト一覧設定
│   ├── layouts/            # レイアウト
│   │   └── MainLayout.astro        # メインレイアウト
│   ├── pages/              # ページ
│   │   ├── index.astro             # リダイレクト用ルートページ
│   │   └── [lang]/                 # 言語別ページ
│   │       └── index.astro         # 言語別トップページ
│   └── styles/             # スタイル
│       └── global.css              # グローバルスタイル
└── tsconfig.json           # TypeScript設定
```

#### 1.2 依存関係

トップページプロジェクトは以下の共有パッケージに依存します：

- `@docs/ui` - UIコンポーネント
- `@docs/theme` - テーマ設定
- `@docs/i18n` - 多言語対応
- `@docs/search` - 検索機能

### 2. sample-docsの変更

#### 2.1 トップページの削除

`./apps/sample-docs/src/pages/index.astro`と`./apps/sample-docs/src/pages/[lang]/index.astro`を修正し、ドキュメントページにリダイレクトするようにします。

#### 2.2 パス構造の変更

ドキュメントページのパスを`/docs/sample-docs/[lang]/[version]/[...slug]`の形式に変更します。

### 3. ルーティング設計

#### 3.1 トップページのルーティング

- `/` → `/en/`にリダイレクト
- `/[lang]/` → 言語別トップページ

#### 3.2 ドキュメントページのルーティング

- `/docs/sample-docs/` → `/docs/sample-docs/en/`にリダイレクト
- `/docs/sample-docs/[lang]/` → `/docs/sample-docs/[lang]/v1/`にリダイレクト
- `/docs/sample-docs/[lang]/[version]/` → バージョン別トップページ
- `/docs/sample-docs/[lang]/[version]/[...slug]` → 各ドキュメントページ

### 4. デプロイ設定

GitHub Pagesにデプロイする場合、ベースパスを`/docs-astro`に設定します。

## 実装ステップ

1. トップページプロジェクトの初期設定
   - プロジェクト構造の作成
   - 依存関係の設定
   - Astro設定ファイルの作成

2. 共有コンポーネントの作成
   - プロジェクトカードコンポーネント
   - 言語選択コンポーネント
   - メインレイアウト

3. トップページの実装
   - プロジェクト一覧設定
   - 言語別トップページ
   - リダイレクト用ルートページ

4. sample-docsの修正
   - トップページの削除またはリダイレクト設定
   - パス構造の変更

5. テストとデバッグ
   - ローカル環境でのテスト
   - リンクとリダイレクトの確認
   - 多言語対応の確認

6. デプロイ
   - GitHub Pagesへのデプロイ設定
   - デプロイテスト
