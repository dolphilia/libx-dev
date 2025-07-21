/**
 * 自動ページネーション生成ユーティリティ
 * サイドバー設定から自動的にページネーション情報を生成します
 */

export interface PageLink {
  title: string;
  url: string;
}

export interface PaginationInfo {
  prev?: PageLink;
  next?: PageLink;
}

export interface SidebarItem {
  title: string;
  items: {
    title: string;
    href: string;
  }[];
}

/**
 * サイドバー構造をフラット化して、順序付きページリストを作成します
 * @param sidebarItems サイドバー項目の配列
 * @returns フラット化されたページリストの配列
 */
function flattenSidebarItems(sidebarItems: SidebarItem[]): Array<{ title: string; href: string }> {
  const flatItems: Array<{ title: string; href: string }> = [];
  
  for (const section of sidebarItems) {
    for (const item of section.items) {
      flatItems.push({
        title: item.title,
        href: item.href
      });
    }
  }
  
  return flatItems;
}

/**
 * ファイル名から順序番号を抽出します
 * @param filename ファイル名（例: "01-getting-started"）
 * @returns 順序番号（例: 1）、見つからない場合は999
 */
function extractOrderFromFilename(filename: string): number {
  const match = filename.match(/^(\d+)-/);
  return match ? parseInt(match[1], 10) : 999;
}

/**
 * URLから正規化されたパスを取得します
 * @param url 正規化対象のURL
 * @returns 正規化されたパス
 */
function normalizeUrl(url: string): string {
  // URLオブジェクトを作成して、pathnameを取得
  try {
    const urlObj = new URL(url, 'http://dummy.com');
    return urlObj.pathname.replace(/\/$/, '') || '/'; // 末尾のスラッシュを削除
  } catch {
    // URLが相対パスの場合の処理
    return url.replace(/\/$/, '') || '/';
  }
}

/**
 * 現在のページのスラッグをベースURLを考慮して正規化します
 * @param currentSlug 現在のページのスラッグ
 * @param baseUrl ベースURL
 * @returns 正規化されたスラッグ
 */
function normalizeCurrentSlug(currentSlug: string, baseUrl: string): string {
  // currentSlugが既にbaseUrlを含んでいる場合は、それを削除
  if (currentSlug.startsWith(baseUrl)) {
    return currentSlug.substring(baseUrl.length);
  }
  return currentSlug;
}

/**
 * サイドバー設定から自動的にページネーション情報を生成します
 * ファイル名ベースの順序をサポートしています
 * @param currentSlug 現在のページのスラッグ（例: "/en/v1/guide/01-getting-started"）
 * @param sidebarItems サイドバー項目の配列
 * @param baseUrl ベースURL（例: "/docs/sample-docs"）
 * @returns ページネーション情報（前のページ・次のページ）
 */
export function generatePagination(
  currentSlug: string,
  sidebarItems: SidebarItem[],
  baseUrl: string = ''
): PaginationInfo {
  // サイドバー項目をフラット化
  const flatItems = flattenSidebarItems(sidebarItems);
  
  // 現在のページのスラッグを正規化
  const normalizedCurrentSlug = normalizeCurrentSlug(currentSlug, baseUrl);
  
  // 現在のページのインデックスを見つける
  let currentIndex = -1;
  for (let i = 0; i < flatItems.length; i++) {
    const itemPath = normalizeUrl(flatItems[i].href);
    const currentPath = normalizeUrl(normalizedCurrentSlug);
    
    // ファイル名の番号接頭辞を考慮した比較
    const itemPathNormalized = itemPath.replace(/\/\d+-([^\/]+)$/, '/$1');
    const currentPathNormalized = currentPath.replace(/\/\d+-([^\/]+)$/, '/$1');
    
    if (itemPath === currentPath || itemPathNormalized === currentPathNormalized) {
      currentIndex = i;
      break;
    }
  }
  
  // 現在のページが見つからない場合は空のページネーション情報を返す
  if (currentIndex === -1) {
    console.warn(`[generatePagination] Current page not found in sidebar: ${currentSlug}`);
    console.warn(`[generatePagination] Available pages:`, flatItems.map(item => normalizeUrl(item.href)));
    return {};
  }
  
  const result: PaginationInfo = {};
  
  // 前のページがある場合
  if (currentIndex > 0) {
    const prevItem = flatItems[currentIndex - 1];
    result.prev = {
      title: prevItem.title,
      url: prevItem.href
    };
  }
  
  // 次のページがある場合
  if (currentIndex < flatItems.length - 1) {
    const nextItem = flatItems[currentIndex + 1];
    result.next = {
      title: nextItem.title,
      url: nextItem.href
    };
  }
  
  return result;
}

/**
 * 手動設定のページネーション情報と自動生成されたページネーション情報を統合します
 * 手動設定が存在する場合はそれを優先し、存在しない場合は自動生成を使用します
 * @param manualPrev 手動設定の前のページ情報
 * @param manualNext 手動設定の次のページ情報
 * @param autoPagination 自動生成されたページネーション情報
 * @returns 統合されたページネーション情報
 */
export function mergePagination(
  manualPrev: PageLink | undefined,
  manualNext: PageLink | undefined,
  autoPagination: PaginationInfo
): PaginationInfo {
  return {
    prev: manualPrev || autoPagination.prev,
    next: manualNext || autoPagination.next
  };
}

/**
 * デバッグ用：フラット化されたページリストを出力します
 * @param sidebarItems サイドバー項目の配列
 */
export function debugFlattenedItems(sidebarItems: SidebarItem[]): void {
  const flatItems = flattenSidebarItems(sidebarItems);
  console.log('[DEBUG] Flattened sidebar items:');
  flatItems.forEach((item, index) => {
    console.log(`  ${index}: ${item.title} -> ${item.href}`);
  });
}