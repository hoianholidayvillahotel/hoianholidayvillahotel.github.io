'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "683c808389dec318e7cb405298c7ea40",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/google_fonts/Oswald-Bold.ttf": "ee9b3cf3889df913947fe84674b8d42c",
"assets/google_fonts/Oswald-ExtraLight.ttf": "e6a7a5b79ba656ad59ed7856398c4b2e",
"assets/google_fonts/Oswald-Light.ttf": "323fbe580b2aa7c40c13bdea8a2879bf",
"assets/google_fonts/Oswald-Medium.ttf": "cac18285be0f21659601259d7a879432",
"assets/google_fonts/Oswald-Regular.ttf": "f57b0d84334aba300c04370ba516534e",
"assets/google_fonts/Oswald-SemiBold.ttf": "5dbcd4469d56b12101587a4aa7e48812",
"assets/images/img_1.jpg": "7e1c96e24e33f71d1c1a75ef036adc0d",
"assets/images/img_10.jpg": "3f438ead9264df8c4355a58381178a24",
"assets/images/img_11.jpg": "c6aad5d2e48a971973fe08ec05f935bd",
"assets/images/img_12.jpg": "1dba939474632fe1546c1d539d8c7c09",
"assets/images/img_13.jpg": "314d7b1356e687eb4c8d5153f8f79a40",
"assets/images/img_14.jpg": "6072507205dc47055e19d5322bf561d8",
"assets/images/img_15.jpg": "bdde15b3cb9035135f3bd8350671f58e",
"assets/images/img_16.jpg": "7e40dddc81e88f643b851575563bc84f",
"assets/images/img_17.jpg": "8193a4da538b598d6ae0b9a93f3bd12c",
"assets/images/img_18.jpg": "232485c3576670b2e82e497e3bae3996",
"assets/images/img_19.jpg": "f7ff1bb7c755e9d67b412ef4f83d45c8",
"assets/images/img_2.jpg": "8fa6d0868e0bd11a1f0316934f11300d",
"assets/images/img_20.jpg": "322eac0c830ee2ea0fd3fb8e7a7a389f",
"assets/images/img_21.jpg": "5826a4ac3ea8346a07922818d60ade9a",
"assets/images/img_22.jpg": "f1fadeff28e7a772ee062d31647052a1",
"assets/images/img_23.jpg": "e9a17e03f1bc0f4f62c9d32cfcc65e44",
"assets/images/img_24.jpg": "23be1096de9e207cc6248334c3517b7e",
"assets/images/img_25.jpg": "2105de094eb07ee00f122501e367e9e4",
"assets/images/img_26.jpg": "7053ee8ed9a1978b299554dea4e1424d",
"assets/images/img_27.jpg": "3d651b86a39de73ecf11fae879402df5",
"assets/images/img_28.jpg": "703363fad5b0b5f1650626da0bf99aef",
"assets/images/img_29.jpg": "6b610ac665b77e0a28f11b3c2a21eee0",
"assets/images/img_3.jpg": "7e1c96e24e33f71d1c1a75ef036adc0d",
"assets/images/img_30.jpg": "5d041e0a70562f7df59e6656f4f1f379",
"assets/images/img_31.jpg": "b3eefc6ece57ecc05dc7d3994559c41c",
"assets/images/img_32.jpg": "55c13cbef822d42928f031ac9b181dee",
"assets/images/img_33.jpg": "c45cbb70d289380b2dd9367b3bec28ff",
"assets/images/img_34.jpg": "9423dbab8e36dcdfe4cf876bbba95692",
"assets/images/img_35.jpg": "e75ab75e7fdcde5a12448493f30b9984",
"assets/images/img_36.jpg": "44f5a4b73c82a0ea0836dd2065a8256f",
"assets/images/img_37.jpg": "ea44a858970b95c158b38661dbe57251",
"assets/images/img_38.jpg": "de71649119fa87abb2e494e01bcb9d8d",
"assets/images/img_39.jpg": "dffc2e26f9e58111f740a64c527e5182",
"assets/images/img_4.jpg": "007a3548c1e13a86e6f90e4a49875ad5",
"assets/images/img_40.jpg": "92ac7d1f606be079d8c9a93d1672f608",
"assets/images/img_41.jpg": "108fedc894f843e2b1b008c5ce4e289e",
"assets/images/img_5.jpg": "c2cf58d6d5c7134d4956c0b3a56c5ebc",
"assets/images/img_6.jpg": "d01d1f7719c686662cb56c118cb2bfa2",
"assets/images/img_7.jpg": "882e76ca9262d29e8cbcd5a58cd94f0b",
"assets/images/img_8.jpg": "f20a2d90f3608ec1b9a9af19e1fdcb33",
"assets/images/img_9.jpg": "490b84cab63f437d7b9cd9413c0f9381",
"assets/NOTICES": "bbd4e94c37a9b58401d9273b630b2bfa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "426fb193df07046366a7133d0a8f4804",
"favicon_original.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192-original.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-192.png": "f1bbeb4ea81758f021f2b84db4a45161",
"icons/Icon-512-original.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-512.png": "426fb193df07046366a7133d0a8f4804",
"index.html": "925906512971ec92202565bb1b2080cf",
"/": "925906512971ec92202565bb1b2080cf",
"main.dart.js": "a6db7b24376747992a9b7b047bb4cf11",
"manifest.json": "23d7543d04ee76c18804b671b708597a",
"version.json": "b3bbae87935697cf0ed52c4d87b7b04e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
