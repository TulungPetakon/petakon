<script lang="ts">
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';
	import { md } from '$lib/helpers/markdown.helper.js';
	import { isMobile, screenSize } from '$lib/stores/app-readable.svelte.js';
	import { scrollTop, topbarHeight, topBarMode } from '$lib/stores/app-writable.svelte.js';
	import type { Activities } from '$lib/types/activities';
	import type { Utils } from '$lib/types/utils.js';
	import Modal from '$comp/utils/Modal.svelte';

	const { data } = $props();
	const activity = data.activity as unknown as Activities.Item;
	const { address, description, name, rating, slug, gallery } = activity;

	const readPost = (full = false) => {
		if (!data.post) return description;
		if (full) return md(data.post).html;

		const part = `${data.post.substring(0, 500)}...`;
		const { html: partialResult } = md(part, true);
		return partialResult;
	};

	const getThumb = async (slug: string) => {
		const { default: raw } = await import(`$images/destinations/${slug}.jpg?format=webp`);
		return raw;
	};

	let saved = $state(false);
	const saveContent = () => {
		saved = !saved;
	};

	let showModal = $state(false);
	const toggleModal = () => (showModal = !showModal);
	$effect(() => topBarMode.set($isMobile ? 'hidden' : 'default')); // Change TopBar on mobile screen
	$effect.pre(() => () => topBarMode.set('default')); // Set back to default Topbar after leaving the page

	const scrollControl: Utils.scrollControl = getContext('scrollControl');
	const getTargetPosition: (x: string) => number = getContext('getTargetPosition');
	const targetPos = () => getTargetPosition('#tickets') - $topbarHeight;
	const scroll = () => scrollControl({ instant: true, scrollTo: targetPos() });
</script>

{#if showModal}
	<Modal {toggleModal}>
		<article class="pk-article">
			{@html readPost(true)}
		</article>
	</Modal>
{/if}

<section class="relative">
	<!-- TopBar -->
	<div
		class="absolute left-0 top-0 z-10 flex w-full items-center px-[2%] py-2 sm:relative sm:px-[5%] md:px-[6.5%] xl:px-[15%]"
	>
		<div class="sm:hidden">
			<button
				class="inline-flex aspect-square w-10 items-center justify-center rounded-full bg-white/80 text-xl text-black"
				aria-label="Back to Activities"
			>
				<i class="fasl fa-angle-left"></i>
			</button>
		</div>
		<div class="hidden text-sm text-gray-600 sm:block">
			<a href="/" class="transition-all hover:text-black"> Home</a>
			<span> / </span>
			<a href="/activities" class=" transition-all hover:text-black">Activities</a>
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
				<span class="hidden sm:inline-block">Bagikan</span>
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
				<span class="hidden sm:inline-block">Simpan</span>
			</button>
		</div>
	</div>

	<!-- Photos -->
	<div class="md:px-[6.5%] xl:px-[15%]">
		<div class="relative grid grid-cols-1 overflow-hidden rounded-md lg:grid-cols-2">
			<button
				class="pk-button absolute bottom-5 right-3 hidden bg-white !px-3 !py-1 text-sm
				hover:bg-gray-200 sm:hidden lg:block"
			>
				<i class="fasl fa-image"></i>
				<span>Lihat Galeri</span>
			</button>

			<span
				class="absolute bottom-5 right-2 rounded-md bg-black/35 px-3 py-1 text-sm text-white sm:hidden"
			>
				1 / 5
			</span>

			<div class="h-72 w-full sm:h-80 lg:h-[22rem] lg:pr-1">
				<div class="size-full overflow-hidden bg-gray-200">
					{#await getThumb(slug) then src}
						<img {src} alt={name} class="size-full" />
					{/await}
				</div>
			</div>
			<div class="hidden h-24 w-full pt-1 sm:block lg:h-[22rem] lg:pl-1 lg:pt-0">
				<div class="grid size-full grid-cols-5 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2">
					{#snippet pic(slug: string)}
						<div
							class="size-full lg:first:pb-1 lg:last:pt-1 lg:odd:pr-1 lg:even:pl-1 lg:[&:nth-child(2)]:pb-1 lg:[&:nth-child(3)]:pt-1"
						>
							<div class="size-full overflow-hidden px-[1px]">
								{#await getThumb(slug) then src}
									<img {src} alt={name} class="size-full" />
								{/await}
							</div>
						</div>
					{/snippet}
					{#if gallery}
						{#each gallery as { url }, i}
							{#if i > 0}
								{@render pic(url)}
							{/if}
						{/each}
					{:else}
						<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
						{#each Array(4) as _}
							{@render pic(slug)}
						{/each}
					{/if}
				</div>
			</div>
		</div>
	</div>

	<!-- Details -->
	<div class="relative px-[5%] py-2 sm:py-5 md:px-[6.5%] xl:px-[15%]">
		<div class="flex">
			<div class="basis-full md:pr-5 lg:basis-7/12 xl:basis-8/12 xl:pr-20">
				<div id="general" class="border-b pb-7">
					<h1 class=" pb-1 pt-2 text-2xl font-semibold md:text-3xl">{name}</h1>
					<div class="flex items-center">
						{#each ['Edukasi', 'Alam'] as tag, i}
							<a
								href="./#"
								class="mr-1 inline-block text-lg leading-tight text-gray-500 transition-all duration-300 hover:text-black hover:underline"
								class:ml-1={i > 0}>{tag}</a
							>
							{i > 0 ? '' : ' • '}
						{/each}
					</div>
					<div class="mt-1 flex items-center">
						<span class="text-lg">{rating}</span><i class="fas fa-star mr-2 inline-block"></i>
						<button class="text-black underline"> 0 Review </button>
					</div>
				</div>

				<div class="border-b py-7">
					<div class="block pb-5">
						<button class="group flex" title={address}>
							<div class="w-12 text-left">
								<i class="fasl fa-clock-seven inline-block text-2xl"></i>
							</div>
							<div class="text-left">
								<div>
									<span
										class="inline-block rounded-md border border-red-500 px-2 py-1 text-xs text-red-500"
									>
										Sedang Tutup
									</span>
									<span>
										• Buka Besok Pukul <strong>08:00</strong>
									</span>
								</div>
								<div class="group-hover:text-black group-hover:underline">
									<span> Lihat Jadwal </span>
									<i class="fasl fa-angle-right text-sm"></i>
								</div>
							</div>
						</button>
					</div>

					<div class="block pb-5">
						<button class="group flex" title={address}>
							<div class="w-12 text-left">
								<i class="fasl fa-map-location inline-block text-2xl"></i>
							</div>
							<div class="text-left">
								<div class="text-overflow font-bold">{address}</div>
								<div class="group-hover:text-black group-hover:underline">
									<span> Lihat Peta </span>
									<i class="fasl fa-angle-right text-sm"></i>
								</div>
							</div>
						</button>
					</div>

					<div class="block">
						<button class="group flex">
							<div class="w-12 text-left">
								<i class="fasl fa-user-check inline-block text-2xl"></i>
							</div>
							<div class="text-left">
								<div class="font-bold">No Drugs Allowed</div>
								<div class="group-hover:text-black group-hover:underline">
									<span> Kebijakan Berkunjung </span>
									<i class="fasl fa-angle-right text-sm"></i>
								</div>
							</div>
						</button>
					</div>
				</div>

				<div class="border-b pb-10 pt-7">
					<article class="pk-article text-gray-600">
						{@html readPost()}
					</article>
					<button class="inline-flex items-center text-black" onclick={toggleModal}>
						<span class="underline">Baca Selengkapnya</span>
						<i class="fasl fa-angle-right ml-2 leading-none"></i>
					</button>
				</div>

				<div class="border-b py-10">
					<h2 class="text-xl font-semibold md:text-2xl" id="facilities">Fasilitas</h2>
				</div>

				<div class="py-10" id="tickets">
					<h2 class="text-xl font-semibold md:text-2xl">Pilihan Tiket</h2>
				</div>
			</div>

			{#snippet offer()}
				<div
					class="flex w-full items-center bg-[rgb(255,244,239)] px-5 py-2 md:flex-col lg:flex-row"
				>
					<div class="py-1 md:w-full xl:w-auto">
						<span class="block text-sm font-bold">Mulai Dari</span>
						<span class="text-xl font-bold text-orange-500"> RP --.--</span>
					</div>
					<div class="ml-auto md:w-full xl:w-auto">
						<button
							class="pk-button rounded-full bg-orange-400 text-white md:w-full"
							onclick={scroll}
						>
							<span><i class="fasl fa-ticket-perforated"></i> Penawaran</span>
						</button>
					</div>
				</div>
			{/snippet}
			<div
				class="ml-auto hidden w-full md:relative md:block md:w-96 lg:w-auto lg:basis-5/12 xl:basis-4/12"
			>
				<div class="right-0 top-24 mt-2 w-full md:sticky md:mb-10">
					{@render offer()}
				</div>
			</div>

			{#if $screenSize.width < 768 && $scrollTop <= targetPos() - 10}
				<div class="fixed bottom-0 left-0 z-10 w-full" transition:fly={{ duration: 250, y: 20 }}>
					{@render offer()}
				</div>
			{/if}
		</div>

		<div class="border-y py-10" id="essentials">
			<h2 class="text-xl font-semibold md:text-2xl">Layanan Tambahan</h2>
		</div>

		<div class="border-b py-10" id="map">
			<h2 class="text-xl font-semibold md:text-2xl">Dimana Kamu Akan Berkunjung</h2>
		</div>

		<div class="border-y py-10" id="reviews">
			<h2 class="text-xl font-semibold md:text-2xl">Review</h2>
		</div>

		<div class="border-y py-10" id="additional-info">
			<h2 class="text-xl font-semibold md:text-2xl">Informasi Tambahan</h2>
		</div>

		<div class="py-10" id="related">
			<h2 class="text-xl font-semibold md:text-2xl">Mungkin Menarik Untuk Anda</h2>
		</div>
	</div>
</section>
