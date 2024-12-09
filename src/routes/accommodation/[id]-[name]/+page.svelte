<script lang="ts">
	import { isMobile } from '$lib/stores/app-readable.svelte';
	import { topBarMode } from '$lib/stores/app-writable.svelte';
	import { md } from '$lib/helpers/markdown.helper';
	import type { Acc } from '$lib/types/accomodation';

	const { data } = $props();
	const { html } = md(data.post);
	const description = $derived(`${(html as string).substring(0, 800)}...`);

	const { accomodation } = $derived(data);
	const { name, gallery, location, slug } = $derived(accomodation) as unknown as Acc.Accomodation;
	const { type, url } = $derived(gallery?.[0] || {}) as Acc.Gallery;

	const getThumb = async (slug: string) => {
		const { default: raw } = await import(`$images/accomodations/${slug}.jpg?format=webp`);
		return raw;
	};

	$effect(() => topBarMode.set($isMobile ? 'hidden' : 'default')); // Change TopBar on mobile screen
	$effect.pre(() => () => topBarMode.set('default')); // Set back to default Topbar after leaving the page

	let saved = $state(false);
	const saveContent = () => {
		saved = !saved;
	};
</script>

<section class="relative">
	<!-- TopBar -->
	<div
		class="absolute left-0 top-0 z-10 flex w-full items-center px-[2%] py-2 sm:relative sm:px-[5%] md:px-[6.5%]"
	>
		<div class="sm:hidden">
			<button
				class="inline-flex aspect-square w-10 items-center justify-center rounded-full bg-white/80 text-xl text-black"
				aria-label="Back to Accommodation"
			>
				<i class="fasl fa-angle-left"></i>
			</button>
		</div>
		<div class="hidden text-sm text-gray-600 sm:block">
			<a href="/" class="transition-all hover:text-black"> Home</a>
			<span> / </span>
			<a href="/accommodation" class=" transition-all hover:text-black">Accomodation</a>
			<span> / </span>
			<span class="font-bold text-black">{name}</span>
		</div>

		<div class="ml-auto flex text-base md:text-sm">
			<button
				class="pk-button mr-2 inline-flex aspect-square w-10 items-center justify-center !rounded-full
				bg-white/80 !px-2 text-black sm:block sm:aspect-auto sm:w-auto sm:bg-transparent sm:text-gray-600 sm:hover:text-black"
				aria-label="share"
			>
				<i class="fasl fa-arrow-up-from-bracket inline-block text-base leading-none"></i>
				<span class="hidden sm:inline-block">Share</span>
			</button>
			<button
				class="pk-button mr-2 inline-flex aspect-square w-10 items-center justify-center !rounded-full
				bg-white/80 !px-2 text-black sm:block sm:aspect-auto sm:w-auto sm:bg-transparent sm:text-gray-600 sm:hover:text-black"
				aria-label="save"
				onclick={saveContent}
			>
				<i
					class="{saved ? 'fas' : 'fasl'} fa-heart inline-block text-base leading-none"
					class:text-rose-500={saved}
				></i>
				<span class="hidden sm:inline-block">Save</span>
			</button>
		</div>
	</div>

	<!-- Photos -->
	<div class="md:px-[6.5%]">
		<div class="relative grid grid-cols-1 overflow-hidden rounded lg:grid-cols-2">
			<button
				class="pk-button absolute bottom-5 right-3 hidden bg-white !px-3 !py-1 text-sm
				hover:bg-gray-200 sm:hidden lg:block"
			>
				<i class="fasl fa-image"></i>
				<span>Show All Photos</span>
			</button>

			<span
				class="absolute bottom-5 right-2 rounded-md bg-black/35 px-3 py-1 text-sm text-white sm:hidden"
			>
				1 / 5
			</span>

			<div class="h-72 w-full sm:h-80 md:h-96 lg:h-[25rem] lg:pr-1">
				<div class="size-full overflow-hidden bg-gray-200">
					{#await getThumb(slug) then src}
						{#if type === 'video'}
							<video src={url} poster={src} controls class="size-full">
								<track kind="captions" />
							</video>
						{:else}
							<img {src} alt={name} class="size-full" />
						{/if}
					{/await}
				</div>
			</div>
			<div class="hidden h-24 w-full pt-1 sm:block lg:h-[25rem] lg:pl-1 lg:pt-0">
				<div class="grid size-full grid-cols-5 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2">
					<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
					{#each Array(4) as _}
						<div
							class="size-full
						lg:first:pb-1 lg:last:pt-1 lg:odd:pr-1 lg:even:pl-1 lg:[&:nth-child(2)]:pb-1 lg:[&:nth-child(3)]:pt-1"
						>
							<div class="size-full overflow-hidden px-[1px]">
								{#await getThumb(slug) then src}
									<img {src} alt={name} class="size-full" />
								{/await}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Details -->
	<div class="relative px-[5%] py-2 sm:py-5 md:px-[6.5%]">
		<div class="flex">
			<div class="basis-full pr-20 md:basis-8/12">
				<div id="general" class="border-b pb-7">
					<h1 class="py-2 text-2xl font-semibold md:text-3xl">{name}</h1>
					<div class="flex items-center">
						<span class="text-overflow block pb-1 text-lg leading-tight text-gray-500">
							{location?.address || ''}
						</span>
					</div>
					<div class="mt-2 flex items-center">
						<i class="fas fa-star mr-2 inline-block"></i>
						<button class="text-black underline"> 0 Review </button>
					</div>
				</div>

				<div class="border-b py-10">
					<article class="pk-article text-gray-600">
						{@html description}
					</article>
					<button class="inline-flex items-center text-black">
						<span class="underline">Baca Selengkapnya</span>
						<i class="fasl fa-angle-right ml-2 leading-none"></i>
					</button>
				</div>
			</div>

			<div class="relative md:basis-4/12">
				<div class="sticky right-0 top-24 mt-5 w-full border bg-white p-5 shadow">
					<div class="flex items-center">
						<div class="price">
							<span class="text-2xl font-semibold">Rp999.999</span>
							<span>/malam</span>
						</div>
						<div class="ml-auto">
							<button class="pk-button bg-sky-500 text-white">
								<i class="fasl fa-location-dot"></i> <span>Lihat di Peta</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
