<script>
	import { page } from '$app/stores';
	import GeneralInformation from './[page]/_general-information.svelte';
	const { kecamatan } = $derived($page.params);
</script>

<!-- Content -->
<GeneralInformation {kecamatan} />
