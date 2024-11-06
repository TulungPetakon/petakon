<script>
	import { isMobile } from '$lib/stores/app-readable.svelte';
	import { topBarMode } from '$lib/stores/app-writable.svelte';

	$effect.pre(() => () => topBarMode.set('default'));
	$effect(() => topBarMode.set($isMobile ? 'mobile' : 'default'));
</script>

<section>Haisss</section>
