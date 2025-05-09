/**
 * 検索ユーティリティ
 * 
 * このモジュールは、検索インデックスを使用してドキュメントを検索するための
 * ユーティリティ関数を提供します。
 */

import { tokenizeText } from './indexer.js';

/**
 * 検索インデックスを使用してドキュメントを検索します
 */
export function search(
  index,
  query,
  options = {}
) {
  const {
    limit = 10,
    offset = 0,
    language,
    project,
    version,
    tags
  } = options;
  
  // クエリをトークン化
  const queryTokens = tokenizeText(query);
  
  if (queryTokens.length === 0) {
    return [];
  }
  
  // 各ドキュメントのスコアを計算
  const scores = {};
  
  queryTokens.forEach(token => {
    const matchingDocIds = index.index[token] || [];
    
    matchingDocIds.forEach(docId => {
      if (!scores[docId]) {
        scores[docId] = 0;
      }
      
      // 単純なTF-IDFスコアリング
      // トークンが少ないドキュメントほど高スコア
      scores[docId] += 1 / (matchingDocIds.length || 1);
    });
  });
  
  // フィルタリング
  let results = index.documents
    .filter(doc => {
      // ドキュメントIDがスコアに含まれているか
      if (!scores[doc.id]) {
        return false;
      }
      
      // 言語フィルタ
      if (language && doc.language !== language) {
        return false;
      }
      
      // プロジェクトフィルタ
      if (project && doc.project !== project) {
        return false;
      }
      
      // バージョンフィルタ
      if (version && doc.version !== version) {
        return false;
      }
      
      // タグフィルタ
      if (tags && tags.length > 0) {
        if (!doc.tags || !tags.some(tag => doc.tags?.includes(tag))) {
          return false;
        }
      }
      
      return true;
    })
    .map(doc => ({
      document: doc,
      score: scores[doc.id],
      highlights: highlightMatches(doc, queryTokens)
    }))
    .sort((a, b) => b.score - a.score);
  
  // ページネーション
  results = results.slice(offset, offset + limit);
  
  return results;
}

/**
 * 検索結果のハイライトを生成します
 */
function highlightMatches(
  doc,
  queryTokens
) {
  const highlights = {};
  
  // タイトルのハイライト
  let title = doc.title;
  queryTokens.forEach(token => {
    const regex = new RegExp(`(${escapeRegExp(token)})`, 'gi');
    title = title.replace(regex, '<mark>$1</mark>');
  });
  
  if (title !== doc.title) {
    highlights.title = title;
  }
  
  // コンテンツのハイライト
  // コンテンツが長い場合は、マッチした部分の周辺のみを抽出
  const contentLowerCase = doc.content.toLowerCase();
  let bestPosition = -1;
  let bestToken = '';
  
  // 最も関連性の高い位置を見つける
  queryTokens.forEach(token => {
    const position = contentLowerCase.indexOf(token);
    if (position !== -1 && (bestPosition === -1 || position < bestPosition)) {
      bestPosition = position;
      bestToken = token;
    }
  });
  
  if (bestPosition !== -1) {
    // 抽出する範囲を決定
    const contextLength = 100;
    const start = Math.max(0, bestPosition - contextLength);
    const end = Math.min(doc.content.length, bestPosition + bestToken.length + contextLength);
    
    let excerpt = doc.content.substring(start, end);
    
    // 先頭と末尾に省略記号を追加
    if (start > 0) {
      excerpt = '...' + excerpt;
    }
    
    if (end < doc.content.length) {
      excerpt = excerpt + '...';
    }
    
    // ハイライト
    queryTokens.forEach(token => {
      const regex = new RegExp(`(${escapeRegExp(token)})`, 'gi');
      excerpt = excerpt.replace(regex, '<mark>$1</mark>');
    });
    
    highlights.content = excerpt;
  }
  
  return highlights;
}

/**
 * 正規表現のエスケープ
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Algoliaを使用して検索を実行します
 */
export async function searchWithAlgolia(
  indexName,
  query,
  options = {}
) {
  // 実際の実装ではAlgoliaクライアントを使用
  console.log(`Searching "${query}" in Algolia index "${indexName}" with options:`, options);
  
  // ダミーの結果を返す
  return [
    {
      document: {
        id: 'algolia-1',
        title: 'Algolia検索結果1',
        content: 'これはAlgoliaからの検索結果のサンプルです。',
        url: '/ja/v1/sample',
        project: 'Sample',
        version: 'v1',
        language: 'ja'
      },
      score: 0.95,
      highlights: {
        title: 'Algolia<mark>検索</mark>結果1',
        content: 'これはAlgoliaからの<mark>検索</mark>結果のサンプルです。'
      }
    }
  ];
}

/**
 * MeiliSearchを使用して検索を実行します
 */
export async function searchWithMeiliSearch(
  indexName,
  query,
  options = {}
) {
  // 実際の実装ではMeiliSearchクライアントを使用
  console.log(`Searching "${query}" in MeiliSearch index "${indexName}" with options:`, options);
  
  // ダミーの結果を返す
  return [
    {
      document: {
        id: 'meilisearch-1',
        title: 'MeiliSearch検索結果1',
        content: 'これはMeiliSearchからの検索結果のサンプルです。',
        url: '/ja/v1/sample',
        project: 'Sample',
        version: 'v1',
        language: 'ja'
      },
      score: 0.92,
      highlights: {
        title: 'MeiliSearch<mark>検索</mark>結果1',
        content: 'これはMeiliSearchからの<mark>検索</mark>結果のサンプルです。'
      }
    }
  ];
}
