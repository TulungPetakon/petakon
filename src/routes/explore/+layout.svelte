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
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505636.05801829736!2d111.5869938517723!3d-8.072724083247827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78e3b74eb610b9%3A0x3027a76e352be20!2sKabupaten%20Tulungagung%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1731827674308!5m2!1sid!2sid"
			style="border:0;"
			allowfullscreen=""
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
