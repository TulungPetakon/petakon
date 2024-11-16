<script>
	import img from '$images/beach/buper.jpg';
	import { preventDefault, stopPropagation } from '$lib/helpers/event-handler.helper';
	import { getContext } from 'svelte';
	const mapToggle = getContext('mapToggle');
	const openMap = () => mapToggle({ action: 'open', location: '' });
</script>

<div class="px-2 flex flex-wrap sm:flex-nowrap items-center mb-4">
	<h2 class="font-bold leading-tight text-overflow sm:mb-0 mb-2 sm:pr-2">
		Menampilkan <span class="text-orange-400">15</span> Hasil untuk
		<span class="text-sky-600"> Aktivitas di kecamatan Sendang </span>
	</h2>
	<div class="ml-auto flex items-center">
		<button
			class="inline-flex items-center pk-button !pr-3 !pl-4 !py-1 bg-white text-base hover:bg-slate-100 border-[0.075rem] border-slate-300"
		>
			<span class="inline-block w-max mr-2"> Paling Relevan </span>
			<i class="fasl fa-angle-down"></i>
		</button>

		<button
			aria-label="List Mode"
			class="inline-flex items-center pk-button !p-0 text-2xl ml-4"
			title="List View"
		>
			<i class="fasl fa-bars"></i>
		</button>

		<button
			aria-label="Grid Mode"
			title="Grid View"
			class="inline-flex items-center pk-button !p-0 text-2xl ml-4"
		>
			<i class="fasl fa-grid"></i>
		</button>
	</div>
</div>

<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 grid-cols-2">
	{#each Array(15) as _}
		<div class="h-30 px-2 pb-4">
			<div class="bg-white rounded overflow-hidden shadow-lg">
				<div class="w-full aspect-[5/3.5] bg-gray-200 overflow-hidden">
					<img src={img} alt="Buper" class="size-full" />
				</div>

				<div class="px-4 pt-3 pb-5">
					<div class="text-xs md:text-sm flex items-center">
						<div class="left text-overflow" style="--line-number:1">
							<i class="fasl fa-location-dot"></i> <span> Sendang, Kec. Sendang</span>
						</div>
						<div class="ml-auto">
							<button
								class="pk-button !p-0 text-2xl leading-none"
								aria-label="Save for Later"
								title="Save for Later"
							>
								<i class="fasl fa-bookmark"></i></button
							>
						</div>
					</div>

					<h3 class="py-2 font-bold text-base md:text-lg text-overflow" style="line-height: 1.25;">
						Bumi Perkemahan Jurang Senggani
					</h3>
					<button class="block underline" onclick={stopPropagation(preventDefault(openMap))}>
						Lihat di Peta</button
					>
				</div>
			</div>
		</div>
	{/each}
</div>

<div class="flex">
	<div class="ml-auto pr-2 pb-10 py-14">
		<button class="pk-button border-2 bg-white hover:text-sky-600 hover:border-sky-500">
			<span>Halaman Selanjutnya</span>
			<i class="fasl fa-arrow-right-long"></i>
		</button>
	</div>
</div>
