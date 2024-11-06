<script>
	import ArticleLink from '$comp/card/ArticleLink.svelte';
	import img from '$images/beach/klatak.jpg';
</script>

<section class="pt-28 px-[5%] md:px-[6.5%]">
	<div class="flex items-end flex-wrap">
		<div class="relative w-full sm:w-1/2">
			<span class="absolute bottom-full left-1/2 -translate-x-1/2 w-full"> Informasi Terkini </span>
			<h2 class="font-bold text-4xl uppercase relative overflow-hidden">
				<span class="relative inline-flex py-1 max-w-[80%] md:max-w-[30%]">
					Wawasan Perjalanan
				</span>
			</h2>
		</div>
		<div class="ml-auto mt-4 w-full sm:w-auto">
			<a
				href="/"
				class="border-2 border-sky-600/50 block w-full px-4 py-2 rounded text-xl transition-all text-center
      hover:border-sky-500 hover:bg-sky-500 hover:text-white"
			>
				<span> Jelajahi Lebih Banyak </span> <i class="fasl fa-arrow-right-long text-xl"></i>
			</a>
		</div>
	</div>

	<!-- List -->
	<div class="flex flex-wrap mt-10 text-white">
		<div
			class="basis-full aspect-video py-2
      sm:basis-7/12 sm:pr-2 sm:aspect-auto sm:py-0"
		>
			<ArticleLink
				thumbnail={img}
				twFont="text-xl md:text-3xl"
				title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, quisquam?"
			/>
		</div>

		<div
			class="basis-full flex flex-col
      sm:basis-5/12"
		>
			<div
				class="w-full aspect-[2/1] py-2
        sm:pl-2 sm:pb-2 sm:pt-0"
			>
				<ArticleLink
					twFont="text-xl"
					thumbnail={img}
					title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, quisquam?"
				/>
			</div>
			<div
				class="w-full aspect-[2/1] py-2
        sm:pl-2 sm:pt-2 sm:pb-0"
			>
				<ArticleLink
					thumbnail={img}
					twFont="text-xl"
					title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, quisquam?"
				/>
			</div>
		</div>
	</div>
</section>
