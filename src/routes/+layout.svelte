<script>
	import '../app.css';
	import '@splidejs/splide/dist/css/splide-core.min.css';
	import 'overlayscrollbars/overlayscrollbars.css';
	import { scrollTop } from '$lib/stores/app-stores.svelte.js';

	import ScrollArea from '$comp/scrollbar/ScrollArea.svelte';
	import NavBar from '$comp/menu/NavBar.svelte';

	const { children } = $props();

	let screenHeight = $state(0);
	let screenWidth = $state(0);

	const scrolled = ([, event]) => {
		const isScroll = event.target.scrollTop > 0;
		scrollTop.set(isScroll);
	};
</script>

<main
	class="w-screen relative min-h-screen"
	bind:clientHeight={screenHeight}
	bind:clientWidth={screenWidth}
	style="--app-height:{screenHeight}px;--app-width:{screenWidth}px"
>
	<ScrollArea defer onscroll={scrolled} options={{ scrollbars: { theme: 'os-theme-dark' } }}>
		<div class="w-screen relative h-screen max-h-[1080px] max-w-[1920px] mx-auto">
			<NavBar />
			{@render children()}
		</div>
	</ScrollArea>
</main>

<style lang="postcss">
</style>
