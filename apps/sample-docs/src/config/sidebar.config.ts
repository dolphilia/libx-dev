/**
 * サイドバー項目の設定
 */
import type { LocaleKey } from '@docs/i18n/locales';
import { translate } from '@docs/i18n/utils';

export type SidebarItem = {
  title: string;
  items: {
    title: string;
    href: string;
  }[];
};

/**
 * 手動で定義されたサイドバー項目を取得します
 */
export function getManualSidebar(lang: LocaleKey, version: string, baseUrl: string): SidebarItem[] {
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
  const categories: Record<string, any[]> = {};
  
  docs.forEach(doc => {
    const parts = doc.slug.split('/');
    if (parts.length >= 3) {
      const category = parts[2];
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(doc);
    }
  });
  
  // カテゴリごとにドキュメントを順序で並べ替え
  Object.keys(categories).forEach(category => {
    categories[category].sort((a, b) => {
      const orderA = a.data.order || 999;
      const orderB = b.data.order || 999;
      return orderA - orderB;
    });
  });
  
  // サイドバー項目の生成
  return Object.keys(categories).map(category => {
    return {
      title: translate(`docs.${category}`, lang) || category,
      items: categories[category].map(doc => {
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
  const useAutoSidebar = false;
  
  if (useAutoSidebar) {
    // 自動生成サイドバーは非同期関数のため、DocLayout.astroで使用する場合は注意が必要
    // ここでは手動定義のサイドバーを返します
    console.warn('自動生成サイドバーはDocLayout.astroで非同期処理が必要です。手動定義のサイドバーを返します。');
    return getManualSidebar(lang, version, baseUrl);
  } else {
    return getManualSidebar(lang, version, baseUrl);
  }
}
