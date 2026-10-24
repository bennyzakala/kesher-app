// Kesher service worker: makes the app installable and keeps its screens available offline.
// Member data (/api) and photos (/uploads) are never cached; they always come from the network.
const CACHE = 'kesher-v1';
const SHELL = ['/', '/app.js', '/style.css', '/manifest.webmanifest', '/offline.html', '/icons/icon-192.png', '/icons/apple-touch-icon.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/uploads/')) return;

  // Pages: fresh from the network when online, the saved copy when offline
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put('/', copy));
      return res;
    }).catch(async () => (await caches.match('/')) || caches.match('/offline.html')));
    return;
  }

  // Scripts, styles and icons: answer from the cache at once and refresh it in the background
  event.respondWith(caches.match(req).then(cached => {
    const fresh = fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => cached);
    return cached || fresh;
  }));
});
