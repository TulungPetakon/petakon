<script>
	import { page } from '$app/stores';
	import GeneralInformation from './_general-information.svelte';
	const { kecamatan, page: target } = $derived($page.params);
</script>

{#if target === 'general'}
	<GeneralInformation {kecamatan} />
{/if}
