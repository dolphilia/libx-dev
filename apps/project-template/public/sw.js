// キャッシュ名とバージョン
const CACHE_NAME = 'sidebar-cache-v2';

// キャッシュするファイルのパターン
const CACHE_PATTERNS = [
  /\/sidebar\/sidebar-.*\.json$/,
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
          if (cacheName.startsWith('sidebar-cache-') && cacheName !== CACHE_NAME) {
            console.log('Service Worker: 古いバージョンのサイドバーキャッシュを削除:', cacheName);
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
      // 1. まずネットワークから取得を試みる
      fetch(event.request).then((networkResponse) => {
        // ネットワークから正常に取得できた場合
        if (networkResponse && networkResponse.status === 200) {
          console.log('Service Worker: ネットワークからサイドバーを取得・キャッシュ:', event.request.url);
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        }
        // ネットワークエラー、または正常でないレスポンスの場合はキャッシュフォールバックを試みる
        console.log('Service Worker: ネットワーク取得失敗、キャッシュを確認:', event.request.url, networkResponse ? networkResponse.status : 'No response');
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            console.log('Service Worker: キャッシュからサイドバーを返却 (フォールバック):', event.request.url);
            return cachedResponse;
          }
          // キャッシュにもない場合は、ネットワークのレスポンス (エラーレスポンスなど) をそのまま返す
          return networkResponse;
        });
      }).catch((error) => {
        // fetchが完全に失敗した場合 (オフラインなど)
        console.log('Service Worker: ネットワーク接続エラー、キャッシュを確認:', event.request.url, error);
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            console.log('Service Worker: キャッシュからサイドバーを返却 (オフラインフォールバック):', event.request.url);
            return cachedResponse;
          }
          // 本当に何も返せない場合 (必要に応じてオフラインページなどを返す)
          // return new Response("オフラインのためコンテンツを取得できませんでした。", { status: 503, statusText: "Service Unavailable" });
        });
      })
    );
  }
}); 