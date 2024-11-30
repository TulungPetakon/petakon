<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { getContext } from 'svelte';
	import type { Utils } from '$lib/types/utils';

	const {
		target,
		reset = false,
		scrollTo = 0,
		instant
	}: Utils.ScrollControlParam & { target: string } = $props();

	const scrollControl: Utils.scrollControl = getContext('scrollControl');
	$effect(() => {
		if (!instant) return;
		const scrollArea = document.querySelector(target) as HTMLElement;
		scrollArea.scrollTo({ top: scrollTo, behavior: 'smooth' });
		scrollControl({ reset: true });
	});

	afterNavigate(() => {
		const scrollArea = document.querySelector(target);
		if (!scrollArea) return;
		if (reset) scrollArea.scrollTo({ top: 0 });
		else if (scrollTo > 0) scrollArea.scrollTo({ top: scrollTo, behavior: 'smooth' });
		scrollControl({ reset: true });
	});
</script>
