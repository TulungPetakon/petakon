<script>
	import { fade } from 'svelte/transition';
	import { getContext, onDestroy } from 'svelte';
	import Hero from './_hero.svelte';
	import Menu from './_menu.svelte';
	import { screenSize } from '$lib/stores/app-readable.svelte';
	import { footerMode, topbarHeight } from '$lib/stores/app-writable.svelte';

	const { children, data } = $props();
	const { name: district } = $derived(data.district);

	let isMapOpen = $state(false);
	let heroHeight = $state();
	let menuHeight = $state();
	const mapHeight = $derived($screenSize.height - $topbarHeight - menuHeight);
	const scrollControl = getContext('scrollControl');
	const onclick = () => scrollControl({ scrollTo: heroHeight });

	const onmap = () => {
		isMapOpen = !isMapOpen;
		footerMode.set(!isMapOpen ? 'default' : 'hidden');
		// scrollControl({ scrollTo: heroHeight, instant: true });
	};
	onDestroy(() => footerMode.set('default'));
</script>

<div
	class="overflow-hidden duration-200 transition-all rounded-br-[2.5rem] md:rounded-br-[4rem]"
	style="height: {heroHeight}px;"
	class:!h-0={isMapOpen}
>
	<Hero {district} bind:height={heroHeight} />
</div>

<Menu {onclick} {district} {onmap} {isMapOpen} bind:height={menuHeight} />

{#if isMapOpen}
	<div
		class="w-full bg-slate-100 left-0 bottom-0 z-20 flex items-center justify-center"
		style="height: {mapHeight}px"
		in:fade={{ duration: 200 }}
	>
		<span> Map In Progress </span>
	</div>
{:else}
	<div in:fade>
		{@render children()}
	</div>
{/if}
