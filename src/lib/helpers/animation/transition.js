export const spin = (node, options) => {
	const { easing, duration = 300, times = 1 } = options || {};
	return {
		easing,
		duration,
		times,
		css(t) {
			// Svelte takes care of applying the easing function.
			const degrees = 360 * times; // through which to spin
			return `transform: scale(${t}) rotate(${t * degrees}deg);`;
		}
	};
};
