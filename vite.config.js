import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const iconSize = [16, 32, 72, 96, 128, 144, 152, 192, 256, 384, 512];
const icons = iconSize.map((size) => {
	const iconObj = {
		src: `./icons/${size}x${size}.png`,
		sizes: `${size}x${size}`,
		type: 'image/png'
	};
	if (size === 192) iconObj.purpose = 'maskable';
	if (size === 384) iconObj.purpose = 'any';
	return iconObj;
});

const manifest = {
	orientation: 'landscape',
	name: 'Peta Konektivitas Tulungagung',
	description: 'Jelajahi Destinasi Pilihan Kota Tulungagung',
	id: 'petakon.id',
	short_name: 'Petakon',
	theme_color: '#ffffff',
	background_color: '#0ea5e9',
	display: 'fullscreen',
	display_override: [
		'fullscreen',
		'window-controls-overlay',
		'standalone',
		'minimal-ui',
		'browser'
	],
	scope: '/',
	scope_extensions: [{ origin: 'https://petakon.id' }],
	start_url: '/?pwasc=homescreen',
	categories: ['games', 'utilities'],
	dir: 'auto',
	icons,
	// screenshots,
	handle_links: 'preferred',
	prefer_related_applications: true,
	launch_handler: {
		client_mode: ['focus-existing', 'auto']
	},
	// related_applications: [
	// 	{
	// 		platform: 'webapp',
	// 		url: `${VITE_HOST}/appmanifest.json`
	// 	},
	// 	{
	// 		platform: 'play',
	// 		url: 'https://play.google.com/store/apps/details?id=twa.wishsimulator.app',
	// 		id: 'twa.wishsimulator.app'
	// 	}
	// ],
	edge_side_panel: {
		preferred_width: 412
	}
};

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [
		imagetools(),
		sveltekit(),
		VitePWA({
			injectRegister: false, // Manual Registration in +layout.svelte
			strategies: 'injectManifest',
			srcDir: 'src/lib/client',
			outDir: '.svelte-kit/output/client',
			filename: 'sw.ts',
			registerType: 'prompt',
			manifestFilename: 'appmanifest.json',
			includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
			devOptions: { enabled: false, type: 'module' },
			manifest
		})
	],
	build: {
		chunkSizeWarningLimit: 350,
		target: ['es2020']
	}
	// base: '/static/',
	// experimental: {
	// 	renderBuiltUrl(filename, { hostType }) {
	// 		if (hostType === 'js') {
	// 			return { runtime: `window.cdnUrl(${JSON.stringify(filename)})` };
	// 		}
	// 		return { relative: true };
	// 	}
	// }
});
