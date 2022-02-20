// Always create this file in root directory. As it wil only work for the scope of it's directory

self.addEventListener("install", e =>{
	e.waitUntil(
		caches.open("static").then(cache => {
			return cache.addAll(["./", "./style.css", "./logo512.png"])
		})
	);
});

self.addEventListener("fetch", e => {
	e.respondWith(
		caches.match(e.request).then(response => {
			return response || fetch(e.request);
		})
	);
});