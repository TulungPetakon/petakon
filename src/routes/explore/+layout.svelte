<script lang="ts">
	import { fade } from 'svelte/transition';
	import { getContext, onDestroy, setContext } from 'svelte';
	import { screenSize } from '$lib/stores/app-readable.svelte';
	import { footerMode, topbarHeight } from '$lib/stores/app-writable.svelte';
	import Hero from './_main/_hero.svelte';
	import Menu from './_main/_menu.svelte';
	import type { PKMap } from '$lib/types/map';
	import type { Utils } from '$lib/types/utils';

	const { children, data } = $props();
	const district = $derived(data.district.name) as App.District;

	let heroHeight = $state(0);
	let menuHeight = $state(0);
	const mapHeight = $derived($screenSize.height - $topbarHeight - menuHeight);
	const scrollControl: Utils.scrollControl = getContext('scrollControl');
	const onclick = () => scrollControl({ scrollTo: heroHeight });

	let isMapOpen = $state(false);
	let mapData: PKMap.Location = $state({});
	const mapToggle: PKMap.Toggle = (param) => {
		if (typeof param?.action === 'string') {
			const { location, action } = param;
			const isOpen = action === 'open';
			mapData = location;
			isMapOpen = isOpen;
			return;
		}
		isMapOpen = !isMapOpen;
		mapData = { 0: 0 };
	};
	$effect(() => footerMode.set(!isMapOpen ? 'default' : 'hidden'));

	setContext('mapToggle', mapToggle);
	onDestroy(() => footerMode.set('default'));
</script>

<div
	class="overflow-hidden rounded-br-[2.5rem] transition-all duration-200 md:rounded-br-[4rem]"
	style="height: {heroHeight}px;"
	class:!h-0={isMapOpen}
>
	<Hero {district} bind:height={heroHeight} />
</div>

<Menu {onclick} {district} {isMapOpen} bind:height={menuHeight} />

{#if isMapOpen}
	<div
		class="bottom-0 left-0 z-20 flex w-full items-center justify-center bg-slate-100"
		style="height: {mapHeight}px"
		in:fade={{ duration: 200 }}
	>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505636.05801829736!2d111.5869938517723!3d-8.072724083247827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78e3b74eb610b9%3A0x3027a76e352be20!2sKabupaten%20Tulungagung%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1731827674308!5m2!1sid!2sid"
			style="border:0;"
			allowfullscreen={true}
			loading="lazy"
			class="size-full"
			referrerpolicy="no-referrer-when-downgrade"
			title="Tulungagung Map"
		></iframe>
	</div>
{:else}
	<div in:fade style="min-height:{mapHeight}px">
		{@render children()}
	</div>
{/if}
