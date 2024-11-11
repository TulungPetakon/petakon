<script>
	import { page } from '$app/stores';
	import { topbarHeight } from '$lib/stores/app-writable.svelte';
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

	let contentBoxSize = $state(0);
</script>

<div
	bind:clientHeight={height}
	bind:contentBoxSize
	class="menu sticky px-[2%] sm:px-[5%] md:px-[10%] w-full left-0 bg-white flex border-b-2 font-semibold z-20"
	style="top:{$topbarHeight - 1}px"
>
	<div class="block w-11/12 sm:text-base overflow-scroll">
		<ul class="flex h-full items-center">
			{#each menu as { slug, text }}
				<li class:active={checkActivePage(slug || 'general')} class="group px-3">
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
	<div class="flex items-center">
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
