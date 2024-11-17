<script>
	import Activities from '../activities/main.svelte';

	const { data } = $props();
</script>

<!-- Content -->
<Activities district={data?.district?.name} destinations={data.destinations} />
