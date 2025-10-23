/* Minimal Service Worker for Black Alsatian
 * - Replaces legacy Workbox-based SWs and cleans up their caches
 * - Provides a lightweight offline fallback for navigation requests
 * - No heavy precaching to keep performance high
 */

const OFFLINE_FALLBACK_URL = '/offline.html'

self.addEventListener('install', (event) => {
  // Pre-cache the offline fallback only
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open('ba-offline-v1')
        await cache.add(new Request(OFFLINE_FALLBACK_URL, { cache: 'reload' }))
      } catch (e) {
        // ignore
      }
      self.skipWaiting()
    })()
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Clean up old Workbox/Gatsby caches from previous offline plugin versions
      try {
        const keys = await caches.keys()
        await Promise.all(
          keys.map((key) => {
            if (/^(workbox|gatsby-plugin-offline|gatsby-runtime|gatsby-cache)/.test(key)) {
              return caches.delete(key)
            }
            return Promise.resolve(true)
          })
        )
      } catch (e) {
        // ignore
      }
      await self.clients.claim()
    })()
  )
})

self.addEventListener('fetch', (event) => {
  const req = event.request

  // Handle navigation requests with an offline fallback
  if (req.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          // Try the network first for fresh content
          const preload = await event.preloadResponse
          if (preload) return preload
          return await fetch(req)
        } catch (e) {
          // If offline, serve the offline fallback
          const cache = await caches.open('ba-offline-v1')
          const cached = await cache.match(OFFLINE_FALLBACK_URL)
          return cached || new Response('Offline', { status: 503, statusText: 'Offline' })
        }
      })()
    )
    return
  }

  // For all other requests, fall through to default network behavior
})
