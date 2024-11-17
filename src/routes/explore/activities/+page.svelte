<script>
	import Main from './main.svelte';

	const { data } = $props();
	const { destinations = [], district } = $derived(data || {});
</script>

<Main {destinations} district={district.name} />
