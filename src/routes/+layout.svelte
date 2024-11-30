<script lang="ts">
	import '../app.css';
	import '@splidejs/splide/dist/css/splide-core.min.css';
	import 'overlayscrollbars/overlayscrollbars.css';
	import { onMount } from 'svelte';
	import { isMobile, screenSize } from '$lib/stores/app-readable.svelte';

	import ScrollArea from '$comp/scroll/ScrollArea.svelte';
	import NavBarTop from '$comp/menu/NavBarTop.svelte';
	import Footer from '$comp/footer/Footer.svelte';
	import PageProgress from '$comp/loading/PageProgress.svelte';
	import Loader from '$comp/loading/Loader.svelte';
	import PullToRefresh from '$comp/scroll/PullToRefresh.svelte';

	const { children } = $props();
	const { height, width } = $derived($screenSize);

	let loaded: boolean = $state(false);
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
	:global .pk-article {
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			@apply font-bold py-4 first:pt-0;
		}

		h1 {
			@apply text-3xl;
		}
		h2 {
			@apply text-2xl;
		}
		h3 {
			@apply text-xl;
		}

		ul,
		ol {
			@apply mb-5 space-y-1 ml-10;
		}
		ul {
			@apply list-disc list-outside;
		}
		ol {
			@apply list-decimal list-outside;
		}
		li {
			@apply pb-2;
		}
	}
</style>
