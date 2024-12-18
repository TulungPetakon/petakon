<script module lang="ts">
	import { browser } from '$app/environment';
	export const scrollTargetPosition = (area: string, targetSelector: string): number => {
		if (!browser) return 0;
		const targetEl = document.querySelector(targetSelector) as HTMLElement;
		const scrollEl = document.querySelector(`${area} > div`);
		if (!(targetEl && scrollEl)) return 0;

		const { top: areaTop } = scrollEl.getBoundingClientRect();
		const { top: targetTop } = targetEl.getBoundingClientRect();
		const targetPosition = targetTop - areaTop;
		return targetPosition;
	};
</script>

<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { getContext } from 'svelte';
	import type { Utils } from '$lib/types/utils';
	import { scrollTop } from '$lib/stores/app-writable.svelte';

	const {
		target,
		reset = false,
		scrollTo = 0,
		duration = 300,
		instant
	}: Utils.ScrollControlParam & { target: string } = $props();

	const scrollControl: Utils.scrollControl = getContext('scrollControl');
	$effect(() => {
		if (!instant) return;
		const scrollArea = document.querySelector(target);
		if (!scrollArea) return;
		smoothScroll({ scrollArea, targetPosition: scrollTo, duration });
		scrollControl({ reset: true });
	});

	afterNavigate(() => {
		const scrollArea = document.querySelector(target);
		if (!scrollArea) return;
		if (reset) scrollArea.scrollTo({ top: 0 });
		else if (scrollTo > 0) {
			smoothScroll({ scrollArea, duration, targetPosition: scrollTo, startPosition: $scrollTop });
		}
		scrollControl({ reset: true });
	});

	type SmoothScrollParams = {
		scrollArea: Element;
		targetPosition: number;
		startPosition?: number;
		duration: number;
	};

	const smoothScroll = ({
		scrollArea,
		targetPosition,
		duration,
		startPosition
	}: SmoothScrollParams) => {
		const start = startPosition || $scrollTop;
		const distance = targetPosition - start;
		let startTime: number | null = null;

		const animation = (currentTime: number) => {
			if (startTime === null) startTime = currentTime;
			const timeElapsed = currentTime - startTime;
			const progress = Math.min(timeElapsed / duration, 1);

			const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
			const newPosition = start + distance * ease;
			scrollArea.scrollTo({ top: newPosition });

			if (timeElapsed >= duration) return;
			requestAnimationFrame(animation);
		};

		requestAnimationFrame(animation);
	};
</script>
