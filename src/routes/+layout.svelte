<script>
	import '../app.css';
	import '@splidejs/splide/dist/css/splide-core.min.css';
	import 'overlayscrollbars/overlayscrollbars.css';
	import { page } from '$app/stores';
	import { scrollTop, screenSize, isMobile } from '$lib/stores/app-stores.svelte.js';
	import { mobileDetect } from '$lib/helpers/mobile-detect';

	import ScrollArea from '$comp/scrollbar/ScrollArea.svelte';
	import NavBar from '$comp/menu/NavBar.svelte';
	import Footer from '$comp/footer/Footer.svelte';

	const { children } = $props();

	let innerHeight = $state(0);
	let innerWidth = $state(0);
	const isApp = $derived.by(() => /\/((?!main).[a-zA-Z0-9]+)/.test($page.route.id));

	const scrolled = ([, event]) => {
		const isScroll = event.target.scrollTop > 0;
		scrollTop.set(isScroll);
	};

	$effect(() => {
		screenSize.set({ height: innerHeight, width: innerWidth });
		isMobile.set(mobileDetect() || innerWidth < 768);
	});
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<main
	class="w-screen relative min-h-screen"
	class:mobile={$isMobile}
	style="--app-height:{innerHeight}px;--app-width:{innerWidth}px"
>
	<ScrollArea
		defer
		class="!h-[var(--app-height)]"
		onscroll={scrolled}
		options={{ scrollbars: { theme: 'os-theme-dark' } }}
	>
		<NavBar solidBG={isApp} />
		{@render children()}
		<Footer />
	</ScrollArea>
</main>

<style lang="postcss">
</style>
