<script>
	import '../app.css';
	import '@splidejs/splide/dist/css/splide-core.min.css';
	import 'overlayscrollbars/overlayscrollbars.css';
	import { onMount } from 'svelte';
	import { isMobile, screenSize } from '$lib/stores/app-readable.svelte';
	import { scrollTop } from '$lib/stores/app-writable.svelte.js';

	import ScrollArea from '$comp/scroll/ScrollArea.svelte';
	import NavBarTop from '$comp/menu/NavBarTop.svelte';
	import Footer from '$comp/footer/Footer.svelte';
	import PageProgress from '$comp/loading/PageProgress.svelte';
	import Loader from '$comp/loading/Loader.svelte';
	import PullToRefresh from '$comp/scroll/PullToRefresh.svelte';

	const { children } = $props();
	const { height, width } = $derived($screenSize);

	const scrolled = ([, event]) => {
		const isScroll = event.target.scrollTop > 0;
		scrollTop.set(isScroll);
	};

	let loaded = $state(false);
	onMount(() => (loaded = true));
</script>

{#if !loaded}
	<Loader />
{/if}

<main
	class="w-screen relative min-h-screen"
	class:mobile={$isMobile}
	style="--app-height:{height}px;--app-width:{width}px"
>
	<PageProgress />

	<ScrollArea
		defer
		class="!h-[var(--app-height)]"
		onscroll={scrolled}
		options={{ scrollbars: { theme: 'os-theme-dark', autoHide: 'scroll', autoHideSuspend: true } }}
	>
		<PullToRefresh>
			<NavBarTop />
			{@render children()}
			<Footer />
		</PullToRefresh>
	</ScrollArea>
</main>

<style lang="postcss">
</style>
