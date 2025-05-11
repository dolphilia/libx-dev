// キャッシュ名とバージョン
const CACHE_NAME = 'sidebar-cache-v1';

// キャッシュするファイルのパターン
const CACHE_PATTERNS = [
  /\/docs-astro\/sidebar\/sidebar-.*\.json$/,
];

// インストール時の処理
self.addEventListener('install', (event) => {
  console.log('Service Worker: インストール完了');
  self.skipWaiting();
});

// アクティベート時の処理
self.addEventListener('activate', (event) => {
  console.log('Service Worker: アクティベート完了');
  // 古いキャッシュを削除
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: 古いキャッシュを削除:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// フェッチ時の処理
self.addEventListener('fetch', (event) => {
  // サイドバーJSONファイルのリクエストかどうかをチェック
  const isSidebarRequest = CACHE_PATTERNS.some(pattern => 
    pattern.test(event.request.url)
  );

  if (isSidebarRequest) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        // キャッシュに存在する場合はキャッシュから返す
        if (response) {
          console.log('Service Worker: キャッシュからサイドバーを返却:', event.request.url);
          return response;
        }

        // キャッシュに存在しない場合はネットワークから取得してキャッシュに保存
        return fetch(event.request).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }

          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
            console.log('Service Worker: サイドバーをキャッシュに保存:', event.request.url);
          });

          return networkResponse;
        });
      })
    );
  }
}); 