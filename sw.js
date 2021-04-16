const ver = "Version 0.3";

window.onload = function () {
  document.getElementById('version').innerHTML = ver;
}

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('PowerCALC').then((cache) => cache.addAll([
      '/PowerCALC/',
      '/PowerCALC/index.html',
      '/PowerCALC/PowerCALC Logo.svg'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});