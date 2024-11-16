<script>
	import img from '$images/accomodations/frontone.jpg';
	import { preventDefault, stopPropagation } from '$lib/helpers/event-handler.helper';
	import { getContext } from 'svelte';

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
		{#each Array(20) as _}
			<div class="p-3 pb-5 2xl:w-72">
				<a href="/accommodation/88390-front">
					<div class="w-full aspect-[280/265] bg-gray-300 rounded-xl overflow-hidden relative">
						<img src={img} alt="Hotels" class="size-full" />
						<div class="absolute top-2 right-2">
							<button
								onclick={stopPropagation(preventDefault(hello))}
								class="pk-button !p-0 w-8 text-3xl leading-none relative"
								aria-label="Save for Later"
								title="Save for Later"
							>
								<i class="fas fa-bookmark block relative text-gray-400"></i>
								<i
									class="fasl fa-bookmark block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white"
								></i>
							</button>
						</div>
					</div>
					<div class="mt-2 flex items-start">
						<div style="--line-number:1" class="basis-10/12 w-10/12">
							<h2 class="font-semibold text-lg leading-none text-overflow pt-2 pb-1 pr-5">
								Front One Hotel Tulungagung
							</h2>
							<button class="flex">
								<div class="text-gray-600 text-sm text-overflow">
									<i class="fasl fa-location-dot"></i> <span> Pusat Kota Tulungagung</span>
								</div>
							</button>

							<div class="my-1">
								<span class="font-semibold">Rp999.999</span> <span>/malam</span>
							</div>
							<button class="block underline" onclick={stopPropagation(preventDefault(openMap))}>
								Lihat di Peta</button
							>
						</div>

						<div class="ml-auto flex items-center">
							<i class="fas fa-star text-xs mr-1"></i>
							<span class="text-lg">4.5</span>
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
</section>
