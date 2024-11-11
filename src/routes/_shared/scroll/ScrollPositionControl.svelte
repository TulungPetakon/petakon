<script>
	import { afterNavigate } from '$app/navigation';
	import { getContext } from 'svelte';

	const { target, reset = false, scrollTo, instant } = $props();

	const scrollControl = getContext('scrollControl');
	$effect(() => {
		if (!instant) return;
		const scrollArea = document.querySelector(target);
		scrollArea.scrollTo({ top: scrollTo, behavior: 'smooth' });
		scrollControl({ reset: true });
	});

	afterNavigate(() => {
		const scrollArea = document.querySelector(target);
		if (reset) scrollArea.scrollTo({ top: 0 });
		else if (scrollTo > 0) scrollArea.scrollTo({ top: scrollTo, behavior: 'smooth' });
		scrollControl({ reset: true });
	});
</script>
