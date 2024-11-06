import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { plugin as MdPlugin } from 'vite-plugin-markdown';
import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [imagetools(), sveltekit(), MdPlugin({ mode: 'html' })],
	build: {
		chunkSizeWarningLimit: 350,
		target: ['es2020']
	}
});
