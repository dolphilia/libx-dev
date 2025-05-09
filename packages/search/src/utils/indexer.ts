/**
 * 検索インデックス作成ユーティリティ
 * 
 * このモジュールは、ドキュメントコンテンツから検索インデックスを作成するための
 * ユーティリティ関数を提供します。
 */

export interface IndexableDocument {
  id: string;
  title: string;
  content: string;
  url: string;
  project: string;
  version: string;
  language: string;
  tags?: string[];
  lastUpdated?: Date;
}

export interface SearchIndex {
  documents: IndexableDocument[];
  index: Record<string, string[]>; // 単語 -> ドキュメントIDのマッピング
}

/**
 * テキストを検索用のトークンに分割します
 */
export function tokenizeText(text: string): string[] {
  // 基本的な分かち書き（実際の実装ではより高度な形態素解析などを使用）
  return text
    .toLowerCase()
    .replace(/[^\w\s\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/g, ' ') // 特殊文字を空白に置換（日本語文字は保持）
    .split(/\s+/)
    .filter(token => token.length > 1); // 1文字のトークンは除外
}

/**
 * ドキュメントから検索インデックスを作成します
 */
export function createSearchIndex(documents: IndexableDocument[]): SearchIndex {
  const index: Record<string, string[]> = {};
  
  documents.forEach(doc => {
    // タイトルと内容を結合してトークン化
    const text = `${doc.title} ${doc.content}`;
    const tokens = tokenizeText(text);
    
    // 各トークンをインデックスに追加
    tokens.forEach(token => {
      if (!index[token]) {
        index[token] = [];
      }
      
      // 重複を避ける
      if (!index[token].includes(doc.id)) {
        index[token].push(doc.id);
      }
    });
  });
  
  return {
    documents,
    index
  };
}

/**
 * 検索インデックスをJSON形式でエクスポートします
 */
export function exportSearchIndex(index: SearchIndex): string {
  return JSON.stringify(index);
}

/**
 * JSON形式の検索インデックスをインポートします
 */
export function importSearchIndex(json: string): SearchIndex {
  return JSON.parse(json) as SearchIndex;
}

/**
 * Algolia用のインデックスデータを作成します
 */
export function createAlgoliaRecords(documents: IndexableDocument[]): any[] {
  return documents.map(doc => ({
    objectID: doc.id,
    title: doc.title,
    content: doc.content,
    url: doc.url,
    project: doc.project,
    version: doc.version,
    language: doc.language,
    tags: doc.tags || [],
    lastUpdated: doc.lastUpdated ? doc.lastUpdated.toISOString() : null
  }));
}

/**
 * MeiliSearch用のインデックスデータを作成します
 */
export function createMeiliSearchRecords(documents: IndexableDocument[]): any[] {
  return documents.map(doc => ({
    id: doc.id,
    title: doc.title,
    content: doc.content,
    url: doc.url,
    project: doc.project,
    version: doc.version,
    language: doc.language,
    tags: doc.tags || [],
    lastUpdated: doc.lastUpdated ? doc.lastUpdated.toISOString() : null
  }));
}
