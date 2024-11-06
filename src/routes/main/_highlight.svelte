<script>
	import relaksasi from '$images/beach/coban.jpg?format=webp';
	import kuliner from '$images/beach/jls2.jpg?format=webp';
	import pantai from '$images/beach/pantai.webp?format=webp';
	import gunung from '$images/beach/besuki.jpg?format=webp';
	import budaya from '$images/beach/jurang-senggani.jpg?format=webp';
	import edukasi from '$images/beach/kedung-tumpang.webp?format=webp';
	import hiburan from '$images/beach/pathok.jpeg?format=webp';
	import taman from '$images/beach/skyview.webp?format=webp';
	import klathak from '$images/beach/klatak.jpg?format=webp';

	const kategori = [
		{ name: 'Gunung Budheg', img: gunung },
		{ name: 'Pantai Coro', img: pantai },
		{ name: 'Air Terjun Jurang Senggani', img: budaya },
		{ name: 'Jalur Lintas Selatan', img: kuliner },
		{ name: 'Pantai Kedung Tumpang', img: edukasi },
		{ name: 'Dendy Skyview', img: taman },
		{ name: 'Coban Kromo', img: relaksasi },
		{ name: 'Pantai Klathak', img: klathak }
	];
</script>

<section class="pt-28">
	<div class="w-full relative px-[5%] md:px-[6.5%]">
		<span class="absolute bottom-full left-1/2 -translate-x-1/2 w-full text-center">
			Mungkin Menarik Untuk Anda
		</span>
		<h2 class="font-bold text-3xl uppercase text-center relative overflow-hidden">
			<span
				class="relative inline-flex px-5 py-1 max-w-[80%] md:max-w-[30%]
        before:absolute before:right-full before:top-1/2 before:-translate-y-1/2 before:h-[2px] before:w-[400%] before:bg-sky-950
        after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:h-[2px] after:w-[400%] after:bg-sky-950"
			>
				Destinasi Pilihan
			</span>
		</h2>
	</div>

	<div class="flex flex-wrap mt-10">
		{#each kategori as { img, name }, i}
			<div
				class="aspect-square relative group overflow-hidden basis-1/2
				md:basis-1/3 lg:basis-1/4 sm:aspect-[16/9]
				has-[#group7]:hidden md:has-[#group7]:block lg:has-[#group7]:hidden"
			>
				<div
					id="group{i}"
					class="h-full w-full bg-cover bg-center transition-all duration-300 group-[:hover]:scale-110"
					style="background-image: url({img});"
				></div>

				<div
					class="bg-black/30 backdrop-blur-sm absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center scale-150 opacity-0 transition-all duration-300
					group-hover:scale-100 group-hover:opacity-100"
				>
					<span class="text-white flex flex-col w-3/5 items-center justify-center text-center">
						<i class="fasl fa-location-dot text-xl"></i>
						<span class="sm:text-lg text-sm leading-tight"> {name} </span>
					</span>
					<a
						href="/explore"
						class="block text-white text-sm mt-2 px-4 py-1 rounded border-white border
						hover:border-orange-400 hover:bg-orange-400 transition-all duration-300"
					>
						Lihat <i class="fasl fa-location-arrow"></i>
					</a>
				</div>
			</div>
		{/each}

		<div class="basis-1/2 md:basis-1/3 lg:basis-1/4 relative aspect-[16/9] overflow-hidden">
			<div
				class="h-full group bg-cover bg-center blur-sm scale-110
			after:bg-sky-950/85 after:opacity-75 after:w-full after:h-full after:absolute after:top-0 after:left-0"
				style="background-image: url({hiburan});"
			></div>
			<a
				href="/explore"
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pk-button !rounded text-white border-2 border-white text-xs flex items-center
				md:text-lg hover:bg-white hover:text-orange-500"
			>
				<span class="block w-full h-full uppercase"> Jelajahi </span>
				<i class="fasl fa-arrow-right-long inline-block ml-2"></i>
			</a>
		</div>
	</div>
</section>
