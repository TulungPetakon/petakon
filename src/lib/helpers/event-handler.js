/**
 * Substitute for the `preventDefault` event modifier
 * @param {(event: Event, ...args: Array<unknown>) => void} fn
 * @returns {(event: Event, ...args: unknown[]) => void}
 */
export function preventDefault(fn) {
	return function (...args) {
		const event = args[0];
		event.preventDefault();
		return fn?.apply(this, args);
	};
}

/**
 * Substitute for the `self` event modifier
 * @param {(event: Event, ...args: Array<unknown>) => void} fn
 * @returns {(event: Event, ...args: unknown[]) => void}
 */
export function self(fn) {
	return function (...args) {
		var event = /** @type {Event} */ (args[0]);
		// @ts-ignore
		if (event.target === this) {
			// @ts-ignore
			fn?.apply(this, args);
		}
	};
}

/**
 * Substitute for the `stopPropagation` event modifier
 * @param {(event: Event, ...args: Array<unknown>) => void} fn
 * @returns {(event: Event, ...args: unknown[]) => void}
 */
export function stopPropagation(fn) {
	return function (...args) {
		var event = /** @type {Event} */ (args[0]);
		event.stopPropagation();
		return fn?.apply(this, args);
	};
}

/**
 * Substitute for the `once` event modifier
 * @param {(event: Event, ...args: Array<unknown>) => void} fn
 * @returns {(event: Event, ...args: unknown[]) => void}
 */
export function once(fn) {
	var ran = false;
	return function (...args) {
		if (ran) return;
		ran = true;
		return fn?.apply(this, args);
	};
}

/**
 * Substitute for the `stopImmediatePropagation` event modifier
 * @param {(event: Event, ...args: Array<unknown>) => void} fn
 * @returns {(event: Event, ...args: unknown[]) => void}
 */
export function stopImmediatePropagation(fn) {
	return function (...args) {
		var event = /** @type {Event} */ (args[0]);
		event.stopImmediatePropagation();
		return fn?.apply(this, args);
	};
}
