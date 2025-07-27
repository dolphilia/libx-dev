# docs-astro

複数のAstroプロジェクトをモノレポ構造で管理するドキュメントサイトです。主に英語の技術ドキュメントを日本語に翻訳したコンテンツを扱います。

## 特徴

- モノレポ構造による効率的な管理
- 共通UIコンポーネントとテーマ
- 多言語対応（英語・日本語）
- ドキュメントのバージョン管理
- Cloudflare Pagesへの自動デプロイ

## プロジェクト構造

```
docs-astro-dev/
├── packages/         # 共有パッケージ
│   ├── ui/           # 共通UIコンポーネント
│   ├── theme/        # 共通テーマ
│   ├── i18n/         # 国際化ユーティリティ
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
   git clone https://github.com/dolphilia/docs-astro-dev.git
   cd docs-astro-dev
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
   pnpm --filter=sample-docs dev
   pnpm --filter=top-page dev
   ```

## 新規プロジェクトの追加方法

1. 新しいAstroプロジェクトを作成：
   ```bash
   pnpm create astro apps/new-project --template minimal
   ```

2. 共有パッケージの依存関係を追加：
   ```bash
   pnpm --filter=new-project add @docs/ui @docs/theme @docs/i18n @docs/versioning
   ```

3. プロジェクト設定の調整：
   - `astro.config.mjs`の設定
   - `src/config/project.config.ts`の設定
   - 多言語対応の設定
   - バージョン管理の設定

## ビルドとデプロイ

### ビルドコマンド

以下のコマンドを使用してプロジェクトをビルドできます：

```bash
# 統合ビルドを実行（すべてのアプリケーションをビルドして統合）
pnpm build

# ローカル開発環境用のビルドを実行（ベースパスなし）
pnpm build:local

# 各アプリケーションを個別にビルド
pnpm build:separate

# サイドバーJSONファイルを生成
pnpm build:sidebar

```

### デプロイ

#### Cloudflare Pagesへのデプロイ

現在はCloudflare Wrangler CLIを使用してデプロイします。
プロジェクト名：`libx`

#### 手動デプロイ

ローカル環境から手動でデプロイする場合：

```bash
# Cloudflare Pagesに直接デプロイ
pnpm build && pnpm deploy:pages

# または一連のビルドプロセスとデプロイを実行
# 1. サイドバーを構築
# 2. 統合ビルドを実行
# 3. ビルド出力を../docs-astro/にコピー
pnpm build:deploy

# ビルド出力を../docs-astro/にコピーのみ実行
pnpm copy:docs
```

## 自動プロジェクト検出機能

`apps/top-page`では自動プロジェクト検出機能を使用しており、`apps/`ディレクトリ内のプロジェクトを自動的に検出してトップページに表示します。

### プロジェクト装飾設定

`apps/top-page/src/config/projects.config.ts`でプロジェクトのアイコンやタグなどの装飾情報を設定できます：

```typescript
const projectDecorations: Record<string, ProjectDecoration> = {
  'sample-docs': {
    icon: 'file-text',
    tags: ['sample', 'documentation'],
    isNew: true
  }
  // 新しいプロジェクトを追加する場合はここに装飾情報を追加
};
```

## ドキュメント管理

### 設定ファイル

ドキュメントの設定は以下のファイルで管理されています：

```
apps/[project-name]/src/config/
└── project.config.ts   # プロジェクト統合設定（メタデータ、バージョン、カテゴリ翻訳）

apps/top-page/src/config/
└── projects.config.ts  # トップページのプロジェクト一覧設定
```

### 新しいバージョンの追加

新しいバージョンを追加するには、以下のコマンドを実行します：

```bash
node scripts/create-version.js [project-name] [version]

# 例: sample-docsプロジェクトにv3バージョンを追加
node scripts/create-version.js sample-docs v3
```

このコマンドは以下の処理を行います：
- バージョン設定ファイルの更新
- 各言語のディレクトリ構造の作成
- インデックスページの作成
- 前のバージョンからのドキュメントのコピー（オプション）

### 新しいドキュメントの追加

新しいドキュメントを追加するには、以下のコマンドを実行します：

```bash
node scripts/create-document.js [project-name] [lang] [version] [slug]

# 例: sample-docsプロジェクトの英語版v1にインストールガイドを追加
node scripts/create-document.js sample-docs en v1 guide/installation
```

このコマンドは以下の処理を行います：
- ドキュメントファイル（MDX）の作成
- 前後のページへのリンクの自動生成
- サイドバー設定の更新ガイダンスの表示
