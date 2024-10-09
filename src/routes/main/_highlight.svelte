<script>
	import relaksasi from '@images/beach/coban.jpg?format=webp';
	import kuliner from '@images/beach/jls2.jpg?format=webp';
	import pantai from '@images/beach/pantai.webp?format=webp';
	import gunung from '@images/beach/besuki.jpg?format=webp';
	import budaya from '@images/beach/jurang-senggani.jpg?format=webp';
	import edukasi from '@images/beach/kedung-tumpang.webp?format=webp';
	import hiburan from '@images/beach/pathok.jpeg?format=webp';
	import taman from '@images/beach/skyview.webp';

	const kategori = [
		{ name: 'gunung', img: gunung },
		{ name: 'pantai', img: pantai },
		{ name: 'budaya', img: budaya },
		{ name: 'kuliner', img: kuliner },
		{ name: 'edukasi', img: edukasi },
		{ name: 'taman', img: taman },
		{ name: 'relaksasi', img: relaksasi },
		{ name: 'hiburan', img: hiburan }
	];
</script>

<section class="pt-20">
	<h2 class="font-bold uppercase text-3xl text-center mb-10">Destinasi Pilihan</h2>
	<div class="flex flex-wrap">
		{#each kategori as { img, name }}
			<div class="basis-1/4 aspect-[16/9] relative group overflow-hidden">
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
	</div>
</section>
