import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [imagetools(), sveltekit()],
	build: {
		chunkSizeWarningLimit: 350,
		target: ['es2020']
	}
});
