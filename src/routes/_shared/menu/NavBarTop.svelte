<script>
	import { page } from '$app/stores';
	import { topBarMode } from '$lib/stores/app-writable.svelte';
	import DefaultTopBar from './DefaultTopBar.svelte';
	const isApp = $derived(/\/((?!main).[a-zA-Z0-9]+)/.test($page.route.id));
</script>

{#if $topBarMode === 'default'}
	<DefaultTopBar solidBG={isApp} />
{/if}
