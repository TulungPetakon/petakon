<script>
	import { flip } from 'svelte/animate';
	import { cart } from '$lib/stores/app-writable.svelte';
	import hero from '$images/beach/klatak.jpg?format=avif';

	const removefromPlan = (i) => {
		cart.update((v) => {
			const nV = v.filter((x, index) => i !== index);
			return nV;
		});
	};

	const getThumb = async (name) => {
		try {
			if (typeof name !== 'string') throw 'error';
			const { default: url } = await import(`$images/destinations/${name}.jpg?format=webp&w=640`);
			return { url };
		} catch (e) {
			return { error: true };
		}
	};
</script>

<section>
	<div
		class="hero bg-cover bg-center bg-fixed w-full h-[40vh] relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-25"
		style="background-image: url({hero});"
	>
		<div class="px-[10%] relative z-10 flex h-full items-center">
			<h1 class="text-white text-4xl font-bold uppercase">Rencana Perjalanan</h1>
		</div>
	</div>

	<div class="pt-20 px-[5%] md:px-[10%]">
		{#each $cart as plan, i (plan)}
			{@const { id, title, address, galery } = plan}
			<div class="w-full p-2 flex flex-wrap md:flex-nowrap border" animate:flip={{ duration: 200 }}>
				<div class="w-[280px] aspect-video bg-gray-100">
					{#await getThumb(galery) then { url, error }}
						{#if !error && url}
							<img src={url} alt="Mantab" class="w-full h-full object-cover" />
						{/if}
					{/await}
				</div>
				<div class="basis-6/12 pl-5">
					<h2 class="text-2xl font-bold uppercase">{title}</h2>
					<span class="block opacity-50"> Destinasi </span>
					<span class="block opacity-50"> 20 Desember 2024 </span>
					<span class="block opacity-50"> {address} </span>
				</div>
				<div class="flex justify-center items-center">
					<span class="block text-2xl pk-text-gradient"> Rp 999.000 </span>
				</div>
				<div class="flex justify-center items-center basis-1/12 ml-auto">
					<button
						onclick={() => removefromPlan(i)}
						class="text-sm border border-red-400 py-2 px-5 text-red-500 active:scale-95 transition-transform"
					>
						Cancel
					</button>
				</div>
			</div>
		{/each}

		<div class="flex mt-5">
			<div class="ml-auto">
				<div class="flex items-center">
					<span class="block text-lg font-bold">TOTAL:</span>
					<span class="ml-2 block text-2xl pk-text-gradient">Rp 999.000</span>
				</div>
				<div class="continue flex">
					<button class="pk-button text-white bg-sky-500 ml-auto mt-6"> CONTINUE </button>
				</div>
			</div>
		</div>
	</div>
</section>
