<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { getContext, onMount } from 'svelte';
	import { topbarHeight } from '$lib/stores/app-writable.svelte';
	import type { MouseEventHandler } from 'svelte/elements';
	import type { PKMap } from '$lib/types/map';

	let {
		onclick,
		isMapOpen,
		district,
		height = $bindable()
	}: {
		onclick: MouseEventHandler<HTMLAnchorElement>;
		isMapOpen: boolean;
		district: App.District;
		height: number;
	} = $props();

	const mapToggle: PKMap.Toggle = getContext('mapToggle');

	const menu = $derived.by(() => {
		const information = district ? [{ text: 'Informasi Umum', slug: 'information' }] : [];
		const general = !district ? [{ text: 'Explore', slug: '' }] : [];
		return [
			...general,
			{ text: 'Aktivitas', slug: 'activities' },
			{ text: 'Hotel & Penginapan', slug: 'accommodation' },
			{ text: 'Akses & Transportasi', slug: 'transport' },
			{ text: 'Pelengkap Perjalanan', slug: 'essential' },
			...information
		];
	});

	const createLink = (slug: string) => {
		let finalSlug = slug;
		if (district) {
			const infoSLug = `${district}/information`;
			const contentSlug = `${slug}?l=${district}`;
			finalSlug = slug === 'information' ? infoSLug : contentSlug;
		}
		const href = `/explore/${finalSlug}`;
		return href;
	};

	const checkActivePage = (slug: string) => {
		const { pathname } = $page.url;
		const [, ctx = 'general'] = pathname.split('explore/');
		if (ctx === district) return slug === 'activities';
		return ctx.match(slug);
	};

	let showNavLeft = $state(false);
	let showNavRight = $state(false);
	let scrollBox = $state() as HTMLElement;
	let scrollContent = $state() as HTMLElement;

	const scrollhandle = (to: string) => {
		const distance = scrollContent.clientWidth / menu.length;
		const left = to === 'left' ? distance * -1 : distance;
		scrollBox.scrollBy({ left, behavior: 'smooth' });
	};

	const reposition = (e: HTMLElement) => {
		const isOverflow = scrollBox.clientWidth < scrollContent.clientWidth;
		if (!isOverflow) {
			showNavLeft = false;
			showNavRight = false;
			return;
		}

		const { scrollLeft, scrollWidth, offsetWidth } = e;
		const left = scrollWidth - offsetWidth;
		const isEnd = left === Math.ceil(scrollLeft) || left === Math.floor(scrollLeft);
		if (isEnd) showNavRight = false;
		if (!isEnd) showNavRight = true;

		if (scrollLeft > 0) showNavLeft = true;
		if (scrollLeft <= 0) showNavLeft = false;
	};

	onMount(() => {
		reposition(scrollBox);
		scrollBox.addEventListener('scroll', (e) => reposition(e.target as HTMLElement));
		window.addEventListener('resize', () => reposition(scrollBox));
	});
</script>

<div
	bind:clientHeight={height}
	class="menu sticky left-0 z-20 flex border-b-2 bg-white px-[5%] font-semibold md:px-[10%]"
	style="top:{$topbarHeight - 1}px"
>
	<div class="relative block w-10/12 pr-3 sm:w-9/12 md:pr-5 lg:w-10/12">
		{#snippet nav(position: string)}
			{@const isLeft = position === 'left'}
			{@const isRight = position === 'right'}
			<div
				transition:fade={{ duration: 150 }}
				class:bg-gradient-to-r={isLeft}
				class:bg-gradient-to-l={isRight}
				class:left-0={isLeft}
				class:right-2={isRight}
				class:md:right-5={isRight}
				class:justify-end={isRight}
				class="pointer-events-none absolute z-10 flex h-full w-14 items-center from-white via-white md:w-20"
			>
				<button
					onclick={() => scrollhandle(position)}
					aria-label="show {position}"
					class="pointer-events-auto inline-flex aspect-square w-8 items-center justify-center rounded-full border-2 bg-white text-base shadow-lg transition-all duration-300 hover:bg-slate-100 hover:text-orange-400
				active:scale-90 md:w-10 md:text-xl"
					style="line-height: 0"
				>
					<i class="fas fa-angle-{position}"></i>
				</button>
			</div>
		{/snippet}

		{#if showNavLeft}
			{@render nav('left')}
		{/if}
		{#if showNavRight}
			{@render nav('right')}
		{/if}

		<div class="size-full overflow-scroll sm:text-base" bind:this={scrollBox}>
			<ul class="flex h-full w-fit items-center" bind:this={scrollContent}>
				{#each menu as { slug, text }}
					<li
						class:active={checkActivePage(slug || 'general')}
						class="group px-3 first:pl-0 last:pr-0"
					>
						<a
							href={createLink(slug)}
							class="relative inline-block w-max px-1 py-3 after:absolute
							after:bottom-0 after:left-0 after:h-[.15rem] after:w-full after:scale-x-0 after:rounded-t-md after:bg-orange-400 after:transition-transform after:duration-300 hover:after:scale-x-100
							group-[.active]:after:scale-x-100 sm:py-4"
							{onclick}
						>
							{text}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="ml-auto flex items-center">
		<button
			class="pk-button flex items-center border-[0.075rem] border-slate-300 text-base hover:bg-slate-100"
			onclick={() => mapToggle()}
		>
			{#if isMapOpen}
				<i class="fasl fa-list-ul inline-block sm:pr-2"></i>
				<span class="hidden w-max sm:inline-block">Lihat List</span>
			{:else}
				<i class="fasl fa-map inline-block sm:pr-2"></i>
				<span class="hidden w-max sm:inline-block">Buka Peta</span>
			{/if}
		</button>
	</div>
</div>
