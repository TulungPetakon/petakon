import { browser } from '$app/environment';
import { derived, readable } from 'svelte/store';

const getWindowSize = () => {
	if (!browser) return { width: 0, height: 0 };
	const height = window.innerHeight;
	const width = window.innerWidth;
	return { width, height };
};
export const screenSize = readable(getWindowSize(), (set) => {
	const setViewport = () => set(getWindowSize());
	setViewport();
	if (!browser) return;

	window.addEventListener('resize', setViewport);
	return () => window.removeEventListener('resize', setViewport);
});

export const isMobile = derived(screenSize, ($screenSize) => {
	if (!browser) return false;
	const { width } = $screenSize;
	return width <= 768;
});

export const isTab = derived(screenSize, ($screenSize) => {
	if (!browser) return false;
	const { width } = $screenSize;
	return width <= 1024;
});
