const CACHE_NAME = 'grocery-list-cache-offline';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/scripts.js',
    '/manifest.json',
    '/images/icon-grocery.png'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            // Always return from cache if available
            return response || fetch(event.request).catch(() => {
                // If both cache and network fail, provide a fallback if desired
                return new Response('Offline content unavailable');
            });
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
