# ドキュメントサイトへの新しい言語追加ガイド

このガイドでは、既存のドキュメントプロジェクトに新しい言語を追加する方法を詳しく説明します。実際のテストプロジェクト（韓国語の追加）を通じて検証された手順を示します。

## 前提条件

- 既存のドキュメントプロジェクトが正常に動作していること
- 追加したい言語が`packages/i18n/src/locales/`でサポートされていること
- 基本的なMarkdownとMDXの知識

## サポートされている言語の確認

まず、追加したい言語がシステムでサポートされているかを確認してください。

### 現在サポートされている言語

`packages/i18n/src/locales/index.ts`で以下の言語がサポートされています：

```typescript
export const supportedLocales: LocaleKey[] = [
  'en',     // English
  'ja',     // 日本語  
  'zh-Hans', // 简体中文
  'zh-Hant', // 繁體中文
  'es',     // Español
  'pt-BR',  // Português (Brasil)
  'ko',     // 한국어
  'de',     // Deutsch
  'fr',     // Français
  'ru',     // Русский
  'ar',     // العربية
  'id',     // Bahasa Indonesia
  'tr',     // Türkçe
  'hi',     // हिन्दी
  'vi'      // Tiếng Việt
];
```

## ステップ1: プロジェクト設定の更新

### 1.1 基本言語設定

`apps/[project-name]/src/config/project.config.json`を編集し、新しい言語を追加します。

```json
{
  "basic": {
    "baseUrl": "/docs/your-project",
    "supportedLangs": [
      "en",
      "ja",
      "ko"  // 新しい言語を追加
    ],
    "defaultLang": "en"
  }
}
```

### 1.2 言語別翻訳情報の追加

同じファイルの`translations`セクションに新しい言語の設定を追加します：

```json
{
  "translations": {
    "en": {
      "displayName": "Your Project",
      "displayDescription": "Description in English",
      "categories": {
        "guide": "Guide"
      }
    },
    "ja": {
      "displayName": "あなたのプロジェクト",
      "displayDescription": "日本語の説明",
      "categories": {
        "guide": "ガイド"
      }
    },
    "ko": {
      "displayName": "당신의 프로젝트",
      "displayDescription": "한국어 설명",
      "categories": {
        "guide": "가이드"
      }
    }
  }
}
```

### 翻訳設定のポイント

- `displayName`: プロジェクトの表示名
- `displayDescription`: プロジェクトの説明文
- `categories`: サイドバーで使用されるカテゴリ名の翻訳

## ステップ2: トップページ（top-page）への言語サポート追加

**重要**: 新しい言語を追加する際は、個別プロジェクトだけでなく、システム全体で整合性を保つためにトップページ（top-page）でもサポートする必要があります。

### 2.1 top-page設定ファイルの更新

`apps/top-page/src/config/projects.config.json`を編集し、以下を追加します：

```json
{
  "siteConfig": {
    "supportedLangs": [
      "en",
      "ja",
      "ko"  // 新しい言語を追加
    ]
  },
  "content": {
    "siteDescription": {
      "en": "Documentation site built with Astro",
      "ja": "Astroで構築されたドキュメントサイト",
      "ko": "Astro로 구축된 문서 사이트"  // 韓国語の説明を追加
    },
    "heroTitle": {
      "en": "Documentation Hub",
      "ja": "ドキュメントハブ",
      "ko": "문서 허브"  // 韓国語のタイトルを追加
    },
    "heroDescription": {
      "en": "Find all the documentation you need in one place",
      "ja": "必要なすべてのドキュメントを一箇所で見つけることができます",
      "ko": "필요한 모든 문서를 한 곳에서 찾을 수 있습니다"  // 韓国語の説明を追加
    }
  }
}
```

### 2.2 なぜtop-pageの更新が必要か

個別プロジェクトで新しい言語を追加した際、ドキュメントページのヘッダーにある「Libx」リンクは`/${lang}`（例：`/ko`）を指します。しかし、top-pageで該当言語がサポートされていない場合、404エラーが発生します。

**問題のあるリンクの例**:
- 韓国語ドキュメントページ → 「Libx」クリック → `/ko` → 404エラー

**修正後**:
- 韓国語ドキュメントページ → 「Libx」クリック → `/ko` → 韓国語トップページ表示

## ステップ3: 言語セレクターの更新

### 3.1 言語名とフラグの追加

`apps/[project-name]/src/components/LanguageSelector.astro`を編集し、新しい言語の表示名とフラグを追加します：

```typescript
const LANG_NAMES: Record<string, string> = {
  en: 'English',
  ja: '日本語',
  ko: '한국어'  // 追加
};

const LANG_FLAGS: Record<string, string> = {
  en: '🇺🇸',
  ja: '🇯🇵',
  ko: '🇰🇷'  // 追加
};
```

### 3.2 フラグの選択基準

- できるだけその言語の主要な国の国旗を使用
- 地域方言がある場合（例：pt-BR）は、対応する地域の国旗を使用

## ステップ4: ディレクトリ構造の作成

### 4.1 基本ディレクトリの作成

新しい言語用のディレクトリ構造を作成します：

```bash
mkdir -p apps/[project-name]/src/content/docs/ko/v1/01-guide
```

### 4.2 ディレクトリ構造の確認

作成後、以下のような構造になるはずです：

```
src/content/docs/
├── en/
│   └── v1/
│       └── 01-guide/
├── ja/
│   └── v1/
│       └── 01-guide/
└── ko/          # 新しく追加
    └── v1/
        └── 01-guide/
```

## ステップ5: コンテンツの作成

### 5.1 基本ドキュメントの作成

既存の言語（英語または日本語）からベースとなるドキュメントをコピーし、新しい言語に翻訳します：

```mdx
---
title: "새로운 언어로 작성된 제목"
description: "새로운 언어로 작성된 설명"
---

# 새로운 언어로 작성된 제목

새로운 언어로 작성된 내용...
```

### 5.2 フロントマターの重要性

各MDXファイルには以下の情報が必要です：

- `title`: ページのタイトル
- `description`: ページの説明（SEOに使用）

### 5.3 ファイル命名規則

既存のファイルと同じ命名規則に従います：

```
01-getting-started.mdx
02-installation.mdx
03-configuration.mdx
```

番号プレフィックスはサイドバーの順序を決定します。

## ステップ6: テストと検証

### 6.1 個別プロジェクトのビルドテスト

```bash
cd apps/[project-name]
pnpm build
```

### 6.2 統合ビルドのテスト

```bash
cd /path/to/docs-astro-dev
pnpm build
```

### 6.3 開発サーバーでの確認

```bash
cd apps/[project-name]
pnpm dev
```

ブラウザで以下を確認：

- 新しい言語のページが正しく表示されること
- 言語切り替え機能が動作すること
- サイドバーが適切に生成されること
- **重要**: ヘッダーの「Libx」リンクが正しく動作すること（`/${lang}`に404エラーなくアクセスできる）

## トラブルシューティング

### よくある問題と解決方法

#### 問題1: ビルドエラー「Module not found」

**原因**: `packages/i18n`でサポートされていない言語コードを使用している

**解決方法**: `packages/i18n/src/locales/index.ts`でサポートされている言語コードを確認し、正しいコードを使用する

#### 問題2: 言語切り替えが動作しない

**原因**: `LanguageSelector.astro`に言語設定が追加されていない

**解決方法**: `LANG_NAMES`と`LANG_FLAGS`に新しい言語を追加する

#### 問題3: サイドバーが表示されない

**原因**: MDXファイルのフロントマターが不適切

**解決方法**: `title`と`description`が正しく設定されていることを確認する

#### 問題4: ヘッダーの「Libx」リンクが404エラーになる 🆕

**原因**: top-pageで新しい言語がサポートされていない

**解決方法**: `apps/top-page/src/config/projects.config.json`の`supportedLangs`に新しい言語を追加し、対応する翻訳コンテンツを追加する

#### 問題5: 多言語テキストが文字化けする

**原因**: ファイルエンコーディングの問題

**解決方法**: ファイルがUTF-8で保存されていることを確認する

## ベストプラクティス

### コンテンツ作成のベストプラクティス

1. **一貫性の維持**
   - 既存の言語版と同じ構造とナビゲーションを維持
   - 同じトピックを同じ順序で配置

2. **文化的配慮**
   - 対象言語の文化に適した例や表現を使用
   - 地域固有の情報がある場合は適切に修正

3. **技術用語の処理**
   - 広く受け入れられている技術用語はそのまま使用
   - 必要に応じて括弧内に原語を併記

### メンテナンスのベストプラクティス

1. **定期的な同期**
   - 他の言語でコンテンツが更新された際は、新しい言語でも対応する更新を行う

2. **バージョン管理**
   - 新しいバージョンを追加する際は、全ての言語で同様の構造を維持

3. **品質管理**
   - 翻訳の品質を定期的にレビューする
   - ネイティブスピーカーによるチェックを推奨

## 自動化の可能性

### スクリプトによる自動化

将来的に以下のような自動化が可能です：

```bash
# 新しい言語用のスクリプト（今後実装予定）
node scripts/add-language.js [project-name] [language-code] [display-name]

# 例
node scripts/add-language.js my-docs ko "한국어"
```

### 自動翻訳ツールとの連携

- Google Translate API
- DeepL API
- GitHub Copilot

などのツールを使用した半自動翻訳システムの構築も検討できます。

## チェックリスト

新しい言語を追加する際は、以下のチェックリストを使用してください：

### 設定ファイル
- [ ] `project.config.json`の`supportedLangs`に言語コード追加
- [ ] `project.config.json`の`translations`セクションに言語設定追加
- [ ] **重要**: `apps/top-page/src/config/projects.config.json`の`supportedLangs`に言語コード追加
- [ ] **重要**: top-pageの翻訳コンテンツ追加（`siteDescription`、`heroTitle`、`heroDescription`）
- [ ] `LanguageSelector.astro`の`LANG_NAMES`に言語名追加
- [ ] `LanguageSelector.astro`の`LANG_FLAGS`にフラグ追加

### ディレクトリ構造
- [ ] 言語ディレクトリ作成（`src/content/docs/[lang]/`）
- [ ] バージョンディレクトリ作成（例：`v1/`）
- [ ] 適切なカテゴリディレクトリ作成（例：`01-guide/`）

### コンテンツ
- [ ] 基本ドキュメントファイル作成
- [ ] フロントマター適切に設定（`title`、`description`）
- [ ] コンテンツを対象言語に翻訳

### テスト
- [ ] 個別プロジェクトビルド成功
- [ ] 統合ビルド成功
- [ ] 開発サーバーでページ表示確認
- [ ] 言語切り替え機能確認
- [ ] サイドバー生成確認
- [ ] **重要**: ヘッダーの「Libx」リンクが404エラーなく動作することを確認

### 品質確認
- [ ] 翻訳内容の品質確認
- [ ] 文化的適合性確認
- [ ] リンクと内部参照の修正
- [ ] 最終レビュー完了

## 結論

このガイドに従うことで、ドキュメントサイトに新しい言語を安全かつ確実に追加することができます。韓国語の追加テストを通じて検証されたこの手順は、他の言語についても同様に適用できます。

定期的なメンテナンスと品質管理を行い、多言語ドキュメントサイトの価値を最大化してください。