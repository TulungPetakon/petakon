<script lang="ts">
	import { goto } from '$app/navigation';
	import { getContext } from 'svelte';
	import { preventDefault, stopPropagation } from '$lib/helpers/event-handler.helper';
	import placeholder from '$images/utils/petakon-placeholder.webp';
	import type { PKMap } from '$lib/types/map';
	import type { Activities } from '$lib/types/activities';

	interface Props {
		destinations: Activities.PaginationList;
		district: App.District;
	}

	const { destinations, district }: Props = $props();
	const { list = [], isEnd, page, total = 0 } = $derived(destinations);

	const next = () => {
		const l = district ? `l=${district}&` : '';
		goto(`/explore/activities?${l}p=${page + 1}`);
	};
	const previous = () => {
		const l = district ? `l=${district}&` : '';
		goto(`/explore/activities?${l}p=${page - 1}`);
	};

	const getThumb = async (slug: string) => {
		const { default: raw } = await import(`$images/destinations/${slug}.jpg?w=300?format=webp`);
		return raw;
	};

	const mapToggle: PKMap.Toggle = getContext('mapToggle');
	const openMap = () => mapToggle({ action: 'open', location: { 0: 0 } });

	let saved = $state(false);
	const saveContent = () => {
		saved = !saved;
	};
</script>

<div class="mb-4 flex flex-wrap items-center px-2 sm:flex-nowrap">
	{#if district}
		<h2 class="text-overflow mb-2 font-bold leading-tight sm:mb-0 sm:pr-2">
			Menampilkan <span class="text-orange-400">{total}</span> Hasil untuk Aktivitas di kecamatan
			<span class="capitalize text-sky-600">{district} </span>
		</h2>
	{:else}
		<h2 class="text-overflow mb-2 font-bold leading-tight sm:mb-0 sm:pr-2">
			Menampilkan <span class="text-orange-400">{total}</span> Aktivitas di Kabupaten Tulungagung
		</h2>
	{/if}
	<div class="ml-auto flex items-center">
		<button
			class="pk-button inline-flex items-center border-[0.075rem] border-slate-300 bg-white !py-1 !pl-4 !pr-3 text-base hover:bg-slate-100"
		>
			<span class="mr-2 inline-block w-max"> Paling Relevan </span>
			<i class="fasl fa-angle-down"></i>
		</button>

		<button
			aria-label="List Mode"
			class="pk-button ml-4 inline-flex items-center !p-0 text-2xl"
			title="List View"
		>
			<i class="fasl fa-bars"></i>
		</button>

		<button
			aria-label="Grid Mode"
			title="Grid View"
			class="pk-button ml-4 inline-flex items-center !p-0 text-2xl"
		>
			<i class="fasl fa-grid"></i>
		</button>
	</div>
</div>

<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
	{#each list as { name, slug, address, id }}
		<a href="/activities/{id}-{slug}" class="h-30 px-2 pb-4">
			<div class="h-full overflow-hidden rounded bg-white shadow-lg">
				<div class="aspect-[5/3.5] w-full overflow-hidden bg-gray-200">
					{#await getThumb(slug) then img}
						<img src={img} alt={name} class="size-full" />
					{:catch}
						<img src={placeholder} alt={name} class="size-full" />
					{/await}
				</div>

				<div class="px-4 pb-5 pt-3">
					<div class="flex items-center text-xs md:text-sm">
						<div class="text-overflow pr-2" style="--line-number:1">
							<i class="fasl fa-location-dot"></i> <span> {address}</span>
						</div>
						<div class="ml-auto">
							<button
								class="pk-button !p-0 text-2xl leading-none"
								aria-label="Save for Later"
								title="Save for Later"
								onclick={stopPropagation(preventDefault(saveContent))}
							>
								<i class="fasl fa-bookmark"></i></button
							>
						</div>
					</div>

					<h3 class="text-overflow py-2 text-base font-bold md:text-lg" style="line-height: 1.25;">
						{name}
					</h3>
					<button class="block underline" onclick={stopPropagation(preventDefault(openMap))}>
						Lihat di Peta
					</button>
				</div>
			</div>
		</a>
	{/each}
</div>

<div class="flex flex-wrap py-14 pb-10">
	{#if page > 1}
		<div class="mr-auto pr-2">
			<button
				onclick={previous}
				class="pk-button border-2 bg-white hover:border-sky-500 hover:text-sky-600"
			>
				<i class="fasl fa-arrow-left-long"></i>
				<span>Sebelumnya</span>
			</button>
		</div>
	{/if}

	{#if !isEnd}
		<div class="ml-auto pr-2">
			<button
				onclick={next}
				class="pk-button border-2 bg-white hover:border-sky-500 hover:text-sky-600"
			>
				<span>Selanjutnya</span>
				<i class="fasl fa-arrow-right-long"></i>
			</button>
		</div>
	{/if}
</div>
