<script>
	import { afterNavigate } from '$app/navigation';
	import { getContext } from 'svelte';

	const { target, reset = false, scrollTo } = $props();

	const scrollControl = getContext('scrollControl');
	afterNavigate(() => {
		const scrollArea = document.querySelector(target);
		if (reset) scrollArea.scrollTo({ top: 0 });
		else if (scrollTo > 0) scrollArea.scrollTo({ top: scrollTo, behavior: 'smooth' });
		scrollControl({ reset: true });
	});
</script>
