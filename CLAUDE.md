# CLAUDE.md

**重要:** このプロジェクトでは日本語で回答してください。コードのコメントや文書化も日本語で行ってください。

このファイルは、このリポジトリのコードを扱う際のClaude Code (claude.ai/code) へのガイダンスを提供します。

## プロジェクト概要

これは、共有コンポーネントとテーマを持つ複数のAstroドキュメントサイトを管理するモノレポです。このプロジェクトは主に翻訳された技術文書（英語から日本語）を処理し、約20のプロジェクトを管理しています。

主な特徴：
- pnpm workspacesを使用したモノレポ構造
- 共有UIコンポーネントとテーマシステム
- 多言語サポート（英語/日本語）
- ドキュメントバージョニングシステム
- GitHub Pagesデプロイ用の統合ビルドシステム

## 開発コマンド

### 基本開発
```bash
# 依存関係をインストール
pnpm install

# すべての開発サーバーを開始
pnpm dev

# 特定のアプリを開始
pnpm --filter=apps-sample-docs dev
pnpm --filter=apps-top-page dev

# すべてのコードをlint
pnpm lint

# すべてのコードをフォーマット  
pnpm format
```

### ビルドコマンド
```bash
# すべてのアプリをビルドして単一のdist/に統合
pnpm build

# ローカル開発ビルド（GitHub Pagesのベースパスを削除）
pnpm build:local

# アプリを個別にビルド（統合なし）
pnpm build:separate

# サイドバーJSONファイルを生成
pnpm build:sidebar

# 完全なデプロイパイプライン（sidebar → build → copy to ../docs-astro/）
pnpm build:deploy

# ビルド出力を../docs-astro/にコピー
pnpm copy:docs
```

### コンテンツ管理
```bash
# プロジェクト用の新しいバージョンを作成
pnpm create:version [project-name] [version]
# 例: pnpm create:version sample-docs v3

# 新しいドキュメントを作成
pnpm create:doc [project-name] [lang] [version] [slug]  
# 例: pnpm create:doc sample-docs en v1 guide/installation
```

## アーキテクチャ

### モノレポ構造
```
packages/
├── ui/           # 共有Astroコンポーネント (@docs/ui)
├── theme/        # 共通テーマシステム (@docs/theme)  
├── i18n/         # 国際化ユーティリティ (@docs/i18n)
└── versioning/   # バージョン管理 (@docs/versioning)

apps/
├── sample-docs/  # サンプルドキュメントサイト
└── top-page/     # ランディングページ

config/
├── eslint/       # 共有ESLint設定
└── tsconfig/     # 共有TypeScript設定

scripts/
├── build-integrated.js    # メインビルドオーケストレーション
├── build-sidebar.js       # サイドバー生成
└── copy-to-docs.js        # デプロイ出力コピー
```

### パッケージ依存関係
すべてのアプリは共有パッケージに依存します：
- `@docs/ui` - 共通Astroコンポーネント（Button、Card、Navigation、Sidebarなど）
- `@docs/theme` - テーマシステム
- `@docs/i18n` - 言語ユーティリティ
- `@docs/versioning` - バージョン管理

### ビルドシステム
統合ビルドシステム（`scripts/build-integrated.js`）：
1. 各アプリを個別にビルド
2. 出力を統一された`dist/`ディレクトリにコピー
3. パスプレフィックスを処理（top-pageはルート、その他は`/docs/[project]/`）
4. ローカル vs プロダクションビルド（ベースパス処理）をサポート

### 設定ファイル
各ドキュメントプロジェクトには以下があります：
```
apps/[project]/src/config/
├── docs.config.ts      # プロジェクトメタデータ、URL、機能
├── sidebar.config.ts   # サイドバーナビゲーション構造  
└── versions.config.ts  # 利用可能なバージョンとパス
```

## 主要なパターン

### コンポーネントアーキテクチャ
- `packages/ui/src/components/`内のAstroコンポーネント
- `packages/ui/src/components/index.ts`経由でエクスポート
- ドキュメントUX用のStarlightスタイルコンポーネント
- 中央集権化された`Icons.ts`レジストリを持つアイコンシステム

### コンテンツ構造
- `apps/[project]/src/content/docs/[lang]/[version]/`内のMDXコンテンツ
- フロントマター駆動のメタデータ
- 自動サイドバー生成サポート
- バージョンベースのコンテンツ整理

### 言語サポート
- URL構造：`/[lang]/[version]/[...slug]` 
- 言語検出と切り替え
- 言語ごとの個別コンテンツツリー


## このコードベースでの作業

### 新規プロジェクトの追加
1. `apps/`内に新しいAstroアプリを作成
2. 共有パッケージ依存関係を追加
3. 適切な設定で`astro.config.mjs`を設定
4. 言語とバージョン構造をセットアップ
5. 必要に応じてビルド統合スクリプトを更新

### 共有コンポーネントの変更  
- `packages/ui/src/components/`内のコンポーネントを編集
- `index.ts`内のエクスポートを更新
- 複数のアプリでテスト
- コミット前に`pnpm lint`を実行

### ビルドトラブルシューティング
- ローカルテスト用に`pnpm build:local`を使用
- パス処理について`scripts/build-integrated.js`を確認
- サイドバーJSONファイルが最新であることを確認

変更後にlintを実行：`pnpm lint`