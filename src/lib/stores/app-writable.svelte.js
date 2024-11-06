import { writable } from 'svelte/store';

export const scrollTop = writable(0);
export const topBarMode = writable('default');

export const cart = writable([]);
