import type { Props } from './OverlayScrollbarsComponent.types.js';

export type Defer = [
	requestDefer: (callback: () => void, options?: Props['defer']) => void,
	cancelDefer: () => void
];

export const createDefer = (): Defer => {
	/* c8 ignore start */
	if (typeof window === 'undefined') {
		// mock ssr calls with "noop"
		const noop = () => {};
		return [noop, noop];
	}
	/* c8 ignore end */

	let idleId: number;
	let rafId: number;
	const wnd = window;
	const idleSupported = typeof wnd.requestIdleCallback === 'function';
	const rAF = wnd.requestAnimationFrame;
	const cAF = wnd.cancelAnimationFrame;
	const rIdle = idleSupported ? wnd.requestIdleCallback : rAF;
	const cIdle = idleSupported ? wnd.cancelIdleCallback : cAF;
	const clear = () => {
		cIdle(idleId);
		cAF(rafId);
	};

	return [
		(callback, options) => {
			clear();
			idleId = rIdle(
				idleSupported
					? () => {
							clear();
							// inside idle its best practice to use rAF to change DOM for best performance
							rafId = rAF(callback);
						}
					: callback,
				typeof options === 'object' ? options : { timeout: 2233 }
			);
		},
		clear
	];
};
