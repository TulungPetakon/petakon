<script>
	import { getContext } from 'svelte';
	import { preventDefault, stopPropagation } from '$lib/helpers/event-handler.helper';

	const { data } = $props();
	const { essentials } = data;

	const getThumb = async (slug) => {
		const { default: raw } = await import(`$images/essentials/${slug}.jpg`);
		return raw;
	};

	const hello = (e) => {
		console.log('hallo', e);
	};
	const mapToggle = getContext('mapToggle');
	const openMap = () => mapToggle({ action: 'open', location: '' });
</script>

<section class="px-[calc(5%-0.75rem)] md:px-[calc(10%-0.75rem)] pt-5 pb-20 w-full">
	<div
		class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:flex 2xl:grid-cols-none 2xl:flex-wrap"
	>
		{#each essentials as { location, name, slug }}
			<div class="p-3 pb-5 2xl:w-72">
				<span>
					<div class="w-full aspect-[280/265] bg-gray-300 rounded-xl overflow-hidden relative">
						{#await getThumb(slug) then img}
							<img src={img} alt="Hotels" class="size-full" />
						{/await}
						<div class="absolute top-2 right-2">
							<button
								onclick={stopPropagation(preventDefault(hello))}
								class="pk-button !p-0 w-8 text-3xl leading-none relative"
								aria-label="Save for Later"
								title="Save for Later"
							>
								<i class="fas fa-bookmark block relative text-gray-400/50"></i>
								<i
									class="fasl fa-bookmark block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white"
								></i>
							</button>
						</div>
					</div>
					<div class="mt-2">
						<h2
							class="font-semibold text-lg leading-none text-overflow pt-2 pb-1 pr-5"
							style="--line-number:1"
						>
							{name}
						</h2>
						<button class="flex">
							<div class="text-gray-600 text-sm text-overflow">
								<i class="fasl fa-location-dot"></i> <span> {location}</span>
							</div>
						</button>

						<!-- <div class="my-1">
								<span class="font-semibold">Rp999.999</span> <span>/malam</span>
							</div> -->
						<button class="block underline" onclick={stopPropagation(preventDefault(openMap))}>
							Lihat di Peta</button
						>
					</div>
				</span>
			</div>
		{/each}
	</div>
</section>
