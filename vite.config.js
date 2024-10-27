import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { plugin as MdPlugin } from 'vite-plugin-markdown';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [imagetools(), sveltekit(), MdPlugin({ mode: 'html' })],
	resolve: {
		alias: {
			$comp: path.resolve(__dirname, './src/components'),
			$posts: path.resolve(__dirname, './src/posts'),
			'@images': path.resolve(__dirname, './src/images')
		}
	},
	build: {
		chunkSizeWarningLimit: 350,
		target: ['es2020']
	}
});
