<script>
	import { page } from '$app/stores';
	import { topbarHeight } from '$lib/stores/app-writable.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let { onclick, isMapOpen, onmap, district, height = $bindable() } = $props();

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

	const createLink = (slug) => {
		let finalSlug = slug;
		if (district) {
			const infoSLug = `${district}/information`;
			const contentSlug = `${slug}?l=${district}`;
			finalSlug = slug === 'information' ? infoSLug : contentSlug;
		}
		const href = `/explore/${finalSlug}`;
		return href;
	};

	const checkActivePage = (slug) => {
		const { pathname } = $page.url;
		const [, ctx = 'general'] = pathname.split('explore/');
		if (ctx === district) return slug === 'activities';
		return ctx.match(slug);
	};

	let showNavLeft = $state(false);
	let showNavRight = $state(false);
	let scrollBox = $state(0);
	let scrollContent = $state(0);

	const scrollhandle = (to) => {
		const distance = scrollContent.clientWidth / menu.length;
		const left = to === 'left' ? distance * -1 : distance;
		scrollBox.scrollBy({ left, behavior: 'smooth' });
	};

	const reposition = (e) => {
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
		scrollBox.addEventListener('scroll', (e) => reposition(e.target));
		window.addEventListener('resize', () => reposition(scrollBox));
	});
</script>

<div
	bind:clientHeight={height}
	class="menu sticky px-[5%] md:px-[10%] w-full left-0 bg-white flex border-b-2 font-semibold z-20"
	style="top:{$topbarHeight - 1}px"
>
	<div class="block relative w-10/12 pr-3 md:pr-5">
		{#snippet nav(position)}
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
				class="absolute h-full w-14 md:w-20 from-white via-white z-10 flex items-center pointer-events-none"
			>
				<button
					onclick={() => scrollhandle(position)}
					aria-label="show {position}"
					class="bg-white w-8 md:w-10 aspect-square rounded-full border-2 shadow-lg text-base md:text-xl inline-flex items-center justify-center transition-all duration-300 pointer-events-auto
				hover:text-orange-400 active:scale-90 hover:bg-slate-100"
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

		<div class="size-full sm:text-base overflow-scroll" bind:this={scrollBox}>
			<ul class="flex h-full items-center w-fit" bind:this={scrollContent}>
				{#each menu as { slug, text }}
					<li
						class:active={checkActivePage(slug || 'general')}
						class="group px-3 first:pl-0 last:pr-0"
					>
						<a
							href={createLink(slug)}
							class="w-max inline-block py-3 sm:py-4 px-1 relative
							after:bg-orange-400 after:w-full after:scale-x-0 after:h-[.15rem] after:absolute after:bottom-0 after:left-0 after:rounded-t-md after:transition-transform after:duration-300
							hover:after:scale-x-100 group-[.active]:after:scale-x-100"
							{onclick}
						>
							{text}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="flex items-center ml-auto">
		<button
			class="flex items-center pk-button text-base hover:bg-slate-100 border-[0.075rem] border-slate-300"
			onclick={onmap}
		>
			{#if isMapOpen}
				<i class="fasl fa-list-ul inline-block sm:pr-2"></i>
				<span class="hidden sm:inline-block w-max">Lihat List</span>
			{:else}
				<i class="fasl fa-map inline-block sm:pr-2"></i>
				<span class="hidden sm:inline-block w-max">Buka Peta</span>
			{/if}
		</button>
	</div>
</div>
