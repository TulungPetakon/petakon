import path from 'path';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	compilerOptions: {
		runes: true
	},
	kit: {
		adapter: adapter(),
		alias: {
			$comp: path.resolve('./src/routes/_shared'),
			$post: path.resolve('./src/posts'),
			$images: path.resolve('./src/images')
		}
	}
};

export default config;
