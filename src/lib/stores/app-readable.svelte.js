import { browser } from '$app/environment';
import { mobileDetect } from '$lib/helpers/mobile-detect';
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
	return (mobileDetect() && width < 1024) || width < 768;
});
