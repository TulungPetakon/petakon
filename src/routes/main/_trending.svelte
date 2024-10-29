<script>
	import img from '@images/beach/jls.jpg';
</script>

<section class="pt-28 px-[5%] md:px-[6.5%]">
	<div class="w-full relative">
		<span class="absolute bottom-full left-1/2 -translate-x-1/2 w-full text-center">
			Sedang Ramai Dibicarakan
		</span>
		<h2 class="font-bold text-3xl uppercase text-center relative overflow-hidden">
			<span
				class="relative inline-flex px-5 py-1 max-w-[80%] md:max-w-[30%]
        before:absolute before:right-full before:top-1/2 before:-translate-y-1/2 before:h-[2px] before:w-[400%] before:bg-sky-950
        after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:h-[2px] after:w-[400%] after:bg-sky-950"
			>
				Trending
			</span>
		</h2>
	</div>

	<div
		class="flex pt-10 flex-wrap
    lg:flex-nowrap"
	>
		{#each Array(3) as _}
			<div
				class="p-2
        sm:basis-1/3 sm:w-1/3"
			>
				<div class="w-full rounded overflow-hidden relative group">
					<picture
						class="block w-full transition-transform group-hover:scale-110 duration-300 aspect-[5/3]
            sm:aspect-[5/6]"
					>
						<img src={img} alt="Thumbnail" class="w-full h-full object-cover object-top" />
					</picture>

					<span class="tags bg-sky-900 py-2 px-4 text-white/75 absolute top-0 left-0">
						Santai, Kuliner
					</span>
					<h3 class="p-2 absolute w-full bottom-0 left-0">
						<div class="bg-white block p-4 rounded font-bold text-lg">
							<a
								style="--line-number: 3;"
								class="text-overflow leading-tight transition-all hover:text-orange-500"
								href="/"
							>
								Nikmati JLS Viewpoint Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Placeat, aut?
							</a>
						</div>
					</h3>
				</div>
			</div>
		{/each}
	</div>
</section>
