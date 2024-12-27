<script lang="ts">
	import hiburan from '$images/beach/pathok.jpeg?format=webp&img';

	const kategori = [
		{ name: 'Air Terjun Jurang Senggani', slug: 'jurang-senggani' },
		{ name: 'Pantai Molang', slug: 'pantai-molang' },
		{ name: 'Candi Sanggrahan', slug: 'candi-sanggrahan' },
		{ name: 'Pantai Kedung Tumpang', slug: 'pantai-kedung-tumpang' },
		{ name: 'Coban Kromo', slug: 'coban-kromo' },
		{ name: 'Telaga Buret', slug: 'telaga-buret' },
		{ name: 'Pantai Kelinci', slug: 'pantai-kelinci' }
	];

	const getThumb = async (slug: string) => {
		const { default: raw } = await import(`$images/destinations/${slug}.jpg?format=webp`);
		return raw;
	};
</script>

<section class="pt-28">
	<div class="relative w-full px-[5%] md:px-[6.5%]">
		<span class="absolute bottom-full left-1/2 w-full -translate-x-1/2 text-center">
			Mungkin Menarik Untuk Anda
		</span>
		<h2 class="relative overflow-hidden text-center text-3xl font-bold uppercase">
			<span
				class="relative inline-flex max-w-[80%] px-5 py-1 before:absolute
        before:right-full before:top-1/2 before:h-[2px] before:w-[400%] before:-translate-y-1/2 before:bg-sky-950 after:absolute
        after:left-full after:top-1/2 after:h-[2px] after:w-[400%] after:-translate-y-1/2 after:bg-sky-950 md:max-w-[30%]"
			>
				Pilihan Wisata
			</span>
		</h2>
	</div>

	<div class="mt-10 flex flex-wrap">
		{#each kategori as { slug, name }, i}
			<div
				class="group relative aspect-square basis-1/2 overflow-hidden
				has-[#group7]:hidden sm:aspect-[16/9] md:basis-1/3
				md:has-[#group7]:block lg:basis-1/4 lg:has-[#group7]:hidden"
			>
				{#await getThumb(slug) then img}
					<div
						id="group{i}"
						class="h-full w-full bg-cover bg-center transition-all duration-300 group-[:hover]:scale-110"
						style="background-image: url({img});"
					></div>
				{/await}

				<div
					class="absolute left-0 top-0 flex h-full w-full scale-150 flex-col items-center justify-center bg-black/30 opacity-0 backdrop-blur-sm transition-all duration-300
					group-hover:scale-100 group-hover:opacity-100"
				>
					<span class="flex w-3/5 flex-col items-center justify-center text-center text-white">
						<i class="fasl fa-location-dot text-xl"></i>
						<span class="text-sm leading-tight sm:text-lg"> {name} </span>
					</span>
					<a
						href="/explore"
						class="mt-2 block rounded border border-white px-4 py-1 text-sm text-white
						transition-all duration-300 hover:border-orange-400 hover:bg-orange-400"
					>
						Lihat <i class="fasl fa-location-arrow"></i>
					</a>
				</div>
			</div>
		{/each}

		<div class="relative aspect-[16/9] basis-1/2 overflow-hidden md:basis-1/3 lg:basis-1/4">
			<div
				class="group h-full scale-110 bg-cover bg-center blur-sm
			after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-sky-950/85 after:opacity-75"
				style="background-image: url({hiburan});"
			></div>
			<a
				href="/explore"
				class="pk-button absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center !rounded border-2 border-white text-xs text-white
				hover:bg-white hover:text-orange-500 md:text-lg"
			>
				<span class="block h-full w-full uppercase"> Jelajahi </span>
				<i class="fasl fa-arrow-right-long ml-2 inline-block"></i>
			</a>
		</div>
	</div>
</section>
