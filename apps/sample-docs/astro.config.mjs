// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  // デプロイ先のサイトURL
  site: 'https://dolphilia.github.io',
  // GitHub Pagesのサブディレクトリにデプロイするためのベースパス
  base: '/docs-astro',
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@docs/ui': path.resolve(__dirname, '../../packages/ui/src'),
        '@docs/versioning': path.resolve(__dirname, '../../packages/versioning/src'),
        '@docs/search': path.resolve(__dirname, '../../packages/search/src'),
        '@docs/theme': path.resolve(__dirname, '../../packages/theme/src'),
        '@docs/i18n': path.resolve(__dirname, '../../packages/i18n/src'),
      },
    },
  },
  // 多言語対応の設定
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  // コンテンツコレクションの設定 (Astro v2.5+では通常 src/content/config.ts で定義)
  // contentCollections: {
  //   docs: {
  //     /**
  //      * @param {object} params
  //      * @param {string} params.defaultSlug
  //      * @param {string} params.locale
  //      * @param {string} params.version
  //      */
  //     slug: ({ defaultSlug, locale, version }) => `${locale}/${version}/${defaultSlug}`,
  //   }
  // }
});
