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

## ビルドとデプロイ

### ビルドコマンド

以下のコマンドを使用してプロジェクトをビルドできます：

```bash
# 統合ビルドを実行（すべてのアプリケーションをビルドして統合）
pnpm build

# ローカル開発環境用のビルドを実行（GitHub Pagesのベースパスを削除）
pnpm build:local

# 各アプリケーションを個別にビルド
pnpm build:separate

# サイドバーJSONファイルを生成
pnpm build:sidebar

```

### デプロイ

#### Cloudflare Pagesへの自動デプロイ

GitHub Actionsを使用してCloudflare Pagesに自動デプロイされます：

- **mainブランチ**: プッシュ時に自動デプロイ
- **PRブランチ**: リント・フォーマットチェックのみ実行
- **手動**: GitHub ActionsのWeb UIから手動実行可能

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

#### GitHub Actions設定

自動デプロイを有効にするには、以下のGitHub Secretsを設定してください：

1. GitHubリポジトリの「Settings」→「Secrets and variables」→「Actions」
2. 「New repository secret」で以下を追加：
   - `CLOUDFLARE_API_TOKEN`: Cloudflare API Token（Pages:Edit権限が必要）

Cloudflare API Tokenの取得方法：

1. [Cloudflare Dashboard](https://dash.cloudflare.com/)にログイン
2. 右上のプロフィールアイコン →「My Profile」→「API Tokens」タブ
3. 「Create Token」→「Custom token」の「Get started」をクリック
4. 以下の権限を設定：

   **必須権限：**
   - **Account permissions**: 
     - `Cloudflare Pages:Edit` (Pages プロジェクトの編集)
     - `Account:Read` (アカウント情報の読み取り - membershipエラー解消)
   - **User permissions**: `User:Read` (ユーザー詳細の読み取り - 認証に必要)
   - **Zone permissions**: `Zone:Read` (ドメイン設定用)
   - **Account Resources**: `Include - All accounts`（または特定のアカウント）
   - **Zone Resources**: `Include - All zones`（または特定のゾーン）

   **より安全な設定（推奨）：**
   - 特定のアカウントとゾーンのみを指定することでセキュリティを向上
   
   **⚠️ トラブルシューティング:**
   - `Authentication error [code: 10000]`が発生する場合は`Account:Read`権限を確認
   - `/memberships`エラーは通常、アカウントレベルでの読み取り権限不足が原因

5. **Token name**: 識別しやすい名前を設定（例：`GitHub Actions - docs-astro`）
6. **TTL**: 有効期限を設定（デフォルトまたは必要に応じて）
7. トークンを作成し、表示されたトークンをコピー

⚠️ **重要**: トークンは一度しか表示されないため、必ずコピーしてGitHub Secretsに保存してください。

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
