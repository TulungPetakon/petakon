<script>
	import { fade } from 'svelte/transition';
	import { getContext, onDestroy, setContext } from 'svelte';
	import Hero from './_hero.svelte';
	import Menu from './_menu.svelte';
	import { screenSize } from '$lib/stores/app-readable.svelte';
	import { footerMode, topbarHeight } from '$lib/stores/app-writable.svelte';

	const { children, data } = $props();
	const { name: district } = $derived(data.district);

	let heroHeight = $state();
	let menuHeight = $state();
	const mapHeight = $derived($screenSize.height - $topbarHeight - menuHeight);
	const scrollControl = getContext('scrollControl');
	const onclick = () => scrollControl({ scrollTo: heroHeight });

	let isMapOpen = $state(false);
	let mapData = $state({ location: '' });
	const mapToggle = ({ location, action = null }) => {
		if (typeof action !== 'string') {
			isMapOpen = !isMapOpen;
			mapData = {};
			return;
		}

		const isOpen = action === 'open';
		mapData = { location };
		isMapOpen = isOpen;
		// scrollControl({ scrollTo: heroHeight, instant: true });
	};
	$effect(() => footerMode.set(!isMapOpen ? 'default' : 'hidden'));

	setContext('mapToggle', mapToggle);
	onDestroy(() => footerMode.set('default'));
</script>

<div
	class="overflow-hidden duration-200 transition-all rounded-br-[2.5rem] md:rounded-br-[4rem]"
	style="height: {heroHeight}px;"
	class:!h-0={isMapOpen}
>
	<Hero {district} bind:height={heroHeight} />
</div>

<Menu {onclick} {district} {isMapOpen} bind:height={menuHeight} />

{#if isMapOpen}
	<div
		class="w-full bg-slate-100 left-0 bottom-0 z-20 flex items-center justify-center"
		style="height: {mapHeight}px"
		in:fade={{ duration: 200 }}
	>
		<span> Map In Progress </span>
	</div>
{:else}
	<div in:fade style="min-height:{mapHeight}px">
		{@render children()}
	</div>
{/if}
