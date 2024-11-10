<script>
	import { page } from '$app/stores';
	import { getContext } from 'svelte';
	import Hero from './_hero.svelte';
	import Menu from './_menu.svelte';

	const { children } = $props();
	const { kecamatan, page: content } = $derived($page.params);

	let heroHeight = $state();
	const scrollControl = getContext('scrollControl');
	const onclick = () => scrollControl({ scrollTo: heroHeight });
</script>

<section>
	<Hero {kecamatan} bind:height={heroHeight} />

	<!-- Navigation -->
	<Menu {onclick} page={content} {kecamatan} />

	{@render children()}
</section>
