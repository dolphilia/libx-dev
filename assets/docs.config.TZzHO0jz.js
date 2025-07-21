const docsConfig = {
  // プロジェクト名
  name: "Sample Docs",
  // プロジェクトの説明
  description: "Sample documentation for the docs-astro project",
  // GitHub Pagesのベースパス
  baseUrl: "/docs/sample-docs",
  // サポートされている言語
  supportedLangs: ["en", "ja"],
  // デフォルト言語
  defaultLang: "en",
  // リポジトリURL
  repository: "https://github.com/dolphilia/docs-astro-dev",
  // 検索インデックスのパス
  searchIndexPath: "/search",
  // ドキュメントのパス
  docsPath: "/docs",
  // 自動サイドバー生成を使用するかどうか
  useAutoSidebar: false,
  // 編集リンクを表示するかどうか
  showEditLink: true,
  // 編集リンクのベースURL
  editLinkBase: "https://github.com/dolphilia/docs-astro-dev/edit/main/apps/sample-docs/src/content/docs"
};

export { docsConfig as d };
