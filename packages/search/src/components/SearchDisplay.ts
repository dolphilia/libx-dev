/**
 * 検索結果表示コンポーネント
 * 検索結果の表示を担当
 */

import { highlightMatches, extractRelevantExcerpt } from '../utils/searchClient';

/**
 * 検索結果を表示
 * @param groupedResults グループ化された検索結果
 * @param query 検索クエリ
 * @param container 結果を表示するコンテナ要素
 * @param translations 翻訳テキスト
 */
export function displayResults(groupedResults: Record<string, any[]>, query: string, container: HTMLElement, translations: any) {
  container.innerHTML = '';
  
  const totalResults = Object.values(groupedResults).flat().length;
  
  if (totalResults === 0) {
    container.innerHTML = `
      <div class="no-results">
        <p>${translations.noResults?.replace('{query}', query) || `"${query}" に一致する結果は見つかりませんでした`}</p>
      </div>
    `;
    return;
  }
  
  const resultsHeader = document.createElement('div');
  resultsHeader.className = 'results-header';
  resultsHeader.innerHTML = `
    <h2 class="results-title">
      ${totalResults === 1 
        ? (translations.oneResult?.replace('{query}', query) || `"${query}" に対して1件の結果`) 
        : (translations.manyResults?.replace('{query}', query).replace('{count}', String(totalResults)) || `"${query}" に対して${totalResults}件の結果`)}
    </h2>
  `;
  container.appendChild(resultsHeader);
  
  Object.entries(groupedResults).forEach(([category, results]) => {
    const categoryElement = document.createElement('div');
    categoryElement.className = 'results-category';
    
    categoryElement.innerHTML = `
      <h3 class="category-title">${category}</h3>
      <div class="category-results"></div>
    `;
    
    const categoryResults = categoryElement.querySelector('.category-results')!;
    
    results.forEach(result => {
      const resultElement = document.createElement('div');
      resultElement.className = 'result-item';
      
      const excerpt = extractRelevantExcerpt(result.content || result.text || '', query);
      
      resultElement.innerHTML = `
        <a href="${result.url}" class="result-link">
          <h4 class="result-title">${highlightMatches(result.title || result.name || '', query)}</h4>
          <div class="result-breadcrumb">${result.breadcrumb || `${result.project || ''} ${result.version || ''}`}</div>
          <p class="result-excerpt">${highlightMatches(excerpt, query)}</p>
        </a>
      `;
      
      categoryResults.appendChild(resultElement);
    });
    
    container.appendChild(categoryElement);
  });
}

/**
 * エラーメッセージを表示
 * @param message エラーメッセージ
 * @param container 表示先コンテナ
 * @param translations 翻訳テキスト
 */
export function displayError(message: string, container: HTMLElement, translations: any) {
  container.innerHTML = `
    <div class="search-error">
      <p>${translations.searchError || 'エラー'}: ${message}</p>
    </div>
  `;
}

/**
 * 検索結果をクリア
 * @param container 結果コンテナ
 */
export function clearResults(container: HTMLElement) {
  container.innerHTML = '';
}
