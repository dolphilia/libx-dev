# パフォーマンス改善計画

## 現状分析

Astroプロジェクトのパフォーマンス測定結果から、以下の問題が確認されています：

- トップページ: 約1秒の表示時間
- ドキュメントページ: 平均2秒以上の表示時間
- 特に `extended-icons-example` などのページでは2.6秒以上かかっている

## 問題の原因

コード調査の結果、以下の要因がパフォーマンスに影響していると特定されました：

### 1. アイコンライブラリの非効率な使用

- 完了

### 2. サイドバーの自動生成処理

- `docsConfig.useAutoSidebar` が `true` に設定されている
- 各ページ表示時に以下の処理が実行される：
  - `getCollection('docs')` でコンテンツコレクションからドキュメントを取得
  - カテゴリごとの整理と順序付けの処理
  - これらの処理はページ表示ごとに実行される

### 3. 目次（TableOfContents）の処理

- カスタム要素（`starlight-toc`）を使用
- スクロールイベントとリサイズイベントにリスナーを登録
- ページ内の見出し要素を取得して処理

### 4. MDXのレンダリング処理

- `entry.render()` を使用したMDXコンテンツの処理
- シンタックスハイライト（Shiki）の適用

## 改善計画

### フェーズ1: アイコンの最適化（優先度: 高）

- 完了

### フェーズ2: サイドバー生成の最適化（優先度: 中）

1. **ビルド時のサイドバー生成**
   - サイドバーをビルド時に生成し、結果をJSONファイルとして保存
   - 実装手順:
     ```javascript
     // scripts/build-sidebar.js
     const fs = require('fs');
     const path = require('path');
     const { getCollection } = require('astro:content');
     
     async function buildSidebar() {
       // サポートされている言語とバージョンの組み合わせごとにサイドバーを生成
       const langs = ['en', 'ja'];
       const versions = ['v1', 'v2'];
       
       for (const lang of langs) {
         for (const version of versions) {
           const sidebar = await generateSidebarForVersion(lang, version);
           
           // JSONファイルとして保存
           fs.writeFileSync(
             path.join(__dirname, `../public/sidebar-${lang}-${version}.json`),
             JSON.stringify(sidebar)
           );
         }
       }
     }
     
     // ここに既存のサイドバー生成ロジックを移植
     async function generateSidebarForVersion(lang, version) {
       // 既存のgetAutoSidebar関数のロジックを使用
     }
     
     buildSidebar();
     ```

2. **サイドバー設定の変更**
   - `useAutoSidebar` を `false` に設定
   - 事前生成したサイドバーを使用するように修正
   - 実装手順:
     ```typescript
     // apps/sample-docs/src/config/docs.config.ts
     const docsConfig = {
       // 他の設定
       useAutoSidebar: false,
       // 他の設定
     };
     
     export default docsConfig;
     ```

     ```typescript
     // apps/sample-docs/src/config/sidebar.config.ts の修正
     export async function getSidebarAsync(lang: LocaleKey, version: string, baseUrl: string): Promise<SidebarItem[]> {
       try {
         // 事前生成したJSONファイルを読み込む
         const response = await fetch(`/sidebar-${lang}-${version}.json`);
         if (response.ok) {
           return await response.json();
         }
       } catch (error) {
         console.error('Failed to load sidebar from JSON:', error);
       }
       
       // フォールバック: 手動定義のサイドバーを返す
       return getManualSidebar(lang, version, baseUrl);
     }
     ```

### フェーズ3: コンポーネントの最適化（優先度: 中）

1. **TableOfContentsの最適化**
   - スクロールイベントの最適化（デバウンス処理の追加）
   - 実装手順:
     ```javascript
     // TableOfContents.astroのスクリプト部分を修正
     <script>
     class StarlightTOC extends HTMLElement {
       constructor() {
         super();
         
         // 現在アクティブな見出しを追跡
         let activeHeading = null;
         
         // 見出し要素を取得
         const minLevel = parseInt(this.dataset.minH || '2');
         const maxLevel = parseInt(this.dataset.maxH || '3');
         const headingSelectors = Array.from(
           { length: maxLevel - minLevel + 1 },
           (_, i) => `h${minLevel + i}`
         ).join(',');
         
         const headings = Array.from(
           document.querySelectorAll(headingSelectors)
         );
         
         // 目次内のリンクを取得
         const links = Array.from(
           this.querySelectorAll('a')
         );
         
         // デバウンス関数
         function debounce(func, wait) {
           let timeout;
           return function executedFunction(...args) {
             const later = () => {
               clearTimeout(timeout);
               func(...args);
             };
             clearTimeout(timeout);
             timeout = setTimeout(later, wait);
           };
         }
         
         // スクロール時に現在の見出しを更新（デバウンス処理を追加）
         const updateActiveHeading = debounce(() => {
           // 既存の処理
         }, 100); // 100msのデバウンス
         
         // スクロールイベントリスナーを登録
         window.addEventListener('scroll', updateActiveHeading, { passive: true });
         
         // ウィンドウサイズ変更時にも更新（デバウンス処理を追加）
         window.addEventListener('resize', debounce(() => {
           updateActiveHeading();
         }, 200), { passive: true });
         
         // ページ読み込み完了時に実行
         window.addEventListener('load', updateActiveHeading);
         
         // 初期化時に一度実行
         setTimeout(updateActiveHeading, 100);
       }
     }
     
     // カスタム要素を登録
     customElements.define('starlight-toc', StarlightTOC);
     </script>
     ```

2. **コンポーネントの遅延読み込み**
   - 重いコンポーネントを必要になるまで読み込まない
   - 実装手順:
     ```astro
     <!-- DocLayout.astroの修正 -->
     ---
     // 他のインポート
     ---
     
     <MainLayout title={title} lang={lang} version={version} hasSidebar={true} hasToc={hasToc} showSearch={true} showVersionSelector={true}>
       <div class="doc-layout-container">
         <aside class="sidebar-column print:hidden">
           <div class="sidebar-content">
             <Sidebar 
               items={markedSidebarItems} 
               title={translate(TRANSLATION_KEYS.DOCUMENTATION, lang)} 
             />
           </div>
         </aside>
         
         <div class="main-column">
           <div class="content-panel">
             <article class="sl-markdown-content">
               <slot />
             </article>
           </div>
         </div>
         
         {hasToc && (
           <aside class="toc-column print:hidden">
             <div class="toc-content">
               {Astro.slots.has('toc') ? (
                 <slot name="toc" />
               ) : (
                 <div id="toc-placeholder">
                   <script>
                     // 画面が表示された後に目次を読み込む
                     document.addEventListener('DOMContentLoaded', () => {
                       setTimeout(() => {
                         const tocPlaceholder = document.getElementById('toc-placeholder');
                         if (tocPlaceholder) {
                           // 目次コンポーネントを動的に読み込む
                           import('/components/TableOfContents.js').then(module => {
                             const TableOfContents = module.default;
                             // コンポーネントをレンダリング
                             // 実際の実装はより複雑になる可能性があります
                           });
                         }
                       }, 100);
                     });
                   </script>
                 </div>
               )}
             </div>
           </aside>
         )}
       </div>
     </MainLayout>
     ```

### フェーズ4: ビルド設定の最適化（優先度: 低）

1. **Vite設定の最適化**
   - バンドルサイズを最適化
   - 実装手順:
     ```javascript
     // astro.config.mjs
     export default defineConfig({
       // 既存の設定
       vite: {
         // 既存の設定
         build: {
           // 既存の設定
           rollupOptions: {
             output: {
               // 既存の設定
               manualChunks: {
                 // 共通コンポーネントを別チャンクに分割
                 'ui-core': [
                   '@docs/ui/src/components/index.ts',
                 ],
                 'icons': [
                   '@docs/ui/src/components/icons/index.ts',
                 ],
                 'fontawesome': [
                   '@fortawesome/fontawesome-svg-core',
                   '@fortawesome/free-brands-svg-icons',
                   '@fortawesome/free-regular-svg-icons',
                   '@fortawesome/free-solid-svg-icons',
                 ],
                 'lucide': [
                   '@lucide/astro',
                 ],
               },
             }
           },
           // コード分割の最適化
           chunkSizeWarningLimit: 1000,
         },
         // 最適化設定
         optimizeDeps: {
           include: [
             '@fortawesome/fontawesome-svg-core',
             '@lucide/astro',
           ],
         },
       },
     });
     ```

2. **キャッシュ戦略の実装**
   - ブラウザキャッシュを活用するための設定
   - 実装手順:
     ```javascript
     // astro.config.mjs
     export default defineConfig({
       // 既存の設定
       vite: {
         // 既存の設定
         build: {
           // 既存の設定
           rollupOptions: {
             output: {
               // アセットのファイル名にハッシュを含める
               assetFileNames: 'assets/[name].[hash].[ext]',
               chunkFileNames: 'assets/[name].[hash].js',
               entryFileNames: 'assets/[name].[hash].js',
             }
           },
         },
       },
     });
     ```

## 期待される効果

各フェーズの改善により、以下の効果が期待されます：

1. **フェーズ1（アイコンの最適化）**
   - `extended-icons-example.mdx` などのアイコンを多用するページの表示時間: **2.6秒 → 1.0秒以下**
   - アイコンライブラリのバンドルサイズ削減: **約70%削減**

2. **フェーズ2（サイドバー生成の最適化）**
   - ドキュメントページの表示時間: **平均2秒 → 1.5秒以下**
   - サーバーサイドの処理時間削減: **約50%削減**

3. **フェーズ3（コンポーネントの最適化）**
   - ページの初期表示時間: **約20%改善**
   - スクロール時のパフォーマンス: **スムーズなスクロール体験**

4. **フェーズ4（ビルド設定の最適化）**
   - 全体的なページ読み込み時間: **約10%改善**
   - キャッシュ効率の向上: **繰り返し訪問時の読み込み時間を大幅に削減**

## 実装スケジュール

| フェーズ | 作業内容 | 予定期間 | 担当者 |
|---------|---------|---------|--------|
| 1 | アイコンの最適化 | 1週間 | フロントエンド担当 |
| 2 | サイドバー生成の最適化 | 3日間 | バックエンド担当 |
| 3 | コンポーネントの最適化 | 4日間 | フロントエンド担当 |
| 4 | ビルド設定の最適化 | 2日間 | インフラ担当 |

## 測定と検証

各フェーズの実装後、以下の方法でパフォーマンスを測定し、改善効果を検証します：

1. **開発環境での測定**
   - Astroの開発サーバーログによる表示時間の測定
   - 改善前後の比較

2. **ブラウザ開発ツールによる測定**
   - Lighthouse スコアの測定
   - ネットワークタブでのリソース読み込み時間の測定
   - パフォーマンスタブでのレンダリング時間の測定

3. **ユーザー体験の検証**
   - 実際のユーザーによる体感速度の評価
   - A/Bテストによる改善効果の検証

## まとめ

この改善計画を実施することで、Astroプロジェクトのパフォーマンスを大幅に向上させることができます。特にアイコンの最適化とサイドバー生成の最適化は、即効性のある改善が期待できます。段階的に実装を進め、各フェーズごとに効果を測定しながら、必要に応じて計画を調整していくことをお勧めします。
