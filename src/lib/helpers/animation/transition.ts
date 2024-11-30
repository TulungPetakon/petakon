// import { cubicOut } from 'svelte/easing';
import type {  FadeParams } from 'svelte/transition';

export const spin = (node: HTMLElement, options?: FadeParams & { times: number}) => {
	const { easing, duration = 300, times = 1, delay = 0 } = options || {};
	return {
		easing,
		duration,
		times,
		delay,
		css(t: number) {
			const degrees = 360 * times;
			return `transform: scale(${t}) rotate(${t * degrees}deg);`;
		}
	};
};

// export const popup = (node, options) => {
// 	const { easing, duration = 300, delay = 0 } = options || {};
// 	return {
// 		easing: easing || cubicOut,
// 		duration,
// 		delay,
// 		css: (t) => `transform:scale(${t}); transform-origin: bottom center;`
// 	};
// };
