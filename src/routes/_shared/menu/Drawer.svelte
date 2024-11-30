<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { mainLinks } from './navlink';
	import { self } from '$lib/helpers/event-handler.helper';
	import { screenSize } from '$lib/stores/app-readable.svelte';
	import LangToggle from '$comp/utils/LangToggle.svelte';

	const { toggle } = $props();

	const flyTransition = (node: HTMLElement) => {
		const fromSide = $screenSize.width > 640;
		return fromSide ? fly(node, { x: 100, duration: 200 }) : fly(node, { y: 100, duration: 250 });
	};
</script>

<div
	onmousedown={self(toggle)}
	class="fixed right-0 top-0 z-50 h-full w-full bg-black/50"
	transition:fade={{ duration: 250 }}
	role="button"
	tabindex="0"
>
	<div class="relative ml-auto h-full w-full bg-white sm:w-[60vw]" transition:flyTransition>
		<div class="flex items-center border-b px-2 py-1">
			<button aria-label="Close" class="aspect-square w-10 text-xl" onclick={toggle}>
				<i class="fasl fa-xmark-large"></i></button
			>
			<h1 class="px-2 text-center text-xl font-bold">
				<span>Menu Utama</span>
			</h1>
		</div>

		<!-- Account -->
		<!-- <div class="my-4 flex justify-center text-base">
			<button
				class="bg-sky-500 text-white w-4/12 rounded-sm mx-1 py-1 transition-all
			hover:bg-sky-600"
			>
				Masuk
			</button>
			<button
				class="border-sky-500 w-4/12 rounded-sm mx-1 py-1 transition-all border-2
			hover:bg-sky-600 hover:text-white"
			>
				Daftar
			</button>
		</div> -->
		<!-- End Account -->

		<div class="h-2 w-full bg-slate-100"></div>

		<div class="list px-2 py-4 sm:px-[6.5%]">
			{#each mainLinks as { href, title, icon }}
				<a
					{href}
					class="block px-5 py-2 text-lg transition-all
					hover:bg-slate-200"
					onclick={toggle}
				>
					<i class="fasl {icon} mr-10 inline-block w-0 text-2xl"></i> <span> {title} </span>
				</a>
			{/each}

			<div class="mt-7 flex items-center justify-center">
				<div class="w-5/6">
					<LangToggle />
				</div>
			</div>
		</div>
	</div>
</div>
