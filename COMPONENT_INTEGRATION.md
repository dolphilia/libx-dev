# Starlightスタイルコンポーネントの統合例

このドキュメントでは、新しく作成したStarlightスタイルのコンポーネントをDocLayoutに統合する例を示します。

## DocLayoutへの統合例

以下は、`apps/sample-docs/src/layouts/DocLayout.astro`ファイルに新しいコンポーネントを統合する例です：

```astro
---
import MainLayout from './MainLayout.astro';
import { 
  Sidebar, 
  ContentPanel, 
  TableOfContents, 
  Pagination, 
  EditLink 
} from '@docs/ui/components';
import { VersionSelector } from '@docs/versioning/components';
import { SearchBar, SearchResults } from '@docs/search/components';
import { translate } from '@docs/i18n/utils';
import type { LocaleKey } from '@docs/i18n/locales';

// 設定ファイルのインポート
import docsConfig from '../config/docs.config';
import versions from '../config/versions.config';
import { getSidebarAsync } from '../config/sidebar.config';

interface Props {
  title: string;
  lang: LocaleKey;
  version: string;
  // 見出しデータを追加
  headings?: Array<{ depth: number; slug: string; text: string; children: any[] }>;
  // 前後のページ情報を追加
  prev?: { title: string; url: string };
  next?: { title: string; url: string };
  // 編集URLを追加
  editUrl?: string;
}

const { 
  title, 
  lang: langProp, 
  version, 
  headings = [], 
  prev, 
  next,
  editUrl 
} = Astro.props;
const lang = langProp as LocaleKey;

// ベースパスの取得
const baseUrl = docsConfig.baseUrl;

// サイドバー項目の取得（非同期）
const sidebarItems = await getSidebarAsync(lang, version, baseUrl);

// 翻訳キーの定数化
const TRANSLATION_KEYS = {
  SEARCH_PLACEHOLDER: 'search.placeholder',
  DOCUMENTATION: 'docs.documentation'
} as const;

// 目次があるかどうか
const hasToc = headings.length > 0;
---

<MainLayout title={title} lang={lang} version={version} hasSidebar={true} hasToc={hasToc}>
  <div class="lg:sl-flex">
    <aside class="sidebar print:hidden">
      <div class="sidebar-pane">
        <div class="sidebar-content sl-flex">
          <div class="search-container">
            <SearchBar placeholder={translate(TRANSLATION_KEYS.SEARCH_PLACEHOLDER, lang)} />
            <SearchResults className="search-results" lang={lang} />
          </div>

          <VersionSelector 
            currentVersion={version}
            versions={versions}
            basePath={`${baseUrl}/${lang}`}
          />

          <Sidebar 
            items={sidebarItems} 
            title={translate(TRANSLATION_KEYS.DOCUMENTATION, lang)} 
          />
        </div>
      </div>
    </aside>
    
    {hasToc && (
      <aside class="right-sidebar-container print:hidden">
        <div class="right-sidebar">
          <div class="toc-container">
            <!-- 新しいTableOfContentsコンポーネントを使用 -->
            <TableOfContents headings={headings} lang={lang} />
          </div>
        </div>
      </aside>
    )}
    
    <div class="main-pane">
      <!-- ContentPanelコンポーネントを使用 -->
      <ContentPanel>
        <article class="sl-markdown-content">
          <slot />
        </article>
        
        <!-- 編集リンクを追加 -->
        {editUrl && <EditLink url={editUrl} />}
        
        <!-- ページネーションを追加 -->
        <Pagination prev={prev} next={next} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
      </ContentPanel>
    </div>
  </div>
</MainLayout>

<style>
  /* サイドバースタイル */
  .sidebar-pane {
    visibility: visible;
    position: fixed;
    z-index: var(--sl-z-index-menu);
    inset-block: var(--sl-nav-height) 0;
    inset-inline-start: 0;
    width: 100%;
    background-color: var(--sl-color-bg-sidebar);
    overflow-y: auto;
  }

  .sidebar-content {
    height: 100%;
    min-height: max-content;
    padding: 1rem var(--sl-sidebar-pad-x) 0;
    flex-direction: column;
    gap: 1rem;
  }

  .search-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .search-results {
    margin-top: 0.5rem;
  }

  /* 右サイドバー（目次）スタイル */
  .right-sidebar-container {
    display: none;
  }

  .right-sidebar {
    padding-top: var(--sl-nav-height);
    padding-inline: 1rem;
  }

  .toc-container {
    position: sticky;
    top: calc(var(--sl-nav-height) + 1rem);
  }

  /* メインコンテンツスタイル */
  .main-pane {
    width: 100%;
  }

  /* レスポンシブスタイル */
  @media (min-width: 50em) {
    .sidebar-pane {
      width: var(--sl-sidebar-width);
      border-inline-end: 1px solid var(--sl-color-hairline-shade);
    }

    .sidebar-content::after {
      content: '';
      padding-bottom: 1px;
    }
  }

  @media (min-width: 72rem) {
    .right-sidebar-container {
      display: block;
      order: 2;
      position: relative;
      width: calc(
        var(--sl-sidebar-width) + (100% - var(--sl-content-width) - var(--sl-sidebar-width)) / 2
      );
    }

    .right-sidebar {
      position: fixed;
      top: 0;
      border-inline-start: 1px solid var(--sl-color-hairline);
      width: 100%;
      height: 100vh;
      overflow-y: auto;
      scrollbar-width: none;
    }

    .main-pane {
      order: 1;
      width: calc(
        var(--sl-content-width) + (100% - var(--sl-content-width) - var(--sl-sidebar-width)) / 2
      );
    }
  }
</style>
```

## 使用方法

### 1. ページコンポーネントでの使用例

```astro
---
import DocLayout from '../../layouts/DocLayout.astro';

// ページのメタデータ
const title = "始め方ガイド";
const lang = "ja";
const version = "v1";

// 見出しデータ
const headings = [
  { depth: 2, slug: 'introduction', text: '導入', children: [] },
  { depth: 2, slug: 'installation', text: 'インストール', children: [
    { depth: 3, slug: 'npm', text: 'NPMを使用', children: [] },
    { depth: 3, slug: 'yarn', text: 'Yarnを使用', children: [] }
  ] },
  { depth: 2, slug: 'usage', text: '使用方法', children: [] }
];

// ナビゲーションリンク
const prev = {
  title: "はじめに",
  url: "/ja/v1/introduction"
};

const next = {
  title: "高度な使い方",
  url: "/ja/v1/advanced"
};

// 編集URL
const editUrl = "https://github.com/yourusername/docs-astro/edit/main/apps/sample-docs/src/content/docs/ja/v1/guide/getting-started.mdx";
---

<DocLayout 
  title={title} 
  lang={lang} 
  version={version}
  headings={headings}
  prev={prev}
  next={next}
  editUrl={editUrl}
>
  <h1>始め方ガイド</h1>
  
  <h2 id="introduction">導入</h2>
  <p>このガイドでは、プロジェクトの始め方について説明します。</p>
  
  <h2 id="installation">インストール</h2>
  <p>以下の方法でインストールできます。</p>
  
  <h3 id="npm">NPMを使用</h3>
  <pre><code>npm install @docs/ui</code></pre>
  
  <h3 id="yarn">Yarnを使用</h3>
  <pre><code>yarn add @docs/ui</code></pre>
  
  <h2 id="usage">使用方法</h2>
  <p>インストール後、以下のようにコンポーネントをインポートして使用できます。</p>
</DocLayout>
```

## 今後の実装予定コンポーネント

STARLIGHT_COMPONENTS.mdファイルに記載されている通り、以下のコンポーネントも今後実装予定です：

1. **Banner** - サイト全体に表示される通知バナー
2. **Hero** - ランディングページ用のヒーローセクション
3. **AnchorHeading** - アンカーリンク付きの見出し
4. **ContentNotice** - コンテンツに関する通知（ドラフト状態など）
5. **TwoColumnContent** - 2カラムレイアウトのコンテンツ
6. **ThemeToggle** - ダークモード/ライトモード切り替えボタン

また、既存のコンポーネントについても、Starlightのデザインに近づけるための改善を進めていきます。
