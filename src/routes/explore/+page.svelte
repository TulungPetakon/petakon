<script>
	import data from '$lib/dummy/destinations.json';
	import hero from '@images/beach/klatak.jpg';
</script>

<section>
	<div
		class="hero bg-cover bg-center bg-fixed w-full h-[40vh] relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-25"
		style="background-image: url({hero});"
	>
		<div class="px-[10%] relative z-10 flex h-full items-center">
			<h1 class="text-white text-4xl font-bold uppercase">Find your best destination!</h1>
		</div>
	</div>

	<div class="pt-20 px-[5%] md:px-[10%]">
		<div class="w-full flex flex-wrap content-stretch">
			{#each data as { address, category, rating, title }}
				<div class="basis-1/2 sm:basis-1/3 md:basis-1/4 2xl:basis-1/5 p-2">
					<div class="aspect-[5/6] rounded-md shadowed hover:shadowed-active">
						<div class="w-full h-full">
							<div class="aspect-[4/3] bg-gray-100"></div>
							<div class="p-2">
								<h2 class="">{title}</h2>
								<div class="rating"><span> ⭐ ⭐ ⭐ ⭐ ⭐</span></div>
								<div class="flex pt-2 w-full items-center">
									<span class="block basis-1/2 text-sm opacity-75">Tiket Masuk</span>
									<span class="block basis-1/2 text-lg text-right petakon-text-gradient">
										IDR999K</span
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
