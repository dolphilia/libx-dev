# Project Template

このプロジェクトは新しいドキュメントプロジェクト作成用のテンプレートです。

## 概要

このテンプレートには以下が含まれています：

- 多言語対応（英語・日本語）
- バージョン管理システム
- 共通UIコンポーネント
- レスポンシブデザイン
- 検索機能（Pagefind）
- ダークモード対応

## プロジェクト構造

```text
src/
├── components/          # プロジェクト固有のコンポーネント
├── config/             # プロジェクト設定ファイル
│   ├── project.config.json
│   └── ...
├── content/            # ドキュメントコンテンツ
│   └── docs/
│       ├── en/         # 英語ドキュメント
│       └── ja/         # 日本語ドキュメント
├── layouts/            # レイアウトコンポーネント
├── pages/              # ページルーティング
└── utils/              # ユーティリティ関数
```

## 開発コマンド

すべてのコマンドはプロジェクトルートから実行します：

| コマンド | 説明 |
| :--- | :--- |
| `pnpm install` | 依存関係をインストール |
| `pnpm dev` | 開発サーバーを起動（localhost:4321） |
| `pnpm build` | プロダクション用にビルド |
| `pnpm preview` | ビルド結果をローカルプレビュー |

## カスタマイズ

1. **プロジェクト設定**: `src/config/project.config.json`
2. **コンテンツ**: `src/content/docs/`
3. **スタイル**: `src/styles/`
4. **コンポーネント**: `src/components/`

## 新しいドキュメントの追加

```bash
# 新しいドキュメントを作成
node scripts/create-document.js project-name lang version slug

# 新しいバージョンを作成
node scripts/create-version.js project-name version
```

## 詳細情報

詳細な使用方法については、プロジェクトルートの `README.md` と `docs/新しいドキュメントサイトの作成手順.md` を参照してください。