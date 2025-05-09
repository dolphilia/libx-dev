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
            href: `/docs-astro/en/v1/guide/getting-started` 
          },
          { 
            title: 'Installation', 
            href: `/docs-astro/en/v1/guide/installation` 
          },
          { 
            title: 'Configuration', 
            href: `/docs-astro/en/v1/guide/configuration` 
          },
        ]
      },
      {
        title: 'API',
        items: [
          { 
            title: 'Overview', 
            href: `/docs-astro/en/v1/api` 
          },
          { 
            title: 'Reference', 
            href: `/docs-astro/en/v1/api/reference` 
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
            href: `/docs-astro/ja/v1/guide/getting-started` 
          },
          { 
            title: 'インストール', 
            href: `/docs-astro/ja/v1/guide/installation` 
          },
          { 
            title: '設定', 
            href: `/docs-astro/ja/v1/guide/configuration` 
          },
        ]
      },
      {
        title: 'API',
        items: [
          { 
            title: '概要', 
            href: `/docs-astro/ja/v1/api` 
          },
          { 
            title: 'リファレンス', 
            href: `/docs-astro/ja/v1/api/reference` 
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
            href: `/docs-astro/en/v2/guide/getting-started` 
          },
          { 
            title: 'Installation', 
            href: `/docs-astro/en/v2/guide/installation` 
          },
          { 
            title: 'Configuration', 
            href: `/docs-astro/en/v2/guide/configuration` 
          },
          { 
            title: 'Advanced Usage', 
            href: `/docs-astro/en/v2/guide/advanced-usage` 
          },
        ]
      },
      {
        title: 'API',
        items: [
          { 
            title: 'Overview', 
            href: `/docs-astro/en/v2/api` 
          },
          { 
            title: 'Reference', 
            href: `/docs-astro/en/v2/api/reference` 
          },
          { 
            title: 'Hooks', 
            href: `/docs-astro/en/v2/api/hooks` 
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
            href: `/docs-astro/ja/v2/guide/getting-started` 
          },
          { 
            title: 'インストール', 
            href: `/docs-astro/ja/v2/guide/installation` 
          },
          { 
            title: '設定', 
            href: `/docs-astro/ja/v2/guide/configuration` 
          },
          { 
            title: '高度な使い方', 
            href: `/docs-astro/ja/v2/guide/advanced-usage` 
          },
        ]
      },
      {
        title: 'API',
        items: [
          { 
            title: '概要', 
            href: `/docs-astro/ja/v2/api` 
          },
          { 
            title: 'リファレンス', 
            href: `/docs-astro/ja/v2/api/reference` 
          },
          { 
            title: 'フック', 
            href: `/docs-astro/ja/v2/api/hooks` 
          },
        ]
      }
    ]
  }
};

/**
 * 手動で定義されたサイドバー項目を取得します
 */
export function getManualSidebar(lang: LocaleKey, version: string, baseUrl: string): SidebarItem[] {
  // バージョンと言語に対応するサイドバー設定があれば、それを返す
  if (sidebarConfigs[version]?.[lang]) {
    return sidebarConfigs[version][lang] as SidebarItem[];
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
  // 自動生成サイドバーを使用するかどうか
  const useAutoSidebar = docsConfig.useAutoSidebar;
  
  if (useAutoSidebar) {
    return await getAutoSidebar(lang, version, baseUrl);
  } else {
    return getManualSidebar(lang, version, baseUrl);
  }
}
