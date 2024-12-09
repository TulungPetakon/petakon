<script lang="ts">
	import '../app.css';
	import '@splidejs/splide/dist/css/splide-core.min.css';
	import 'overlayscrollbars/overlayscrollbars.css';
	import { building, dev } from '$app/environment';
	import { onMount } from 'svelte';
	import { isMobile, screenSize } from '$lib/stores/app-readable.svelte';

	import ScrollArea from '$comp/scroll/ScrollArea.svelte';
	import NavBarTop from '$comp/menu/NavBarTop.svelte';
	import Footer from '$comp/footer/Footer.svelte';
	import PageProgress from '$comp/loading/PageProgress.svelte';
	import Loader from '$comp/loading/Loader.svelte';
	import PullToRefresh from '$comp/scroll/PullToRefresh.svelte';
	// import Login from './_login.svelte';
	// import Brand from '$comp/svgs/Brand.svelte';

	const { children } = $props();
	const { height, width } = $derived($screenSize);

	let loaded = $state(false);
	// let loggedIn = $state(building || false);
	// const onLogged = () => (loggedIn = true);

	onMount(() => {
		loaded = true;
		if ('serviceWorker' in navigator && !dev) {
			navigator.serviceWorker.register('/sw.js'); // /dev-sw.js?dev-sw
		}
	});
</script>

<svelte:head>
	{#if !dev}
		<link rel="manifest" href="/appmanifest.json" />
	{/if}
</svelte:head>

{#if !loaded}
	<Loader />
{/if}

<main
	class="relative min-h-screen w-screen"
	class:mobile={$isMobile}
	style="--app-height:{height}px;--app-width:{width}px"
>
	<PageProgress />

	<!-- {#if loggedIn} -->
	<ScrollArea
		defer
		class="!h-[var(--app-height)]"
		options={{
			scrollbars: { theme: 'os-theme-dark', autoHide: 'scroll', autoHideSuspend: true }
		}}
	>
		<PullToRefresh>
			<NavBarTop />
			{@render children()}
			<Footer />
		</PullToRefresh>
	</ScrollArea>
	<!-- {:else}
		<Login {onLogged} />
	{/if} -->

	<!-- <div
		class="flex !h-[var(--app-height)] w-full items-center justify-center bg-slate-100 text-center"
	>
		<div class="">
			<div class="mx-auto my-5 flex w-40 items-end">
				<div class="w-12">
					<Brand />
				</div>
				<div class="h1 font-bold">PETAKON</div>
			</div>
			<h1 class="text-4xl font-bold">COMING SOON!</h1>
		</div>
	</div> -->
</main>

<style lang="postcss">
	:global .pk-article {
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			@apply py-4 font-bold first:pt-0;
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
			@apply mb-5 ml-10 space-y-1;
		}
		ul {
			@apply list-outside list-disc;
		}
		ol {
			@apply list-outside list-decimal;
		}
		li {
			@apply pb-2;
		}
	}
</style>
