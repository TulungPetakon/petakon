<script>
	import '../app.css';
	import '@splidejs/splide/dist/css/splide-core.min.css';
	import 'overlayscrollbars/overlayscrollbars.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { isMobile } from '$lib/stores/app-readable.svelte';
	import { scrollTop } from '$lib/stores/app-writable.svelte.js';

	import ScrollArea from '$comp/scrollbar/ScrollArea.svelte';
	import NavBar from '$comp/menu/NavBar.svelte';
	import Footer from '$comp/footer/Footer.svelte';
	import PageProgress from '$comp/loading/PageProgress.svelte';
	import Loader from '$comp/loading/Loader.svelte';
	import PullToRefresh from '$comp/scrollbar/PullToRefresh.svelte';

	const { children } = $props();

	let innerHeight = $state(0);
	let innerWidth = $state(0);
	const isApp = $derived(/\/((?!main).[a-zA-Z0-9]+)/.test($page.route.id));

	const scrolled = ([, event]) => {
		const isScroll = event.target.scrollTop > 0;
		scrollTop.set(isScroll);
	};

	let loaded = $state(false);
	onMount(() => (loaded = true));
</script>

<svelte:window bind:innerHeight bind:innerWidth />

{#if !loaded}
	<Loader />
{/if}

<main
	class="w-screen relative min-h-screen"
	class:mobile={$isMobile}
	style="--app-height:{innerHeight}px;--app-width:{innerWidth}px"
>
	<PageProgress />

	<ScrollArea
		defer
		class="!h-[var(--app-height)]"
		onscroll={scrolled}
		options={{ scrollbars: { theme: 'os-theme-dark', autoHide: 'scroll', autoHideSuspend: true } }}
	>
		<PullToRefresh enable={isApp}>
			<NavBar solidBG={isApp} />
			{@render children()}
			<Footer />
		</PullToRefresh>
	</ScrollArea>
</main>

<style lang="postcss">
</style>
