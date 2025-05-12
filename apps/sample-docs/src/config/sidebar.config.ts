/**
 * サイドバー項目の設定
 */
import type { LocaleKey } from '@docs/i18n/locales';
import { translate } from '@docs/i18n/utils';
import docsConfig from './docs.config';

export type SidebarItem = {
  title: string;
  items: {
    title: string;
    href: string;
  }[];
};

// バージョンと言語ごとのサイドバー設定
type SidebarConfig = {
  [version: string]: {
    [lang in LocaleKey]?: SidebarItem[];
  };
};

// バージョンと言語ごとのサイドバー設定を定義
const sidebarConfigs: SidebarConfig = {
  // v1のサイドバー設定
  v1: {
    // 英語のサイドバー設定
    en: [
      {
        title: 'Guide',
        items: [
          { 
            title: 'Getting Started', 
            href: `/en/v1/guide/getting-started` 
          },
          { 
            title: 'Installation', 
            href: `/en/v1/guide/installation` 
          },
          { 
            title: 'Configuration', 
            href: `/en/v1/guide/configuration` 
          },
        ]
      },
      {
        title: 'API',
        items: [
          { 
            title: 'Overview', 
            href: `/en/v1/api` 
          },
          { 
            title: 'Reference', 
            href: `/en/v1/api/reference` 
          },
        ]
      }
    ],
    // 日本語のサイドバー設定
    ja: [
      {
        title: 'ガイド',
        items: [
          { 
            title: '入門', 
            href: `/ja/v1/guide/getting-started` 
          },
          { 
            title: 'インストール', 
            href: `/ja/v1/guide/installation` 
          },
          { 
            title: '設定', 
            href: `/ja/v1/guide/configuration` 
          },
        ]
      },
      {
        title: 'API',
        items: [
          { 
            title: '概要', 
            href: `/ja/v1/api` 
          },
          { 
            title: 'リファレンス', 
            href: `/ja/v1/api/reference` 
          },
        ]
      }
    ]
  },
  // v2のサイドバー設定
  v2: {
    // 英語のサイドバー設定
    en: [
      {
        title: 'Guide',
        items: [
          { 
            title: 'Getting Started', 
            href: `/en/v2/guide/getting-started` 
          },
          { 
            title: 'Installation', 
            href: `/en/v2/guide/installation` 
          },
          { 
            title: 'Configuration', 
            href: `/en/v2/guide/configuration` 
          },
          { 
            title: 'Advanced Usage', 
            href: `/en/v2/guide/advanced-usage` 
          },
        ]
      },
      {
        title: 'API',
        items: [
          { 
            title: 'Overview', 
            href: `/en/v2/api` 
          },
          { 
            title: 'Reference', 
            href: `/en/v2/api/reference` 
          },
          { 
            title: 'Hooks', 
            href: `/en/v2/api/hooks` 
          },
        ]
      }
    ],
    // 日本語のサイドバー設定
    ja: [
      {
        title: 'ガイド',
        items: [
          { 
            title: '入門', 
            href: `/ja/v2/guide/getting-started` 
          },
          { 
            title: 'インストール', 
            href: `/ja/v2/guide/installation` 
          },
          { 
            title: '設定', 
            href: `/ja/v2/guide/configuration` 
          },
          { 
            title: '高度な使い方', 
            href: `/ja/v2/guide/advanced-usage` 
          },
        ]
      },
      {
        title: 'API',
        items: [
          { 
            title: '概要', 
            href: `/ja/v2/api` 
          },
          { 
            title: 'リファレンス', 
            href: `/ja/v2/api/reference` 
          },
          { 
            title: 'フック', 
            href: `/ja/v2/api/hooks` 
          },
        ]
      }
    ]
  }
};

// サイドバーキャッシュ
const sidebarCache = new Map<string, {
  data: SidebarItem[],
  timestamp: number
}>();

// キャッシュの有効期限（5分）
const CACHE_TTL = 5 * 60 * 1000;

// キャッシュキーの生成
function generateCacheKey(lang: LocaleKey, version: string): string {
  return `${lang}-${version}`;
}

// キャッシュの有効性チェック
function isCacheValid(timestamp: number): boolean {
  return Date.now() - timestamp < CACHE_TTL;
}

/**
 * 手動で定義されたサイドバー項目を取得します
 */
export function getManualSidebar(lang: LocaleKey, version: string, baseUrl: string): SidebarItem[] {
  const configuredSidebar = sidebarConfigs[version]?.[lang];
  
  if (configuredSidebar) {
    // configuredSidebar の各アイテムの href に baseUrl を付加する
    return configuredSidebar.map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        // item.href は "/lang/version/slug" 形式と想定されるため、baseUrlを先頭に追加
        href: `${baseUrl}${item.href}` 
      }))
    }));
  }
  
  // 対応する設定がない場合は、デフォルトのサイドバー項目を返す
  return [
    {
      title: translate('docs.guide', lang),
      items: [
        { 
          title: translate('docs.getting_started', lang), 
          href: `${baseUrl}/${lang}/${version}/guide/getting-started` 
        },
        { 
          title: translate('docs.installation', lang), 
          href: `${baseUrl}/${lang}/${version}/guide/installation` 
        },
        { 
          title: translate('docs.configuration', lang), 
          href: `${baseUrl}/${lang}/${version}/guide/configuration` 
        },
      ]
    },
    {
      title: translate('navigation.api', lang),
      items: [
        { 
          title: translate('docs.overview', lang), 
          href: `${baseUrl}/${lang}/${version}/api` 
        },
        { 
          title: translate('docs.reference', lang), 
          href: `${baseUrl}/${lang}/${version}/api/reference` 
        },
      ]
    }
  ];
}

/**
 * ドキュメント構造から自動生成されるサイドバー項目を取得します
 * この関数はgetCollectionを使用するため、非同期関数です
 */
export async function getAutoSidebar(lang: LocaleKey, version: string, baseUrl: string): Promise<SidebarItem[]> {
  // Astroのコンテンツコレクションを使用するため、動的インポートを使用
  const { getCollection } = await import('astro:content');
  
  const docs = await getCollection('docs', (entry) => {
    return entry.slug.startsWith(`${lang}/${version}/`);
  });
  
  // カテゴリごとにドキュメントを整理
  const categories: Record<string, {
    docs: any[],
    order: number,
    title?: string
  }> = {};
  
  // カテゴリの順序マッピング（デフォルト値）
  const categoryOrder: Record<string, number> = {
    'guide': 1,
    'api': 2,
    'examples': 3,
    'reference': 4,
    'advanced': 5,
    'plugins': 6,
    'migration': 7,
    'faq': 8
  };
  
  docs.forEach(doc => {
    // フロントマターからカテゴリを取得（指定されていない場合はパスから取得）
    const parts = doc.slug.split('/');
    const pathCategory = parts.length >= 3 ? parts[2] : 'uncategorized';
    const category = doc.data.category || pathCategory;
    
    // カテゴリの順序を取得（フロントマターから、または定義済みマッピングから）
    const order = doc.data.categoryOrder !== undefined 
      ? doc.data.categoryOrder 
      : (categoryOrder[category] || 999);
    
    if (!categories[category]) {
      categories[category] = {
        docs: [],
        order: order,
        title: undefined // 後で設定
      };
    }
    
    // カテゴリの順序を更新（複数のドキュメントで同じカテゴリが使用されている場合、最小の順序を使用）
    if (order < categories[category].order) {
      categories[category].order = order;
    }
    
    categories[category].docs.push(doc);
  });
  
  // カテゴリごとにドキュメントを順序で並べ替え
  Object.keys(categories).forEach(category => {
    categories[category].docs.sort((a, b) => {
      const orderA = a.data.order || 999;
      const orderB = b.data.order || 999;
      return orderA - orderB;
    });
  });
  
  // カテゴリを順序で並べ替え
  const sortedCategories = Object.entries(categories).sort((a, b) => {
    return a[1].order - b[1].order;
  });
  
  // サイドバー項目の生成
  return sortedCategories.map(([category, { docs }]) => {
    // カテゴリ名の翻訳を試みる（翻訳キーが存在しない場合はカテゴリ名をそのまま使用）
    const categoryTitle = translate(`docs.${category}`, lang);
    const title = categoryTitle !== `docs.${category}` ? categoryTitle : 
                 (category.charAt(0).toUpperCase() + category.slice(1));
    
    return {
      title,
      items: docs.map(doc => {
        const slugParts = doc.slug.split('/').slice(2);
        return {
          title: doc.data.title,
          href: `${baseUrl}/${lang}/${version}/${slugParts.join('/')}`
        };
      })
    };
  });
}

/**
 * 設定に基づいてサイドバー項目を取得します
 * デフォルトでは手動定義のサイドバーを返します
 */
export function getSidebar(lang: LocaleKey, version: string, baseUrl: string): SidebarItem[] {
  // 自動生成サイドバーを使用するかどうか
  // 注: 自動生成サイドバーを使用する場合は、DocLayout.astroでasync/awaitを使用する必要があります
  const useAutoSidebar = docsConfig.useAutoSidebar;
  
  if (useAutoSidebar) {
    // 自動生成サイドバーは非同期関数のため、DocLayout.astroで使用する場合は注意が必要
    // ここでは手動定義のサイドバーを返します
    console.warn('自動生成サイドバーはDocLayout.astroで非同期処理が必要です。getSidebarAsync()を使用してください。');
    return getManualSidebar(lang, version, baseUrl);
  } else {
    return getManualSidebar(lang, version, baseUrl);
  }
}

/**
 * 非同期でサイドバー項目を取得します
 * DocLayout.astroで使用する場合は、このメソッドを使用してください
 */
export async function getSidebarAsync(lang: LocaleKey, version: string, baseUrl: string): Promise<SidebarItem[]> {
  console.log(`[getSidebarAsync] Called with: lang=${lang}, version=${version}, baseUrl=${baseUrl}`);
  const cacheKey = generateCacheKey(lang, version);
  console.log(`[getSidebarAsync] Generated cacheKey: ${cacheKey}`);

  // キャッシュをチェック
  const cachedData = sidebarCache.get(cacheKey);
  if (cachedData && isCacheValid(cachedData.timestamp)) {
    console.log(`[getSidebarAsync] Cache hit for ${cacheKey}. Timestamp: ${cachedData.timestamp}. Returning cached data.`);
    // Log a small part of the cached data to verify its content
    console.log('[getSidebarAsync] Cached data (first item title):', cachedData.data[0]?.title);
    return cachedData.data;
  }
  console.log(`[getSidebarAsync] Cache miss or expired for ${cacheKey}.`);

  try {
    // 事前生成したJSONファイルを読み込む
    const isDevMode = import.meta.env.DEV;
    let sidebarPath;
    let data: SidebarItem[] = []; // data変数をここで宣言し、空配列で初期化

    const isBrowser = typeof window !== 'undefined';
    console.log(`[getSidebarAsync] Environment: isBrowser=${isBrowser}, isDevMode=${isDevMode}`);

    if (isBrowser && isDevMode) {
      sidebarPath = new URL(`/sidebar/sidebar-${lang}-${version}.json`, window.location.origin).href;
    } else {
      // サーバーサイドではファイルシステムから読み込み
      console.log(`[getSidebarAsync] Reading from filesystem (server-side) for ${lang}-${version}.json`);
      const fs = await import('fs/promises');
      const path = await import('path');
      // const { fileURLToPath } = await import('url'); // Remove or comment out if not used elsewhere

      // process.cwd() はプロジェクトのルートディレクトリを指す想定
      const baseDir = process.cwd(); // この時点で .../apps/sample-docs を指していると仮定
      // この設定ファイルは 'sample-docs' プロジェクトに固有であるため、プロジェクト名を直接指定します。
      // 他のプロジェクトでこのロジックを再利用する場合は、プロジェクト名を動的に決定する仕組みが必要です。
      // const projectName = 'sample-docs'; // baseDir が既に .../apps/sample-docs なら不要のためコメントアウト
      // const jsonPath = path.join(baseDir, 'apps', projectName, 'public', 'sidebar', `sidebar-${lang}-${version}.json`); // 旧ロジックのためコメントアウト
      
      // baseDir が .../apps/sample-docs を指していると仮定し、そこからの相対パスを指定
      const jsonPath = path.join(baseDir, 'public', 'sidebar', `sidebar-${lang}-${version}.json`);
      console.log(`[getSidebarAsync] Filesystem path: ${jsonPath}`);

      const fileContent = await fs.readFile(jsonPath, 'utf-8');
      console.log(`[getSidebarAsync] Raw JSON from filesystem for ${jsonPath} (first 100 chars):`, fileContent.substring(0,100));
      try {
        data = JSON.parse(fileContent);
      } catch (parseError) {
         console.error(`[getSidebarAsync] JSON parsing failed for ${jsonPath} (filesystem):`, parseError, 'Raw JSON:', fileContent);
        throw parseError;
      }
      console.log('[getSidebarAsync] Parsed data from filesystem (first item title):', data[0]?.title);
    }

    // baseUrlを適用する処理を追加
    if (data && data.length > 0 && baseUrl) {
      console.log(`[getSidebarAsync] Applying baseUrl ("${baseUrl}") to sidebar data for ${cacheKey}. Original first href: ${data[0]?.items[0]?.href}`);
      data = data.map(section => ({
        ...section,
        items: section.items.map(item => {
          // hrefが既にbaseUrlで始まっていないことを確認してから結合する
          // hrefが '/' で始まる絶対パスであることを想定
          const newHref = item.href.startsWith(baseUrl) ? item.href : `${baseUrl}${item.href}`;
          return {
            ...item,
            href: newHref
          };
        })
      }));
      console.log('[getSidebarAsync] Sidebar data after applying baseUrl (first item href):', data[0]?.items[0]?.href);
    }

    // キャッシュに保存
    sidebarCache.set(cacheKey, {
      data,
      timestamp: Date.now()
    });

    console.log(`[getSidebarAsync] Successfully fetched and cached sidebar for ${cacheKey}. Returning network/filesystem data.`);
    console.log('[getSidebarAsync] Returning data (first item title):', data[0]?.title);
    return data;

  } catch (error) {
    console.error(`[getSidebarAsync] Error during sidebar loading for ${cacheKey}:`, error);
    // フォールバック: 手動定義のサイドバーを返す
    const manualSidebar = getManualSidebar(lang, version, baseUrl);
    console.log(`[getSidebarAsync] Fallback to manual sidebar for ${cacheKey}.`);
    console.log('[getSidebarAsync] Manual data (first item title):', manualSidebar[0]?.title);

    // 手動定義のサイドバーもキャッシュに保存 (フォールバックの結果をキャッシュする)
    sidebarCache.set(cacheKey, {
      data: manualSidebar,
      timestamp: Date.now() // Potentially cache the fallback for a shorter duration or not at all
    });
    console.log(`[getSidebarAsync] Cached manual/fallback sidebar for ${cacheKey}.`);

    return manualSidebar;
  }
}
