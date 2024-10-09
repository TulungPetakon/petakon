<section class="pt-20 px-60">
	<h2 class="font-bold text-3xl">Rekomendasi Tempat Tinggal Untukmu</h2>
	<div class="flex pt-10">
		{#each Array(4) as _}
			<div class="basis-1/4 p-2">
				<a class="bg-white relative shadowed hover:shadowed-active transition-all" href="#/">
					<div class="bg-yellow-500 text-white absolute top-2 right-2 p-2 text-xs">5.0</div>
					<div class="aspect-[12/9] bg-gray-300">
						<!-- picture here -->
					</div>
					<h3 class="text-black font-semibold pt-2">Luxury Hotel Name</h3>
					<div class="text-gray-500 text-xs">Ngantru</div>
					<div class="petakon-text-gradient py-2 text-lg">IDR10,000</div>
				</a>
			</div>
		{/each}
	</div>
	<button class="petakon-button-outline mx-auto mt-5 petakon-text-gradient hover:text-white">
		Lihat Lebih Banyak
	</button>
</section>
