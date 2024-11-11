<script>
	import { footerMode } from '$lib/stores/app-writable.svelte';
	import DefaultFooter from './DefaultFooter.svelte';
</script>

{#if $footerMode === 'default'}
	<DefaultFooter />
{/if}
