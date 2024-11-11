<script>
	import { onDestroy, setContext } from 'svelte';
	import { OverlayScrollbars } from 'overlayscrollbars';
	import { createDefer } from './createDefer';
	import { scrollTop } from '$lib/stores/app-writable.svelte';
	import ScrollPositionControl from './ScrollPositionControl.svelte';

	const {
		element = 'div',
		options,
		events = [],
		defer,
		class: klass,
		children,
		...properties
	} = $props();

	// Contains client who listen scroll Event;
	const scrollFnList = [];
	setContext('scrollHandler', {
		add: (fn) => scrollFnList.push(fn),
		remove: (fn) => {
			const index = scrollFnList.indexOf(fn);
			if (index < 0) return;
			scrollFnList.splice(index, 1);
		}
	});

	// Since we use Overlayscrollbar instead of native scrollbar, Scroll event won't be retrived from window element
	events['scroll'] = (el, event) => {
		scrollTop.set(event.target.scrollTop);
		scrollFnList.forEach((fn) => fn(event));

		if (!properties['onscroll']) return;
		properties['onscroll'](event);
	};

	let scrollControl = $state({ reset: false, scrollTo: 0 });
	setContext('scrollControl', (val) => (scrollControl = val));

	// OverlayScrollBar
	let instance = $state();
	let elementRef = $state(null);
	let slotRef = $state(null);
	let combinedEvents = $state();
	let prevElement = $state();

	const [requestDefer, cancelDefer] = createDefer();

	const initialize = () => {
		const init = () => {
			const target = elementRef;

			if (!target) {
				return;
			}

			instance?.destroy();
			instance = OverlayScrollbars(
				element === 'body'
					? {
							target,
							cancel: {
								body: null
							}
						}
					: {
							target,
							elements: {
								viewport: slotRef,
								content: slotRef
							}
						},
				options || {},
				combinedEvents || {}
			);
		};

		if (defer) {
			requestDefer(init, defer);
		} else {
			init();
		}

		prevElement = element;
	};

	const dispatchEvents = {
		oninitialized: 'osInitialized',
		onupdated: 'osUpdated',
		ondestroyed: 'osDestroyed',
		onscroll: 'osScroll'
	};

	// const dispatchEvent = createEventDispatcher<{
	// 	osInitialized: EventListenerArgs['initialized'];
	// 	osUpdated: EventListenerArgs['updated'];
	// 	osDestroyed: EventListenerArgs['destroyed'];
	// 	osScroll: EventListenerArgs['scroll'];
	// }>();

	export const osInstance = () => instance;
	export const getElement = () => elementRef;

	const destroyScrollbar = () => {
		cancelDefer();
		instance?.destroy();
	};
	onDestroy(destroyScrollbar);

	$effect(() => {
		if (prevElement !== element) {
			initialize();
		}
	});

	const currEvents = $derived(events || {});
	$effect(() => {
		combinedEvents = Object.keys(dispatchEvents).reduce((obj, name) => {
			const eventName = name.replace('on', '');
			const eventListener = currEvents[eventName];
			obj[eventName] = [
				(...args) => (properties[name] || (() => 0))(args),
				...(Array.isArray(eventListener) ? eventListener : [eventListener]).filter(Boolean)
			];
			return obj;
		}, {});
	});

	$effect(() => {
		if (OverlayScrollbars.valid(instance)) {
			instance.options(options || {}, true);
		}
	});

	$effect(() => {
		if (OverlayScrollbars.valid(instance)) {
			instance.on(combinedEvents || {}, true);
		}
	});
</script>

<ScrollPositionControl target="div[data-overlayscrollbars-contents]" {...scrollControl} />

<svelte:element
	this={element}
	data-overlayscrollbars-initialize=""
	bind:this={elementRef}
	{...properties}
>
	{#if element === 'body'}
		{@render children()}
	{:else}
		<div data-overlayscrollbars-contents="" class={klass} bind:this={slotRef}>
			{@render children()}
		</div>
	{/if}
</svelte:element>

<style>
	:global {
		.mobile .os-theme-dark,
		.mobile .os-theme-light {
			--os-size: 0.5rem;
		}
	}
</style>
