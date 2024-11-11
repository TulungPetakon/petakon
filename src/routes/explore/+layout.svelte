<script>
	import { fade, fly } from 'svelte/transition';
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
	onDestroy(() => footerMode.set('hidden'));
</script>

<div
	class="overflow-hidden duration-200 transition-all"
	style="height: {heroHeight}px;"
	class:!h-0={isMapOpen}
>
	<Hero {district} bind:height={heroHeight} />
</div>

<Menu {onclick} {district} {onmap} {isMapOpen} bind:height={menuHeight} />

{#if isMapOpen}
	<div class="w-full overflow-hidden" style="height: {mapHeight}px;">
		<div
			class="w-full bg-slate-100 left-0 bottom-0 z-20 flex items-center justify-center"
			style="height: {mapHeight}px"
			transition:fly={{ y: 1000, duration: 200 }}
		>
			<span> Map In Progress</span>
		</div>
	</div>
{:else}
	<div in:fade>
		{@render children()}
	</div>
{/if}
