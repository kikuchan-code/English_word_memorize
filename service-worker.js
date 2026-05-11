const CACHE_NAME = "word-app-v1";

const urlsToCache = [
  "./",
  "./main.html",
  "./style.css",
  "./data.js",
  "./script.js",
  "./manifest.json",
  "./icon-512.png",
  "./icon-192.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});