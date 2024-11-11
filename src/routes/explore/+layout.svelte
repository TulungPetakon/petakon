<script>
	import { getContext } from 'svelte';
	import Hero from './_hero.svelte';
	import Menu from './_menu.svelte';

	const { children, data } = $props();
	const { name: district } = $derived(data.district);

	let isMapOpen = $state(false);
	let heroHeight = $state();
	let menuHeight = $state();
	const scrollControl = getContext('scrollControl');
	const onclick = () => scrollControl({ scrollTo: heroHeight });
</script>

<Hero {district} bind:height={heroHeight} />

<Menu {onclick} {district} {isMapOpen} bind:height={menuHeight} />

{@render children()}
