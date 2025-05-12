/**
 * 検索クライアントユーティリティ
 * 検索マニフェストの読み込みと検索処理を担当
 */

/**
 * 検索マニフェストを読み込む
 * @param baseUrl ベースURL
 * @param currentPathname 現在のパス
 * @returns マニフェストとプロジェクト情報
 */
export async function loadSearchManifest(baseUrl: string, currentPathname: string) {
  // プロジェクト名を特定
  let projectName = 'top-page';
  if (currentPathname.includes('/docs/sample-docs/')) {
    projectName = 'sample-docs';
    // sample-docsの場合はベースURLを調整
    baseUrl = '';
  }
  
  console.log('Detected project name:', projectName);
  
  // ベースURLの正規化
  let normalizedBaseUrl = baseUrl;
  if (normalizedBaseUrl && normalizedBaseUrl !== '/') {
    if (!normalizedBaseUrl.startsWith('/')) normalizedBaseUrl = '/' + normalizedBaseUrl;
    if (normalizedBaseUrl.endsWith('/')) normalizedBaseUrl = normalizedBaseUrl.slice(0, -1);
  } else if (normalizedBaseUrl === '/') {
    normalizedBaseUrl = '';
  }
  
  // マニフェストのパスを構築
  let manifestPath = '/search-indices/manifest.json';
  if (projectName === 'sample-docs') {
    // sample-docsの場合は絶対パスを使用
    manifestPath = '/search-indices/manifest.json';
  } else {
    // 通常のパス解決
    const manifestPathParts = [normalizedBaseUrl, 'search-indices', 'manifest.json'].filter(s => s && s.trim() !== '');
    manifestPath = manifestPathParts.join('/');
    if (manifestPath && !manifestPath.startsWith('/') && !manifestPath.startsWith('http')) {
      manifestPath = '/' + manifestPath;
    }
  }
  
  console.log('Fetching manifest from:', manifestPath);
  
  try {
    const response = await fetch(manifestPath);
    if (!response.ok) {
      throw new Error(`Failed to fetch search manifest: ${response.status} ${response.statusText} from ${manifestPath}`);
    }
    const searchManifest = await response.json();
    console.debug('Search manifest loaded:', searchManifest);
    return { searchManifest, projectName };
  } catch (error) {
    console.error('Error loading search manifest:', error);
    throw error;
  }
}

/**
 * 検索インデックスファイルのパスを取得
 * @param searchManifest 検索マニフェスト
 * @param projectKey プロジェクト名
 * @param langKey 言語コード
 * @param versionKey バージョン
 * @returns 検索インデックスファイルのパス
 */
export function getSearchIndexPath(searchManifest: any, projectKey: string, langKey: string, versionKey: string) {
  const actualIndexFileName = searchManifest.projects?.[projectKey]?.[langKey]?.[versionKey];
  
  console.log('Looking for index file in manifest:', {
    projectKey,
    langKey,
    versionKey,
    manifest: searchManifest
  });
  
  if (!actualIndexFileName) {
    // インデックスファイルが見つからない場合は、デフォルトのファイル名を使用
    console.warn(`マニフェストにインデックスファイルが見つかりませんでした: ${projectKey}, ${langKey}, ${versionKey}`);
    console.warn('デフォルトのファイル名を使用してみます...');
    
    // デフォルトのインデックスファイルを試す
    const searchIndexPath = `/search-indices/${projectKey}-${langKey}-${versionKey}.json`;
    console.log('デフォルトのインデックスパス:', searchIndexPath);
    return searchIndexPath;
  }
  
  // マニフェストから取得したファイル名を使用してパスを構築
  const searchIndexPath = `/search-indices/${actualIndexFileName}`;
  console.log('マニフェストからのインデックスパス:', searchIndexPath);
  return searchIndexPath;
}

/**
 * 検索インデックスを取得して検索を実行
 * @param searchIndexPath 検索インデックスファイルのパス
 * @param query 検索クエリ
 * @returns 検索結果
 */
export async function performSearch(searchIndexPath: string, query: string) {
  console.log('検索インデックスを取得しようとしています:', searchIndexPath);
  
  let searchIndex;
  try {
    const response = await fetch(searchIndexPath);
    
    if (!response.ok) {
      throw new Error(`検索インデックスの取得に失敗しました: ${response.status} ${response.statusText} from ${searchIndexPath}`);
    }
    
    searchIndex = await response.json();
    console.log('検索インデックスを正常に取得しました:', searchIndex);
    
    // 検索インデックスの構造を確認して変換
    if (!Array.isArray(searchIndex)) {
      console.warn('検索インデックスが配列ではありません。変換を試みます:', searchIndex);
      
      // { documents: [...], index: {...} } 形式の場合
      if (searchIndex.documents && Array.isArray(searchIndex.documents)) {
        console.log('検索インデックスの documents プロパティが配列です。これを使用します。');
        searchIndex = searchIndex.documents;
      }
      // その他のパターンをチェック
      else if (searchIndex.items && Array.isArray(searchIndex.items)) {
        console.log('検索インデックスの items プロパティが配列です。これを使用します。');
        searchIndex = searchIndex.items;
      } 
      // オブジェクトの場合は値を配列に変換してみる
      else if (typeof searchIndex === 'object' && searchIndex !== null) {
        const tempArray = Object.values(searchIndex);
        if (tempArray.length > 0) {
          console.log('オブジェクトの値を配列に変換しました。');
          searchIndex = tempArray;
        } else {
          console.error('検索インデックスから配列を作成できませんでした。');
          searchIndex = [];
        }
      } else {
        console.error('検索インデックスがオブジェクトでも配列でもありません。');
        searchIndex = [];
      }
    }
    
    console.log('検索インデックスのエントリ数:', Array.isArray(searchIndex) ? searchIndex.length : 0);
  } catch (error) {
    console.error('検索インデックスの取得中にエラーが発生しました:', error);
    throw error;
  }
  
  // 検索結果のフィルタリング
  let results = [];
  
  try {
    if (Array.isArray(searchIndex)) {
      console.log('検索インデックスの各アイテムをチェックします');
      
      // 各アイテムをチェックしてフィルタリング
      results = searchIndex.filter((item: any) => {
        if (!item || typeof item !== 'object') {
          console.log('無効なアイテムをスキップします:', item);
          return false;
        }
        
        // プロパティ名を確認
        const hasTitle = 'title' in item;
        const hasContent = 'content' in item;
        const hasText = 'text' in item;
        const hasBody = 'body' in item;
        
        let titleText = '';
        let contentText = '';
        
        // タイトルプロパティの取得
        if (hasTitle && item.title && typeof item.title === 'string') {
          titleText = item.title;
        } else if ('name' in item && item.name && typeof item.name === 'string') {
          titleText = item.name;
        } else if ('heading' in item && item.heading && typeof item.heading === 'string') {
          titleText = item.heading;
        }
        
        // コンテンツプロパティの取得
        if (hasContent && item.content && typeof item.content === 'string') {
          contentText = item.content;
        } else if (hasText && item.text && typeof item.text === 'string') {
          contentText = item.text;
        } else if (hasBody && item.body && typeof item.body === 'string') {
          contentText = item.body;
        }
        
        // 文字列でない場合は変換を試みる
        if (titleText && typeof titleText !== 'string') {
          try {
            titleText = String(titleText);
          } catch (e) {
            titleText = '';
          }
        }
        
        if (contentText && typeof contentText !== 'string') {
          try {
            contentText = String(contentText);
          } catch (e) {
            contentText = '';
          }
        }
        
        // 検索クエリと一致するかチェック
        const titleMatch = titleText && titleText.toLowerCase().includes(query.toLowerCase());
        const contentMatch = contentText && contentText.toLowerCase().includes(query.toLowerCase());
        
        return titleMatch || contentMatch;
      });
    } else {
      console.warn('検索インデックスが配列ではありません。空の結果を返します。');
    }
  } catch (error) {
    console.error('検索結果のフィルタリング中にエラーが発生しました:', error);
  }
  
  console.log('検索結果:', results.length, '件の結果が見つかりました');
  return results;
}

/**
 * 検索結果をカテゴリごとにグループ化
 * @param results 検索結果
 * @returns カテゴリごとにグループ化された検索結果
 */
export function groupResultsByCategory(results: any[]) {
  const grouped: Record<string, any[]> = {};
  
  results.forEach(result => {
    const category = result.category || 'Other';
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(result);
  });
  
  return grouped;
}

/**
 * 検索結果からテキスト抜粋を取得
 * @param content コンテンツテキスト
 * @param query 検索クエリ
 * @returns 関連する抜粋
 */
export function extractRelevantExcerpt(content: string, query: string): string {
  const lowerContent = content.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerContent.indexOf(lowerQuery);
  
  if (index === -1) return content.substring(0, 150) + '...';
  
  const start = Math.max(0, index - 75);
  const end = Math.min(content.length, index + query.length + 75);
  let excerpt = content.substring(start, end);
  
  if (start > 0) excerpt = '...' + excerpt;
  if (end < content.length) excerpt = excerpt + '...';
  
  return excerpt;
}

/**
 * 検索クエリに一致するテキストをハイライト
 * @param text 元のテキスト
 * @param query 検索クエリ
 * @returns ハイライトされたテキスト
 */
export function highlightMatches(text: string, query: string): string {
  if (!query) return text;
  
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}
