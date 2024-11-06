<script>
	import data from '$lib/dummy/destinations.json';
	import { cart } from '$lib/stores/app-writable.svelte';
	import hero from '$images/beach/klatak.jpg?format=webp';

	const getThumb = async (name) => {
		try {
			if (typeof name !== 'string') throw 'error';
			const { default: url } = await import(`$images/destinations/${name}.jpg?format=webp&w=640`);
			return { url };
		} catch (e) {
			return { error: true };
		}
	};

	const addToPlan = (i) => {
		const isContain = $cart.findIndex((c) => c.id == data[i].id) > 0;
		if (isContain) return;
		cart.update((v) => {
			v.push(data[i]);
			return v;
		});
	};
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
			{#each data as { address, category, rating, title, galery, id }, i}
				{@const inCart = $cart.findIndex((c) => c.id == id) < 0}
				<div class="basis-1/2 sm:basis-1/3 md:basis-1/4 2xl:basis-1/5 p-2">
					<div
						class="aspect-[5/6] rounded-md group pk-shadow hover:pk-shadow-active"
						class:pk-shadow-active={!inCart}
					>
						<div class="w-full h-full bg-white">
							<div class="aspect-[4/3] bg-gray-100 relative">
								{#await getThumb(galery) then { url, error }}
									{#if !error && url}
										<img src={url} alt="Mantab" class="w-full h-full object-cover" />
									{/if}
								{/await}

								<span
									class="absolute petakon-bg-gradient text-white text-sm px-5 right-0 bottom-0 capitalize rounded-l-xl"
								>
									{category}
								</span>
							</div>
							<div class="p-2">
								<h2 class="">{title}</h2>
								<div class="rating"><span> ⭐ ⭐ ⭐ ⭐ ⭐</span></div>
								<div class="flex pt-2 w-full items-center">
									<span class="block basis-1/2 text-sm opacity-75">Tiket Masuk</span>
									<span class="block basis-1/2 text-lg text-right petakon-text-gradient">
										IDR999K
									</span>
								</div>

								{#if inCart}
									<div class="flex opacity-0 transition-opacity group-[:hover]:opacity-100">
										<button
											onclick={() => addToPlan(i)}
											class="px-5 py-1 text-sm rounded-full text-white ml-auto petakon-bg-gradient active:scale-95 transition-transform"
										>
											+ Pesan
										</button>
									</div>
								{/if}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
