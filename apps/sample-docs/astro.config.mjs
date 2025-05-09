// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // 多言語対応の設定
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  // コンテンツコレクションの設定
  content: {
    collections: {
      docs: {
        slug: ({ defaultSlug, locale, version }) => `${locale}/${version}/${defaultSlug}`,
      }
    }
  }
});
