<script>
	import { topbarHeight } from '$lib/stores/app-writable.svelte';
	const { onclick, page, kecamatan } = $props();

	const menu = [
		{ text: 'Informasi Umum', slug: '' },
		{ text: 'Aktivitas', slug: 'activities' },
		{ text: 'Akses & Transportasi', slug: 'accessibilities' }
	];
</script>

<div
	class="menu px-[2%] sm:px-[5%] md:px-[10%] sticky left-0 bg-white flex border-b-2 font-semibold z-10"
	style="top:{$topbarHeight}px"
>
	<div class="block w-11/12 sm:text-lg overflow-scroll">
		<ul class="flex h-full items-center">
			{#each menu as { slug, text }, i}
				<li class:active={page === slug || (i === 0 && !page)} class="group px-3">
					<a
						href="/kecamatan/{kecamatan}/{slug}"
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
		<button class="flex items-center pk-button text-lg hover:bg-slate-100">
			<i class="fasl fa-map inline-block sm:pr-2"></i>
			<span class="hidden sm:inline-block w-max">Buka Peta</span>
		</button>
	</div>
</div>
