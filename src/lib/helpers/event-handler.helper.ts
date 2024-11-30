type Callback = (e: Event, ...args: unknown[]) => void;

export function preventDefault(fn: Callback) {
	return function (...args: unknown[]) {
		const event = args[0] as Event;
		event.preventDefault();
		return fn?.apply(this, [event, ...args]);
	};
}

export const self = (fn: Callback) => {
	return function (...args: unknown[]) {
		const event = args[0] as Event;
		if (event.target === this) {
			fn?.apply(this, [event, ...args]);
		}
	};
};

export function stopPropagation(fn: Callback) {
	return function (...args: unknown[]) {
		const event = args[0] as Event;
		event.stopPropagation();
		return fn?.apply(this, [event, ...args]);
	};
}

export function once(fn: Callback) {
	let ran = false;
	return function (...args: unknown[]) {
		if (ran) return;
		ran = true;
		return fn?.apply(this, [args[0] as Event, ...args]);
	};
}

export function stopImmediatePropagation(fn: Callback) {
	return function (...args: unknown[]) {
		const event = args[0] as Event;
		event.stopImmediatePropagation();
		return fn?.apply(this, [event, ...args]);
	};
}
