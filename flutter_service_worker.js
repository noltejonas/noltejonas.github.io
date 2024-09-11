'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7e6085214586ba9e56d1dfc8d288a003",
"version.json": "bd9fd0919fa5da47719776d1cbdcd12d",
"index.html": "031479f4f740b7530920351a64a5e204",
"/": "031479f4f740b7530920351a64a5e204",
"main.dart.js": "27954172ab9ad9da9caf861021b68a37",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "71f55a6b6af21575f645f8afdefcc0b0",
"assets/AssetManifest.json": "dbc5787e0e8138b07f686c20bf9d4353",
"assets/NOTICES": "35bf3e890e72c4eaef6481958e602495",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b5f248eb26d3e1eec995f729ec3cf76e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "aad08255fff345f7be42ac97983d6cf2",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "78ae5b3a67bb7fad96c50bfd0ea7d266",
"assets/fonts/MaterialIcons-Regular.otf": "53b5790e73a8765622b82e8e9eccbd5b",
"assets/assets/loading/second.gif": "54f4b3164327ff3fb2b805fc24891e62",
"assets/assets/loading/fourth.gif": "1c8eb7c7c68208b75fe1199e451bed19",
"assets/assets/loading/third.gif": "7cceed057f0760d6dd64b3adb39b58b9",
"assets/assets/loading/first.gif": "3d6d2b36d5684d90e8d11a4ddcbb5acb",
"assets/assets/images/zukunftgruenden.png": "d4e132c6635fb2836b72908b0ae74a35",
"assets/assets/images/Geschenk.png": "16acebdad30a9565875a5415396b0b64",
"assets/assets/images/Niklas.JPG": "e179095a0f4284b94a0eac31effa6d11",
"assets/assets/images/arrow.svg": "f8864a19fc9a978717dd15a3326a05dd",
"assets/assets/images/Medien1.png": "1078bfbdf72c852f7daea5341d0f5d6f",
"assets/assets/images/vordemerfolg.png": "05a385b6975d5ff77d83fb40e579bb87",
"assets/assets/images/Medien2.png": "ad5220177bc08965f63a0665e040bc0a",
"assets/assets/images/Medien3.png": "23ba126fc26af08ffbf9615f0cda337d",
"assets/assets/images/arrow.png": "de0779b51ea8e9af179adfaaba4c516a",
"assets/assets/images/nolocation.png": "af77f84466efe0f66cd4a150070f7913",
"assets/assets/images/jonas.png": "d2a0f1d14a7363542cbedd3b62ab13f6",
"assets/assets/images/lenni.JPG": "62716396ea7b4e6a2c674b3e6f30c001",
"assets/assets/images/korball.png": "ac93930ab58a0aec9d122e0ae76f9d2c",
"assets/assets/images/reallenn.jpeg": "62716396ea7b4e6a2c674b3e6f30c001",
"assets/assets/images/korbfront.png": "c3c87b68fcae0fcd210dd3641eed4cfc",
"assets/assets/images/Kartenzahlung.png": "f11d3c8ee499ecae7f663cd79e3fc60b",
"assets/assets/images/korb.png": "d3b51242d8ea82bad72a85de78064b3f",
"assets/assets/images/persons/niklas.png": "9c6834848f16e120ec674b37e0956d3a",
"assets/assets/images/persons/jonas.png": "4a86ec430a56dca75d21513aac0d9809",
"assets/assets/images/persons/laurent.png": "423fa5cd3daac89f72e9c0040f7f09ea",
"assets/assets/images/persons/lenn.png": "7a3d28aa61ce0769b015cdad2b217ada",
"assets/assets/images/socials/Instagram.png": "a3f2c42fe55198f28d8ed81b574deb0e",
"assets/assets/images/socials/Youtube.png": "fa810ffa09edf4b7bcef5da1eeeab446",
"assets/assets/images/socials/Whatsapp.png": "1da285929bc51ab6ced7a3bc4196522c",
"assets/assets/images/socials/Facebook.png": "a801a4f6cdc29857385abfd4991f4b59",
"assets/assets/images/Laurent.JPG": "383caa428d798d37a42f35df908c135a",
"assets/assets/images/Barzahlung.png": "d60ac69009fc7723cfa3296f7ac5fc45",
"assets/assets/images/Paypal.png": "c43328b579c2e0f9147e16773132e124",
"assets/assets/images/basket.svg": "14f8eb293065a332259eb43fa4a669cd",
"assets/assets/images/lenn.png": "4a2410ef38d916f7866c3b2ca20ec7ea",
"assets/assets/images/rasen.png": "08f8c5fccc6496d044bb072d8d5e2e1f",
"assets/assets/icon/icon.png": "92ebd045b9c18a5b501537a7128bbd38",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
