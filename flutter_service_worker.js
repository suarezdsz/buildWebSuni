'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c9d864ce0a2c8392d8c87d539219311a",
"assets/assets/avatars/avatar-1.jpg": "a834f9232d0ea4507bfdcf46ba69ab78",
"assets/assets/avatars/avatar-2.jpg": "36dc1e866b30b68f446490f32d1a2113",
"assets/assets/avatars/avatar-3.jpg": "5bcd881334bad5da1b5d159f45299d3c",
"assets/assets/avatars/avatar-4.jpg": "0dae79bba26fcc67a1f7e1864620b710",
"assets/assets/avatars/avatar-5.jpg": "357419a00605103373ee30a316abaa05",
"assets/assets/avatars/avatar-6.jpg": "bda39b2a012494c30d507dd92bdf8c78",
"assets/assets/avatars/avatar-7-line.png": "81fab0d77100fa0ad8aef865bb4c9440",
"assets/assets/avatars/avatar-7.png": "b1e38a6a591b7f91c0441d59b31d9a85",
"assets/assets/avatars/default-avatar.jpg": "638f5bd9a564e5d9dfd077066ccb99bb",
"assets/assets/font/BRLNSDB.TTF": "b6539b6d3432c623d8d4f9cc2a29589e",
"assets/assets/font/GOTHIC.TTF": "cfce6abbbff0099b15691345d8b94dcc",
"assets/assets/font/GOTHICB.TTF": "bc420c1c2b98e2ee8b2a75c1ce1fe083",
"assets/assets/font/Lemon-Regular.ttf": "758546ad186e3d78f799269ccf6fdf54",
"assets/assets/font/OpenSans-Bold.ttf": "50145685042b4df07a1fd19957275b81",
"assets/assets/font/OpenSans-Light.ttf": "1bf71be111189e76987a4bb9b3115cb7",
"assets/assets/font/OpenSans-Regular.ttf": "629a55a7e793da068dc580d184cc0e31",
"assets/assets/font/OpenSans-Semibold.ttf": "33f225b8f5f7d6b34a0926f58f96c1e9",
"assets/assets/font/Poppins-Regular.ttf": "e212f84086965da44a6c84f3d9a683a4",
"assets/assets/font/Poppins-SemiBold.ttf": "f018d93c4bd9b0bbdfb82ae61ebf8da4",
"assets/assets/font/pragmatica_bold.ttf": "2e7d0055f5ff4174e083b39941558d66",
"assets/assets/font/Quicksand/Quicksand-Regular.ttf": "6cbafd2cb6e973c96ade779edc39c62a",
"assets/assets/icon/ic_gainers.ttf": "6f92874cb8c0930400101ee77627cf38",
"assets/assets/icon/ic_loser.ttf": "a825017bebac065be0b209141ee9f85b",
"assets/assets/icon/ic_message.ttf": "53a57438e3f2bfcb1989c5a7c2433852",
"assets/assets/icon/ic_tab.ttf": "828b89d71a8a5621ff938f2a54500cab",
"assets/assets/icon/ic_tab1.ttf": "972ee70fccb89f92b8292f6c4be13902",
"assets/assets/icon/ic_tab2.ttf": "84145320ddb5dd457786430b8211520d",
"assets/assets/icon/ic_tab3.ttf": "48bca81cdd4d6f1a6b5decc9ea9a22fb",
"assets/assets/icon/ic_tab4.ttf": "406803564c523038f12e48f485078c56",
"assets/assets/icon/ic_tab5.ttf": "dfc6e31495637e1cea51d19ded79d866",
"assets/assets/icon/ic_wallet.ttf": "5fda9f379e5ed7c091d27e018bcffb7d",
"assets/assets/icon/Template4/aboutapp.png": "b6ff9281d6bf1052c801a9f06fcaf059",
"assets/assets/icon/Template4/callcenter.png": "dde8d13a704aa671ec463ec9985d74d3",
"assets/assets/icon/Template4/chat.png": "b4f6361fc6d19711e41a53621cb8ed56",
"assets/assets/icon/Template4/creditAcount.png": "803a8183256a0c4a0b5e6d8909c4c352",
"assets/assets/icon/Template4/notification.png": "c361105c9668ec0c9a74030a1826b155",
"assets/assets/icon/Template4/setting.png": "1e3b169ec0846b26d00637d9b708af7e",
"assets/assets/icon/Template4/truck.png": "6cc42e19187a6b2ecc83952a3f99cf75",
"assets/assets/ilustration/boarding1.png": "3a710929dc0002a6aff5b705e6e6943e",
"assets/assets/ilustration/boarding2.png": "5bbf17098d1c7b9adb9419ed67cf622d",
"assets/assets/ilustration/boarding3.png": "8c689ab08d528a1c969b33c551e2abfd",
"assets/assets/ilustration/noData.png": "28d685be365f57f53db7c80580c30a55",
"assets/assets/image/article1.jpg": "97630f18cd8037f2a7c138eac2ccb9f7",
"assets/assets/image/banner/banner1.png": "7b41265a0ce8680d6e3d76b8197f712f",
"assets/assets/image/banner/banner2.png": "0433e8394a0bd89165048477817b12d8",
"assets/assets/image/banner/banner3.jpg": "73d994fa79d3c3d480b45f06e791058f",
"assets/assets/image/banner/banner4.png": "88698c07fd27642e8e1d9b9ab7c09460",
"assets/assets/image/create_wallet.png": "2965d7890611d0325873d23751f55cfe",
"assets/assets/image/crypto_icon/icon_bee.png": "b7ede0e84d76b71dba5e731921011dd0",
"assets/assets/image/crypto_icon/icon_bitcoin.png": "6df89c301d03ff807b31c15b18e5265c",
"assets/assets/image/crypto_icon/icon_elf.png": "62297e3e748e44f3427837ca827f0046",
"assets/assets/image/crypto_icon/icon_eth.png": "3930a8776ce33fb8d78890978ac4a255",
"assets/assets/image/crypto_icon/icon_lnc.png": "e9c4ca6e4f2f637fc5d730840507fa4b",
"assets/assets/image/gainers.png": "4912f631ebe01a4b12918997c84afcb0",
"assets/assets/image/icon/icon_file.png": "130a1e5084c3d76a59553207b8eebc7e",
"assets/assets/image/icon/icon_image.png": "108ca1efb00de61d420eeb3fb3dae3a9",
"assets/assets/image/icon/icon_microphone.png": "a11d902a6328bfe5f08ce0e86bec3b94",
"assets/assets/image/icon/icon_monitor.png": "6cbd24c73a10f24d80b078411d2fd171",
"assets/assets/image/icon/icon_video.png": "20f03bea0d8f45934875158312e46c38",
"assets/assets/image/loginHeader.png": "e8312fe23c3567c8ce0f12a0bac5239d",
"assets/assets/image/logo.png": "683e80419a5719799e940cc65bfd9fc0",
"assets/assets/image/logoApps.png": "22ce0e0f27290382c5c5692b1d9f5a16",
"assets/assets/image/losers.png": "62570020776004c35ed7b88cac5a92bf",
"assets/assets/image/market/ae.png": "2bc3b60dbe46f96487d6e76a2e23457e",
"assets/assets/image/market/aion.png": "f3b5caa6657acc8c0bb1471b0ee2386f",
"assets/assets/image/market/bat.png": "fd9f5a283573561534bd4fb38989e706",
"assets/assets/image/market/BCH.png": "93301c27203e15bb2db9228eaf7e450b",
"assets/assets/image/market/bee.png": "36a851e9267234c5af783025ea017e95",
"assets/assets/image/market/bitcoin.png": "19b5ef5e482295da7d85e8b13b0f9069",
"assets/assets/image/market/bnt.png": "61e6995ffe69be55520291dc815ec898",
"assets/assets/image/market/btc.png": "da098387b661f5ae70db510b665b47b6",
"assets/assets/image/market/dnt.png": "e0d6331e5f9992c5ad5a52582b7a7b1a",
"assets/assets/image/market/elf.png": "8585fea7a7d715fb9d69018bec11b97a",
"assets/assets/image/market/EOS.png": "9555d743fba649f0fe33afd431fb445b",
"assets/assets/image/market/ETC.png": "e039e3238f57bd7a6d402e94a73576e1",
"assets/assets/image/market/eth.png": "64a870fc8b55076093a31746f1f30a8c",
"assets/assets/image/market/NEO.png": "8f673eb32cd54078412cb85041bf9353",
"assets/assets/image/market/RIPLE.png": "9afef49297e53903ac43a532e6c9c495",
"assets/assets/image/messageAppbar.png": "35911b4ca88d5ca388e4b292c353e366",
"assets/assets/image/News_Image/Asia.jpg": "464ca415aafbb9cc5f3e9858f6e0511d",
"assets/assets/image/News_Image/BlockStream.jpg": "95cd3fda2f6e3febe9b8b26f22559441",
"assets/assets/image/News_Image/BNB.jpg": "3d998268ddbe86e3e36276875d6ea56d",
"assets/assets/image/News_Image/CBOE.jpg": "3927dd58eb358b27abf3ca3b86777cae",
"assets/assets/image/News_Image/CryptoBroker.jpg": "70a56e5cd142aaad45d07f419b2a39e9",
"assets/assets/image/News_Image/EOSget.jpg": "cc0a5ea090963d24a115f30d609748f8",
"assets/assets/image/News_Image/MarketSentiment.jpg": "683fed2ad558aeb1581244ef70300051",
"assets/assets/image/News_Image/Mt.Gox.jpg": "453b134b0c0ba7f1bd30e8efc5dc4d07",
"assets/assets/image/News_Image/NewCripto.jpg": "0d64146a5ee28ef99e792f034d23bcaa",
"assets/assets/image/News_Image/Twitter.jpg": "d9cc59b6b2f628ed0cdc050250741bbf",
"assets/assets/image/News_Image/YouCan.jpg": "9f0d44b51ab312a25767ecad6913c36b",
"assets/assets/image/News_Image/Ziliqa.jpg": "6706fcc73714c3577f6dfcd8ea0f8340",
"assets/assets/image/qrCode.png": "2c5632677db37f4b601fbc7ceb76cd27",
"assets/assets/image/setting/lightMode.png": "9a104dcb87af51abe760cdaf06f0885d",
"assets/assets/image/setting/nightMode.png": "d63711fdc122af4f8b589fa5f199dbef",
"assets/assets/image/signupHeader.png": "6feebaa01acb623a85a53774051df1d6",
"assets/assets/image/splash_screen.png": "170fed2741c47b2f3205c0899b6a6543",
"assets/assets/image/T1_noMessage.png": "35a88cce609a23b21bf239d003aeb0d8",
"assets/assets/image/Template_2_image/tabBar.png": "087acc6128f3c8211d7c83b941c45c6f",
"assets/assets/image/Template_3/deals_layout/buildingMenu.png": "895908a111affb1d3e37f7981ceae14f",
"assets/assets/image/Template_3/deals_layout/cardMenu.png": "f34ed2619b5b3fd6ff3779569ea2bb44",
"assets/assets/image/Template_3/deals_layout/financeMenu.png": "9d32e43661ec517f2b51811e070c75b5",
"assets/assets/image/Template_3/deals_layout/findMenu.png": "4e9b422f7e832de5c3a2d0cef1a505a4",
"assets/assets/image/Template_3/deals_layout/giveMenu.png": "835efa3a9a5bb385baac8697e638334c",
"assets/assets/image/Template_3/deals_layout/growthMenu.png": "12b994f536c5bac7f5799952197ead2b",
"assets/assets/image/Template_3/deals_layout/locationMenu.png": "77951eb9e250f38b16df4e01041207b9",
"assets/assets/image/Template_3/deals_layout/moneyMenu.png": "62d4cd6154bac2d7de7f6fec0b8a7eba",
"assets/assets/image/Template_3/deals_layout/saveMenu.png": "f4f09e8625eaf9f3493cdf4e67f39cbd",
"assets/assets/image/Template_3/deals_layout/shareMenu.png": "a5f019394f1b9bacc77ce7698622494e",
"assets/assets/image/Template_3/finance_layout/bils_finance.png": "767d6c8d52a127e05645e9b9c4af39a5",
"assets/assets/image/Template_3/finance_layout/doctor_finance.png": "3b593002f1308f99eac5904fd32a9e78",
"assets/assets/image/Template_3/finance_layout/hangout_finance.png": "6f1e6f07868b6979ba8be90322e26ddf",
"assets/assets/image/Template_3/finance_layout/lifeStyle_finance.png": "684d6b91dfcf7493e3d23d5d9095ca41",
"assets/assets/image/Template_3/finance_layout/workout_finance.png": "bc70ce56cca72aa7d3deca1599b1a9fd",
"assets/assets/image/Template_3/historyEmpty.png": "3e85c369e2a87e081b534acd0a760ebb",
"assets/assets/image/Template_3/menu_bus.png": "e711e12eb8bf521b35f166dbd4a43cec",
"assets/assets/image/Template_3/menu_home.png": "caec34ba2ef74f8fe349335ae3d2fd1e",
"assets/assets/image/Template_3/menu_shopping.png": "bfa7ccb75ec463992e14804607fbe06b",
"assets/assets/image/Template_3/menu_tv.png": "72c19fef0ae575e145ac4b0eff05f7a2",
"assets/assets/image/Template_3/people.png": "30c5171cce284fa20d04b433833d71a9",
"assets/assets/image/Template_3/scan.png": "8bf18cba9de7129e2b583ab5b4a02717",
"assets/assets/image/Template_3/slackLogo.png": "2bbdc6ba7610782430324e5d63b6f810",
"assets/assets/image/Template_3/solariaLogo.jpg": "bc6658215520449bc6b841d1672ba96b",
"assets/assets/image/Template_3/transfer.png": "c7f2ddbebfe11fb53a41d8e5929e813a",
"assets/assets/image/Template_3/twitchLogo.png": "1a0fdd6795095fa43025dbe05ac42e50",
"assets/assets/image/Template_4/contact_us.png": "198386a812d7e6f08fe51f70ad11c914",
"assets/assets/image/Template_4/credit.png": "4a42ca2b489fbc6604f3397de8add0ee",
"assets/assets/image/Template_4/creditCardVisa.png": "48f434ce74db1c402a583acefaa2830c",
"assets/assets/image/Template_4/noMessage.png": "3101a391c1941ecc34bd3255ea987ffc",
"assets/assets/image/Template_4/notifications.png": "7bc310a08c9acad67ec001105ff11c27",
"assets/assets/image/Template_5/alarm.png": "e2e99483aac34c548296a334a31d12de",
"assets/assets/image/Template_5/creditCard.png": "5a2febeae3684241a498bd8576e57d3d",
"assets/assets/image/Template_5/noTransaction.png": "19fa617f7b33a596400c270dfc6d6d06",
"assets/assets/suni/images/amazon.png": "9f872118dd469190e1e3b4240c681669",
"assets/assets/suni/images/banner.png": "25f09805d1c4d04f6ab664c798b3b72f",
"assets/assets/suni/images/banner_crypto.jpg": "546b673c8e950bf3c37fc3366cbffef4",
"assets/assets/suni/images/banner_purple.png": "4c9114a2313cd3e08c92feb7a5f439b8",
"assets/assets/suni/images/bg_people.png": "84446f358fead3da8bc76a8a382b1efe",
"assets/assets/suni/images/bg_suni.png": "ce636f31c368c39c4f705f580cef5bd4",
"assets/assets/suni/images/dark-minimal.jpg": "90c73f746a02b9b11603b66e4fd6b810",
"assets/assets/suni/images/delta.jpg": "42343040a7d450f004050760f8ff1b4c",
"assets/assets/suni/images/icon_coin.png": "62d0aff83eb03cb8be184a4e58ce2342",
"assets/assets/suni/images/jomashop.png": "fc27d7e1433c785df6bfcfb8fcec9eaa",
"assets/assets/suni/images/lighting.png": "8d8f5b3d66de758aa5bedde45dc284df",
"assets/assets/suni/images/lightning_logo.png": "5138f72e3b581ce5f05717771fdf8591",
"assets/assets/suni/images/menu_admin.png": "c9985b44f5da4a873a81a627b2c8144d",
"assets/assets/suni/images/menu_buy.png": "c59fbfc8a905b52f9b57260de268f726",
"assets/assets/suni/images/menu_recive.png": "81ae3c1348f08bb060f65fff8a0b0b63",
"assets/assets/suni/images/menu_refer.png": "7d02556be4b619710560fc09e65b1d29",
"assets/assets/suni/images/menu_send.png": "089de21684e14ee8dbfab02cf4eb0076",
"assets/assets/suni/images/newegg.jpg": "50fd9facffa870e884cd6a30a6a7721e",
"assets/assets/suni/images/people.png": "4f06d53b1b23a44f1ce3f449e9bd88bf",
"assets/assets/suni/images/qr.jpg": "413b47a1b1e6f0c04db4d3c5bb514838",
"assets/assets/suni/images/splash.jpeg": "32460eaa4593c17b37086a1dd1846b46",
"assets/assets/suni/logo/bitcoin.png": "6640f6c94a3ed9df59b31bb881a91415",
"assets/assets/suni/logo/suni.png": "345f26366a74e495e94a6543f521dd6e",
"assets/FontManifest.json": "654f63bf4e44f1bf5019dfe57e962548",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "152fb58208dfc27cade6f37029a19a91",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1c245860b2655f72be94459e1c774597",
"/": "1c245860b2655f72be94459e1c774597",
"main.dart.js": "719c71506a24e8dc5dccc7dd7de5cde3",
"manifest.json": "dba2f7e3b459a159c1d87d988d11b24e",
"version.json": "81c3590f0ca4bebb9f5c77f75db35d94"
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
