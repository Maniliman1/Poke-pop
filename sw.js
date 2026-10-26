// Service worker of the game, written by tools/make_release.py with the build id of the release (the release copy is release/sw.js).
// Packs, music and fonts are kept on the device after their first download: their addresses change with every build, so a cached copy is never out of date.
// The page itself is always fetched fresh first, so a new upload shows up at once; the cached page is only used when there is no connection.
const CACHE = 'ppd-21609a29b5';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k.startsWith('ppd-') && k !== CACHE) await caches.delete(k);   // older builds
  await self.clients.claim();
})()));
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== location.origin) return;   // only this site's files; the cloud save talks to its own server directly
  const fixed = u.search.startsWith('?v=') || u.pathname.includes('/fonts/');
  if (fixed) {
    e.respondWith(caches.open(CACHE).then(async c => {
      const hit = await c.match(r); if (hit) return hit;
      const res = await fetch(r); if (res.ok && res.status === 200) c.put(r, res.clone()).catch(() => {});
      return res;
    }));
  } else if (r.mode === 'navigate' || u.pathname.endsWith('.html')) {
    e.respondWith(fetch(r).then(res => { if (res.ok) caches.open(CACHE).then(c => c.put(r, res.clone())).catch(() => {}); return res; }).catch(() => caches.match(r)));
  }
});
