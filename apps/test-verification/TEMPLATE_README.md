# プロジェクトテンプレート

このディレクトリは新しいドキュメントプロジェクトを作成するためのテンプレートです。

## 概要

`scripts/create-project.js`を使用して新しいドキュメントプロジェクトを作成する際に、このテンプレートがコピーされて新しいプロジェクトの基盤となります。

## テンプレートの特徴

- **最小限の構成**: 新しいプロジェクトに必要最小限の要素のみ
- **多言語対応**: 英語（`en`）と日本語（`ja`）のサンプル
- **シンプルなバージョン管理**: v1のみの初期構成
- **クリーンな設定**: プロジェクト固有でない汎用設定

## ディレクトリ構造

```text
project-template/
├── TEMPLATE_README.md        # このファイル（新しいプロジェクトにはコピーされない）
├── README.md                 # プロジェクト用README
├── package.json              # 依存関係定義
├── astro.config.mjs          # Astro設定
├── tsconfig.json             # TypeScript設定
├── public/
│   ├── favicon.svg           # ファビコン
│   └── sw.js                 # Service Worker
└── src/
    ├── components/           # プロジェクト固有コンポーネント
    ├── config/
    │   └── project.config.json  # プロジェクト設定
    ├── content/
    │   └── docs/
    │       ├── en/v1/01-guide/
    │       │   └── 01-getting-started.mdx
    │       └── ja/v1/01-guide/
    │           └── 01-getting-started.mdx
    ├── layouts/              # レイアウトコンポーネント
    ├── pages/                # ページルーティング
    ├── styles/               # スタイルファイル
    └── utils/                # ユーティリティ関数
```

## 新しいプロジェクト作成方法

```bash
# 基本的な使用方法
node scripts/create-project.js my-project "My Project" "私のプロジェクト"

# オプション付きで作成
node scripts/create-project.js api-docs "API Documentation" "API文書" \
  --description-en="Complete API reference and guides" \
  --description-ja="完全なAPIリファレンスとガイド" \
  --icon=code \
  --tags=api,reference,development
```

## 作成後の流れ

1. **テンプレートコンテンツの削除**: `src/content/docs/`内のサンプルコンテンツを削除
2. **設定のカスタマイズ**: プロジェクト名、表示名、説明文などを調整
3. **実際のコンテンツ作成**: プロジェクト固有のドキュメントを作成
4. **カテゴリの調整**: 必要に応じて`project.config.json`のカテゴリを追加・変更

## バージョン追加

新しいバージョンが必要になった場合：

```bash
# 新しいバージョンを追加（前バージョンからコンテンツをコピー）
node scripts/create-version.js my-project v2

# 空の新バージョンを作成
node scripts/create-version.js my-project v2 --no-copy

# インタラクティブモードで作成
node scripts/create-version.js my-project v2 --interactive
```

## ドキュメント追加

個別のドキュメントファイルを追加する場合：

```bash
# 基本的な使用方法
node scripts/create-document.js my-project ja v1 guide "新しいページタイトル"

# インタラクティブモードで追加（推奨）
node scripts/create-document.js my-project ja v1 --interactive

# 英語版も同様に
node scripts/create-document.js my-project en v1 --interactive
```

インタラクティブモードでは既存のカテゴリ構造を確認しながら適切な場所にファイルを作成できるため推奨です。

## 注意事項

- このディレクトリを直接編集しない（テンプレートが変更される）
- 新しいプロジェクト作成後は、作成されたプロジェクトディレクトリで作業する
- テンプレートの改善が必要な場合は、このディレクトリを更新してから新しいプロジェクトを作成する
