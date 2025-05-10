# Starlightスタイルのコンポーネント実装計画

このドキュメントでは、Astroの[Starlight](https://starlight.astro.build/)テーマで使用されているコンポーネントを参考に、このドキュメントサイトに実装するコンポーネントの計画と使用方法を説明します。

## 目次

1. [新規追加コンポーネント](#新規追加コンポーネント)
2. [実装計画](#実装計画)
3. [コンポーネントの使用方法](#コンポーネントの使用方法)
4. [統合計画](#統合計画)

## 新規追加コンポーネント

以下の新しいコンポーネントを追加します：

1. **ContentPanel**: コンテンツのコンテナコンポーネント
2. **Banner**: サイト全体に表示される通知バナー
3. **TableOfContents**: 目次コンポーネント
4. **EditLink**: GitHubなどでの編集リンク
5. **Pagination**: 前後のページへのナビゲーション
6. **Hero**: ランディングページ用のヒーローセクション
7. **AnchorHeading**: アンカーリンク付きの見出し
8. **ContentNotice**: コンテンツに関する通知（ドラフト状態など）
9. **TwoColumnContent**: 2カラムレイアウトのコンテンツ
10. **ThemeToggle**: ダークモード/ライトモード切り替えボタン

## 実装計画

### 1. ContentPanel

**説明**: コンテンツを適切な幅と余白で表示するコンテナコンポーネント。

**実装ステップ**:
- `packages/ui/src/components/ContentPanel.astro`を作成
- コンテンツの最大幅と余白を設定
- レスポンシブデザインに対応

### 2. Banner

**説明**: サイト全体に表示される通知バナー。重要なお知らせやアップデート情報などを表示するのに使用。

**実装ステップ**:
- `packages/ui/src/components/Banner.astro`を作成
- バナーの背景色、テキスト色を設定
- 閉じるボタンの実装（オプション）

### 3. TableOfContents

**説明**: 現在のページの見出しを表示する目次コンポーネント。

**実装ステップ**:
- `packages/ui/src/components/TableOfContents/`ディレクトリを作成
- `TableOfContents.astro`と`TableOfContentsList.astro`を実装
- 見出しレベルの設定オプションを追加
- アクティブな見出しのハイライト機能を実装

### 4. EditLink

**説明**: 現在のページをGitHubなどで編集するためのリンクコンポーネント。

**実装ステップ**:
- `packages/ui/src/components/EditLink.astro`を作成
- 編集URLの生成ロジックを実装
- アイコンとテキストのスタイリング

### 5. Pagination

**説明**: 前後のページへのナビゲーションリンクを表示するコンポーネント。

**実装ステップ**:
- `packages/ui/src/components/Pagination.astro`を作成
- 前後のページタイトルとURLを取得するロジックを実装
- レスポンシブデザインに対応

### 6. Hero

**説明**: ランディングページ用の大きなヒーローセクション。

**実装ステップ**:
- `packages/ui/src/components/Hero.astro`を作成
- タイトル、サブタイトル、アクションボタンを設定
- 背景画像やグラデーションのオプションを追加

### 7. AnchorHeading

**説明**: クリックでURLをコピーできるアンカーリンク付きの見出しコンポーネント。

**実装ステップ**:
- `packages/ui/src/components/AnchorHeading.astro`を作成
- 見出しレベル（h1〜h6）の動的設定
- アンカーリンクのアイコンとインタラクション実装

### 8. ContentNotice

**説明**: ドラフト状態や翻訳中などのコンテンツ状態を通知するコンポーネント。

**実装ステップ**:
- `packages/ui/src/components/ContentNotice.astro`を作成
- 複数の通知タイプ（ドラフト、翻訳中、非推奨など）をサポート
- アイコンと色分けによる視覚的区別

### 9. TwoColumnContent

**説明**: コンテンツを2カラムで表示するレイアウトコンポーネント。

**実装ステップ**:
- `packages/ui/src/components/TwoColumnContent.astro`を作成
- レスポンシブデザインに対応（モバイルでは1カラム）
- カラム幅の調整オプションを追加

### 10. ThemeToggle

**説明**: ダークモードとライトモードを切り替えるボタンコンポーネント。

**実装ステップ**:
- `packages/ui/src/components/ThemeToggle.astro`を作成
- ローカルストレージを使用したテーマ設定の保存
- アニメーション付きのトグルボタン実装

## コンポーネントの使用方法

### ContentPanel

コンテンツを適切な幅と余白で表示するためのコンテナコンポーネント。

```astro
---
import { ContentPanel } from '@docs/ui/components';
---

<ContentPanel>
  <h1>ページタイトル</h1>
  <p>ページコンテンツ...</p>
</ContentPanel>
```

### Banner

サイト全体に表示される通知バナー。

```astro
---
import { Banner } from '@docs/ui/components';
---

<Banner type="info">
  このドキュメントはベータ版です。フィードバックをお待ちしています。
</Banner>
```

オプション:
- `type`: `"info"` | `"warning"` | `"success"` | `"danger"` (デフォルト: `"info"`)
- `dismissible`: `boolean` - バナーを閉じるボタンを表示するかどうか (デフォルト: `false`)

### TableOfContents

現在のページの見出しを表示する目次コンポーネント。

```astro
---
import { TableOfContents } from '@docs/ui/components';

// 見出しデータの例
const headings = [
  { depth: 2, slug: 'introduction', text: '導入' },
  { depth: 2, slug: 'getting-started', text: '始め方' },
  { depth: 3, slug: 'installation', text: 'インストール' },
  { depth: 3, slug: 'configuration', text: '設定' },
  { depth: 2, slug: 'usage', text: '使用方法' }
];
---

<TableOfContents headings={headings} minLevel={2} maxLevel={3} />
```

オプション:
- `headings`: 見出しデータの配列（必須）
- `minLevel`: 表示する最小の見出しレベル (デフォルト: `2`)
- `maxLevel`: 表示する最大の見出しレベル (デフォルト: `3`)

### EditLink

現在のページをGitHubなどで編集するためのリンク。

```astro
---
import { EditLink } from '@docs/ui/components';

const githubUrl = 'https://github.com/yourusername/docs-astro/edit/main/';
const filePath = 'apps/sample-docs/src/content/docs/en/v1/guide/getting-started.mdx';
---

<EditLink url={`${githubUrl}${filePath}`} text="GitHubで編集" />
```

オプション:
- `url`: 編集ページのURL（必須）
- `text`: リンクテキスト (デフォルト: "GitHubで編集")

### Pagination

前後のページへのナビゲーション。

```astro
---
import { Pagination } from '@docs/ui/components';

const prevPage = {
  title: '導入',
  url: '/ja/v1/guide/introduction'
};

const nextPage = {
  title: '高度な使い方',
  url: '/ja/v1/guide/advanced'
};
---

<Pagination prev={prevPage} next={nextPage} />
```

オプション:
- `prev`: 前のページ情報 (オプション)
- `next`: 次のページ情報 (オプション)

### Hero

ランディングページ用のヒーローセクション。

```astro
---
import { Hero } from '@docs/ui/components';
---

<Hero
  title="プロジェクトドキュメント"
  tagline="複数のAstroプロジェクトをモノレポ構造で管理するドキュメントサイト"
  image={{
    src: '/hero-image.png',
    alt: 'プロジェクトのイメージ図'
  }}
>
  <div slot="actions">
    <a href="/ja/v1/guide/getting-started" class="button primary">始める</a>
    <a href="https://github.com/yourusername/docs-astro" class="button">GitHubを見る</a>
  </div>
</Hero>
```

オプション:
- `title`: ヒーローセクションのタイトル（必須）
- `tagline`: サブタイトル（オプション）
- `image`: 画像情報（オプション）
- `actions` スロット: アクションボタンを配置

### AnchorHeading

クリックでURLをコピーできるアンカーリンク付きの見出し。

```astro
---
import { AnchorHeading } from '@docs/ui/components';
---

<AnchorHeading level={2} id="getting-started">始め方</AnchorHeading>
```

オプション:
- `level`: 見出しレベル（1〜6）（必須）
- `id`: 見出しのID（必須）

### ContentNotice

コンテンツの状態を通知するコンポーネント。

```astro
---
import { ContentNotice } from '@docs/ui/components';
---

<ContentNotice type="draft">
  このページはドラフト状態です。内容が変更される可能性があります。
</ContentNotice>
```

オプション:
- `type`: `"draft"` | `"deprecated"` | `"wip"` | `"translation"` (デフォルト: `"info"`)

### TwoColumnContent

コンテンツを2カラムで表示するレイアウト。

```astro
---
import { TwoColumnContent } from '@docs/ui/components';
---

<TwoColumnContent>
  <div slot="left">
    <h2>左カラム</h2>
    <p>左側のコンテンツ...</p>
  </div>
  <div slot="right">
    <h2>右カラム</h2>
    <p>右側のコンテンツ...</p>
  </div>
</TwoColumnContent>
```

オプション:
- `leftWidth`: 左カラムの幅（CSS値、例: `"60%"`）(デフォルト: `"50%"`)
- `gap`: カラム間の間隔（CSS値、例: `"2rem"`）(デフォルト: `"1rem"`)

### ThemeToggle

ダークモードとライトモードを切り替えるボタン。

```astro
---
import { ThemeToggle } from '@docs/ui/components';
---

<ThemeToggle />
```

## 統合計画

1. 各コンポーネントを個別に実装
2. `packages/ui/src/components/index.ts`にエクスポート追加
3. DocLayoutとMainLayoutを更新して新コンポーネントを統合
4. スタイルの調整と統一
5. ドキュメントページでの使用例作成
