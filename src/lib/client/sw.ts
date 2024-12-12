import { setCacheNameDetails, skipWaiting, clientsClaim } from 'workbox-core';
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration/ExpirationPlugin';

const cacheVersion = 'v2';
const maxAgeSeconds = 7 * 24 * 60 * 60; // 7 Days
const maxEntries = 60;

clientsClaim();
skipWaiting();
cleanupOutdatedCaches();

setCacheNameDetails({
	prefix: 'PK',
	precache: 'Core',
	suffix: cacheVersion
});

// @ts-ignore
let precache = self.__WB_MANIFEST;
precache = [];
precacheAndRoute(precache, { ignoreURLParametersMatching: [/.*/] });

registerRoute('/', new NetworkFirst({ cacheName: `PK-Static-${cacheVersion}` }));

registerRoute(
	({ url, request }) => {
		const assetpath = url.pathname.includes('/internal/immutable/assets');
		const iconPath = url.pathname.includes('/icons');
		const assets = assetpath || iconPath;

		const matchAssets = url.href.match(new RegExp('.(?:svg|webp|jpg|png|jpeg|css|js)')) || [];
		const isMatch = matchAssets.length > 0;
		const isAssets = request.destination === 'image' || isMatch || assets;
		return isAssets;
	},
	new CacheFirst({
		cacheName: `PK-Static-${cacheVersion}`,
		plugins: [
			new ExpirationPlugin({
				maxEntries,
				maxAgeSeconds
			})
		]
	})
);

registerRoute(
	({ url }) => url.href.match(/\/fonts\//),
	new StaleWhileRevalidate({
		cacheName: `PK-Static-${cacheVersion}`,
		plugins: [
			new ExpirationPlugin({
				maxEntries,
				maxAgeSeconds
			})
		]
	})
);
