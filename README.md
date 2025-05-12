# docs-astro

複数のAstroプロジェクトをモノレポ構造で管理するドキュメントサイトです。主に英語の技術ドキュメントを日本語に翻訳したコンテンツを扱い、約20のプロジェクトを管理します。

## 特徴

- モノレポ構造による効率的な管理
- 共通UIコンポーネントとテーマ
- 多言語対応（英語・日本語）
- ドキュメントのバージョン管理
- 横断的な検索機能
- GitHub Pagesへの自動デプロイ

## プロジェクト構造

```
docs-astro-dev/
├── packages/         # 共有パッケージ
│   ├── ui/           # 共通UIコンポーネント
│   ├── theme/        # 共通テーマ
│   ├── i18n/         # 国際化ユーティリティ
│   ├── search/       # 検索機能
│   └── versioning/   # バージョン管理機能
├── apps/             # 各ドキュメントプロジェクト
├── config/           # 共通設定
└── scripts/          # ユーティリティスクリプト
```

## 開発環境のセットアップ

### 前提条件

- Node.js 18以上
- pnpm 8以上
- Git

### セットアップ手順

1. リポジトリのクローン：
   ```bash
   git clone https://github.com/yourusername/docs-astro.git
   cd docs-astro
   ```

2. 依存関係のインストール：
   ```bash
   pnpm install
   ```

3. 開発サーバーの起動：
   ```bash
   # すべてのプロジェクトを起動
   pnpm dev
   
   # 特定のプロジェクトのみ起動
   pnpm --filter=@docs/project-name dev
   ```

## 新規プロジェクトの追加方法

1. 新しいAstroプロジェクトを作成：
   ```bash
   pnpm create astro apps/new-project --template minimal
   ```

2. 共有パッケージの依存関係を追加：
   ```bash
   pnpm --filter=@docs/new-project add @docs/ui @docs/theme @docs/i18n @docs/search
   ```

3. プロジェクト設定の調整：
   - `astro.config.mjs`の設定
   - 多言語対応の設定
   - バージョン管理の設定
   - 検索機能の設定

## ドキュメント管理

### 設定ファイル

ドキュメントの設定は以下のファイルで管理されています：

```
apps/[project-name]/src/config/
├── docs.config.ts      # ドキュメント全体の設定
├── sidebar.config.ts   # サイドバー項目の設定
└── versions.config.ts  # バージョン情報の設定
```

### 新しいバージョンの追加

新しいバージョンを追加するには、以下のコマンドを実行します：

```bash
pnpm create:version [project-name] [version]

# 例: sample-docsプロジェクトにv3バージョンを追加
pnpm create:version sample-docs v3
```

このコマンドは以下の処理を行います：
- バージョン設定ファイルの更新
- 各言語のディレクトリ構造の作成
- インデックスページの作成
- 前のバージョンからのドキュメントのコピー（オプション）

### 新しいドキュメントの追加

新しいドキュメントを追加するには、以下のコマンドを実行します：

```bash
pnpm create:doc [project-name] [lang] [version] [slug]

# 例: sample-docsプロジェクトの英語版v1にインストールガイドを追加
pnpm create:doc sample-docs en v1 guide/installation
```

このコマンドは以下の処理を行います：
- ドキュメントファイル（MDX）の作成
- 前後のページへのリンクの自動生成
- サイドバー設定の更新ガイダンスの表示

## ライセンス

MIT
