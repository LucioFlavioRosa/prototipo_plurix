const CACHE_NAME = 'cotacoes-mobile-v1';
const ASSETS_TO_CACHE = [
  './index.html',
  'https://static.wixstatic.com/media/511fa0_114311e069c34ae48f752e23361e9157~mv2.png/v1/fill/w_180,h_180,al_c,q_85,usm_0.66_1.00_0.01/511fa0_114311e069c34ae48f752e23361e9157~mv2.png',
  'https://fonts.googleapis.com/css?family=Helvetica:400,700&display=swap'
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});