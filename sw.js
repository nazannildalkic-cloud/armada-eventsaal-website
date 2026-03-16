const CACHE_NAME = 'armada-v4';
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/luxe.css',
    '/luxe.js',
    '/assets/logo-transparent.png',
    '/assets/slide1.jpg.jpeg',
    '/assets/slide2.jpg.jpeg',
    '/assets/slide5.jpg.jpeg',
    '/assets/slide7.jpg.jpeg',
    '/assets/slide8.jpg.jpeg',
    '/assets/slide12.jpg.jpeg',
    '/assets/slide14.jpg.jpeg',
    '/assets/slide15.jpg.jpeg',
    '/assets/music/oriental-romantic-international.opus',
    '/assets/music/international-oriental-intermezzo.opus',
    '/hochzeiten/index.html'
];

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(STATIC_ASSETS.map(function(url) {
                return new Request(url, { cache: 'reload' });
            })).catch(function() {});
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', function(e) {
    e.waitUntil(
        caches.keys().then(function(keys) {
            return Promise.all(
                keys.filter(function(k) { return k !== CACHE_NAME; })
                    .map(function(k) { return caches.delete(k); })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    if (e.request.method !== 'GET') return;
    var url = new URL(e.request.url);
    if (url.hostname !== location.hostname) return;

    e.respondWith(
        caches.match(e.request).then(function(cached) {
            var network = fetch(e.request).then(function(resp) {
                if (resp && resp.status === 200) {
                    var clone = resp.clone();
                    caches.open(CACHE_NAME).then(function(cache) { cache.put(e.request, clone); });
                }
                return resp;
            }).catch(function() {});
            return cached || network;
        })
    );
});
