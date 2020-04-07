
const version = "0.0.8";
const cacheName = `xurxo-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `./`,
        `./index.html`,
        `./css/jquery.mobile-1.4.5.css`,
        `./js/jquery.mobile-1.4.5.js`,
        `./js/jquery-2.1.0.js`,
        `./js/rolldate.js`,
        `./js/FROIZ.js`,
        `./imagenes/presentacion.png`
        `./imagenes/inforfreelogo.jpg`
        `./js/jquery.mobile-1.4.5.js`
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
