<script>
	import Activities from '../activities/+page.svelte';

	const { data } = $props();
	const { name: district } = data.district;
</script>

<!-- Content -->
<Activities {district} />
