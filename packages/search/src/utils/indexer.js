/**
 * 検索インデックス作成ユーティリティ
 * 
 * このモジュールは、ドキュメントコンテンツから検索インデックスを作成するための
 * ユーティリティ関数を提供します。
 */

/**
 * テキストを検索用のトークンに分割します
 */
export function tokenizeText(text) {
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
export function createSearchIndex(documents) {
  const index = {};
  
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
export function exportSearchIndex(index) {
  return JSON.stringify(index);
}

/**
 * JSON形式の検索インデックスをインポートします
 */
export function importSearchIndex(json) {
  return JSON.parse(json);
}

/**
 * Algolia用のインデックスデータを作成します
 */
export function createAlgoliaRecords(documents) {
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
export function createMeiliSearchRecords(documents) {
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
