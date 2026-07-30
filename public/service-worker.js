/* Service Worker — stale-while-revalidate (ISR-style TTL) */

const CACHE_NAME = 'cs-portfolio-v1';
const ISR_TTL_MS = 60 * 1000;

const PRECACHE_URLS = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(staleWhileRevalidate(request, event));
});

async function staleWhileRevalidate(request, event) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  const fetchAndCache = fetch(request)
    .then(async (response) => {
      if (response && response.ok) {
        const clone = response.clone();
        const headers = new Headers(clone.headers);
        headers.set('sw-cached-at', String(Date.now()));
        const body = await clone.blob();
        await cache.put(
          request,
          new Response(body, {
            status: clone.status,
            statusText: clone.statusText,
            headers,
          })
        );
      }
      return response;
    })
    .catch(() => cached || new Response('Offline', { status: 503 }));

  if (cached) {
    const cachedAt = Number(cached.headers.get('sw-cached-at') || 0);
    const isStale = !cachedAt || Date.now() - cachedAt > ISR_TTL_MS;
    if (isStale) {
      event.waitUntil(fetchAndCache);
      return cached;
    }
    return cached;
  }

  return fetchAndCache;
}
