<script lang="ts">
	import { getContext } from 'svelte';
	import { preventDefault, stopPropagation } from '$lib/helpers/event-handler.helper';
	import img from '$images/transports/harapan-jaya.jpg';
	import type { PKMap } from '$lib/types/map';

	const mapToggle: PKMap.Toggle = getContext('mapToggle');
	const openMap = () => mapToggle({ action: 'open', location: { 0: 0 } });
</script>

<!-- <div class="px-2 flex flex-wrap sm:flex-nowrap items-center mb-4">
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
	</div>
</div> -->

<div class="block">
	{#each Array(1) as _}
		<div class="w-full px-2 pb-4">
			<div class="flex w-full bg-white">
				<div class="basis-9/12 px-5 py-2">
					<h2 class="text-xl font-semibold">Harapan Jaya</h2>
					<div class="block pb-2">
						{#each ['Dengan Sopir', 'AC', 'Minibus'] as text}
							<div class="inline-block rounded-3xl border-2 px-2 text-xs">{text}</div>
						{/each}
					</div>

					<button class="block underline" onclick={stopPropagation(preventDefault(openMap))}>
						Lihat di Peta
					</button>
				</div>
				<div class="basis-3/12">
					<img src={img} alt="Transportasi" />
				</div>
			</div>
		</div>
	{/each}
</div>

<div class="flex">
	<div class="ml-auto py-14 pb-10 pr-2">
		<!-- <button class="pk-button border-2 bg-white hover:text-sky-600 hover:border-sky-500">
			<span>Halaman Selanjutnya</span>
			<i class="fasl fa-arrow-right-long"></i>
		</button> -->
	</div>
</div>
