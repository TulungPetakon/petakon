<script>
	import relaksasi from '@images/beach/coban.jpg?format=webp';
	import kuliner from '@images/beach/jls2.jpg?format=webp';
	import pantai from '@images/beach/pantai.webp?format=webp';
	import gunung from '@images/beach/besuki.jpg?format=webp';
	import budaya from '@images/beach/jurang-senggani.jpg?format=webp';
	import edukasi from '@images/beach/kedung-tumpang.webp?format=webp';
	import hiburan from '@images/beach/pathok.jpeg?format=webp';
	import taman from '@images/beach/skyview.webp?format=webp';
	// import more from '@images/beach/klatak.jpg?format=webp';

	const kategori = [
		{ name: 'gunung', img: gunung },
		{ name: 'pantai', img: pantai },
		{ name: 'budaya', img: budaya },
		{ name: 'kuliner', img: kuliner },
		{ name: 'edukasi', img: edukasi },
		{ name: 'taman', img: taman },
		{ name: 'relaksasi', img: relaksasi }
		// { name: 'hiburan', img: hiburan }
	];
</script>

<section class="pt-20">
	<h2 class="font-bold uppercase text-3xl text-center mb-10">Destinasi Pilihan</h2>
	<div class="flex flex-wrap">
		{#each kategori as { img, name }}
			<div
				class="basis-1/2 md:basis-1/4 aspect-square sm:aspect-[16/9] relative group overflow-hidden"
			>
				<div
					class="h-full w-full bg-cover bg-center transition-all duration-300 group-[:hover]:scale-110"
					style="background-image: url({img});"
				></div>
				<div
					class="bg-gradient-to-t from-black/75 text-white h-fit w-full absolute z-10 bottom-0 left-0 p-3 pt-10"
				>
					<button class="petakon-button-outline text-xs mt-2 font-semibold uppercase">
						{name}
					</button>
				</div>
			</div>
		{/each}
		<div
			class="basis-1/2 md:basis-1/4 relative aspect-[16/9] groupn bg-cover bg-center"
			style="background-image: url({hiburan});"
		>
			<div class="petakon-bg-gradient h-full opacity-75"></div>
			<button
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 petakon-button rounded-full text-white border-2 border-white text-xs md:text-lg hover:bg-white group"
			>
				<a
					href="/explore"
					class="block w-full h-full group-[:hover]:petakon-text-gradient uppercase"
				>
					Jelajahi
				</a>
			</button>
		</div>
	</div>
</section>
