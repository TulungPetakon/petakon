<script>
	import { isMobile } from '$lib/stores/app-readable.svelte';
	import { topBarMode } from '$lib/stores/app-writable.svelte';

	$effect(() => topBarMode.set($isMobile ? 'mobile' : 'default')); // Change TopBar on mobile screen
	$effect.pre(() => () => topBarMode.set('default')); // Set back to default Topbar after leaving the page
</script>

<section class="pt-20 px-[5%] md:px-[6.5%]">Haisss</section>
