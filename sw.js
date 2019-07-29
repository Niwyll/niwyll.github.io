var CACHE_NAME = 'ipt-cache'
var urlsToCache = [
    '/'
]

self.addEventListener('install', function(event) {
    console.log('install event catched');
    event.waitUntil(
	caches.open(CACHE_NAME)
	    .then(function(cache) {
		console.log('Opened cache');
		return cache.addAll(urlsToCache);
	    })
    );
});
