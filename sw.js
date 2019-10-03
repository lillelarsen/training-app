const CACHE_NAME = 'static-cache-v7';
const DATA_CACHE_NAME = 'data-cache-v6';

self.addEventListener('install', function (event) {
  console.log('SW Installed');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        cache.addAll([
          '/',
          '/index.html',
          '/favicon.ico',
          '/manifest.json',
          '/nosleep.js',
          '/style.css',
          '/images/icons/icon-72x72.png',
          '/images/icons/icon-96x96.png',
          '/images/icons/icon-128x128.png',
          '/images/icons/icon-144x144.png',
          '/images/icons/icon-152x152.png',
          '/images/icons/icon-192x192.png',
          '/images/icons/icon-384x384.png',
          '/images/icons/icon-512x512.png',
          '/sound/beep.mp3',
          '/cards/back-side.png',
          '/cards/bonde-hjerter.png',
          '/cards/bonde-kloer.png',
          '/cards/bonde-ruder.png',
          '/cards/bonde-spar.png',
          '/cards/dronning-hjerter.png',
          '/cards/dronning-kloer.png',
          '/cards/dronning-ruder.png',
          '/cards/dronning-spar.png',
          '/cards/es-hjerter.png',
          '/cards/es-kloer.png',
          '/cards/es-ruder.png',
          '/cards/es-spar.png',
          '/cards/femmer-hjerter.png',
          '/cards/femmer-kloer.png',
          '/cards/femmer-ruder.png',
          '/cards/femmer-spar.png',
          '/cards/fier-hjerter.png',
          '/cards/fier-kloer.png',
          '/cards/fier-ruder.png',
          '/cards/fier-spar.png',
          '/cards/joker-hjerter.png',
          '/cards/joker-kloer.png',
          '/cards/joker-ruder.png',
          '/cards/konge-hjerter.png',
          '/cards/konge-kloer.png',
          '/cards/konge-ruder.png',
          '/cards/konge-spar.png',
          '/cards/nier-hjerter.png',
          '/cards/nier-kloer.png',
          '/cards/nier-ruder.png',
          '/cards/nier-spar.png',
          '/cards/otter-hjerter.png',
          '/cards/otter-kloer.png',
          '/cards/otter-ruder.png',
          '/cards/otter-spar.png',
          '/cards/sekser-hjerter.png',
          '/cards/sekser-kloer.png',
          '/cards/sekser-ruder.png',
          '/cards/sekser-spar.png',
          '/cards/syver-hjerter.png',
          '/cards/syver-kloer.png',
          '/cards/syver-ruder.png',
          '/cards/syver-spar.png',
          '/cards/tier-hjerter.png',
          '/cards/tier-kloer.png',
          '/cards/tier-ruder.png',
          '/cards/tier-spar.png',
          '/cards/toer-hjerter.png',
          '/cards/toer-kloer.png',
          '/cards/toer-ruder.png',
          '/cards/toer-spar.png',
          '/cards/treer-hjerter.png',
          '/cards/treer-kloer.png',
          '/cards/treer-ruder.png',
          '/cards/treer-spar.png',
          'https://fonts.googleapis.com/css?family=Red+Hat+Display&display=swap',
        ]);
      })
  );
});

self.addEventListener('activate', function () {
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});
