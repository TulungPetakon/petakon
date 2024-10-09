import { writable } from 'svelte/store';

export const scrollTop = writable(0);
export const screenSize = writable({ width: 0, height: 0 });
export const isMobile = writable(false);
