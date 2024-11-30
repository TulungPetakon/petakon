<script lang="ts">
	import { getContext } from 'svelte';
	import { preventDefault, stopPropagation } from '$lib/helpers/event-handler.helper';
	import type { PKMap } from '$lib/types/map.js';

	const { data } = $props();
	const { accomodation } = data;

	const hello = (e: Event) => {
		console.log('hallo', e);
	};
	const mapToggle: PKMap.Toggle = getContext('mapToggle');
	const openMap = () => mapToggle({ action: 'open', location: { 0: 0 } });

	const getThumb = async (name: string) => {
		const { default: img } = await import(`$images/accomodations/${name}.jpg?w-300`);
		return img;
	};
</script>

<section class="w-full px-[calc(5%-0.75rem)] pb-20 pt-5 md:px-[calc(10%-0.75rem)]">
	<div
		class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:flex 2xl:grid-cols-none 2xl:flex-wrap"
	>
		{#each accomodation as { id, name, location, slug }}
			<div class="p-3 pb-5 2xl:w-72">
				<a href="/accommodation/{id}-{slug}">
					<div class="relative aspect-[280/265] w-full overflow-hidden rounded-xl bg-gray-300">
						{#await getThumb(slug) then img}
							<img src={img} alt="Hotels" class="size-full" />
						{/await}
						<div class="absolute right-2 top-2">
							<button
								onclick={stopPropagation(preventDefault(hello))}
								class="pk-button relative w-8 !p-0 text-3xl leading-none"
								aria-label="Save for Later"
								title="Save for Later"
							>
								<i class="fas fa-bookmark relative block text-gray-600/50"></i>
								<i
									class="fasl fa-bookmark absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 text-white"
								></i>
							</button>
						</div>
					</div>
					<div class="mt-2 flex items-start">
						<div style="--line-number:1" class="w-10/12 basis-10/12">
							<h2 class="text-overflow pb-1 pr-5 pt-2 text-lg font-semibold leading-none">
								{name}
							</h2>
							<button class="flex">
								<div class="text-overflow text-sm text-gray-600">
									<i class="fasl fa-location-dot"></i>
									<span> {location.desa}, Kec. {location.kecamatan} </span>
								</div>
							</button>

							<!-- <div class="my-1">
								<span class="font-semibold">Rp999.999</span> <span>/malam</span>
							</div> -->

							<button class="block underline" onclick={stopPropagation(preventDefault(openMap))}>
								Lihat di Peta
							</button>
						</div>

						<div class="ml-auto flex items-center">
							<i class="fas fa-star mr-1 text-xs"></i>
							<span class="text-lg">5.0</span>
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
</section>
