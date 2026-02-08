/* Service Worker for Portfolio PWA */
const CACHE_VERSION = "portfolio-v1";
const CACHE_ASSETS = `${CACHE_VERSION}-assets`;
const CACHE_PAGES = `${CACHE_VERSION}-pages`;
const CACHE_IMAGES = `${CACHE_VERSION}-images`;

const CRITICAL_ASSETS = [
  "/",
  "/en/",
  "/es/",
  "/bn/",
  "/ar/",
  "/200.html",
  "/index.html",
  "/manifest.json",
];

const ASSET_PATTERNS = [/\.js$/, /\.css$/, /\.woff2?$/, /\.ttf$/, /\.eot$/];

const IMAGE_PATTERNS = [/\.png$/, /\.jpg$/, /\.jpeg$/, /\.gif$/, /\.svg$/];

const isAsset = (url) =>
  ASSET_PATTERNS.some((pattern) => pattern.test(url)) ||
  url.includes("/assets/");
const isImage = (url) => IMAGE_PATTERNS.some((pattern) => pattern.test(url));
const isPage = (url) => url.endsWith("/") || url.endsWith(".html");

// Install event: pre-cache critical assets
self.addEventListener("install", (event) => {
  console.log("[SW] Installing service worker...");
  event.waitUntil(
    caches.open(CACHE_ASSETS).then((cache) => {
      console.log("[SW] Caching critical assets");
      return cache.addAll(CRITICAL_ASSETS).catch((err) => {
        console.warn("[SW] Some critical assets failed to cache:", err);
        // Continue anyway
        return Promise.resolve();
      });
    }),
  );
});

// Activate event: clean up old caches
self.addEventListener("activate", (event) => {
  console.log("[SW] Activating service worker...");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (![CACHE_ASSETS, CACHE_PAGES, CACHE_IMAGES].includes(cacheName)) {
            console.log("[SW] Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
  self.clients.claim();
});

// Fetch event: implement caching strategies
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Skip non-GET requests, external requests, and navigation API
  if (
    event.request.method !== "GET" ||
    url.hostname !== self.location.hostname ||
    event.request.destination === "iframe"
  ) {
    return;
  }

  // Assets: cache-first (with network fallback)
  if (isAsset(url.pathname)) {
    event.respondWith(
      caches.open(CACHE_ASSETS).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response) {
            console.log("[SW] Serving from cache (asset):", url.pathname);
            return response;
          }
          return fetch(event.request).then((response) => {
            if (response && response.status === 200) {
              cache.put(event.request, response.clone());
            }
            return response;
          });
        });
      }),
    );
    return;
  }

  // Images: cache-first, network fallback
  if (isImage(url.pathname)) {
    event.respondWith(
      caches.open(CACHE_IMAGES).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response) {
            console.log("[SW] Serving from cache (image):", url.pathname);
            return response;
          }
          return fetch(event.request).then((response) => {
            if (response && response.status === 200) {
              cache.put(event.request, response.clone());
            }
            return response;
          });
        });
      }),
    );
    return;
  }

  // Pages: network-first with cache fallback
  if (isPage(url.pathname) || event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            caches.open(CACHE_PAGES).then((cache) => {
              cache.put(event.request, response.clone());
            });
          }
          return response;
        })
        .catch(() => {
          console.log("[SW] Serving from cache (page):", url.pathname);
          return caches
            .match(event.request)
            .then((response) => response || caches.match("/200.html"));
        }),
    );
    return;
  }

  // Default: network-first with cache fallback
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200) {
          caches.open(CACHE_ASSETS).then((cache) => {
            cache.put(event.request, response.clone());
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      }),
  );
});

// Message event: handle skip waiting
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
