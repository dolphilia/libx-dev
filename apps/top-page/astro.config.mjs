// @ts-check
import { defineConfig } from 'astro/config';
import pagefind from 'astro-pagefind';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  // デプロイ先のサイトURL
  site: 'https://dolphilia.github.io',
  // GitHub Pagesのサブディレクトリにデプロイするためのベースパス
  base: '',
  integrations: [
    pagefind()
  ],
  vite: {
    resolve: {
      alias: {
        '@docs/ui': path.resolve(__dirname, '../../packages/ui/src'),
        '@docs/search': path.resolve(__dirname, '../../packages/search/src'),
        '@docs/theme': path.resolve(__dirname, '../../packages/theme/src'),
        '@docs/i18n': path.resolve(__dirname, '../../packages/i18n/src'),
      },
    },
    build: {
      // CSSとJSのパスを絶対パスに変更
      assetsInlineLimit: 0,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash].[ext]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        }
      }
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
});
