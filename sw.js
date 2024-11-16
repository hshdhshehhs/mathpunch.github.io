self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('mathpunch-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css', // Include other assets like JS, CSS files
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
