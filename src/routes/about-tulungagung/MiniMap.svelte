<script lang="ts">
	import { fade } from 'svelte/transition';
	import { screenSize } from '$lib/stores/app-readable.svelte';
	import alun2 from '$images/destinations/tulungagung.jpg';
	import img2 from '$images/destinations/highlight-sendang.jpg?format=webp&img';
	import TulungagungMap from '$comp/svgs/TulungagungMap.svelte';
	import Tooltips from '$comp/utils/Tooltips.svelte';
	import Brand from '$comp/svgs/Brand.svelte';

	let isInteracted = $state(false);
	let svg = $state() as HTMLElement;
	let coordinates = $state({ x: 0, y: 0, w: 0, h: 0 });
	let active: App.District = $state('tulungagung');
	let tooltip = $state(true);

	const onclick = () => (tooltip = !tooltip);
	const onhover = (kecamatan: App.District) => {
		active = kecamatan;
		isInteracted = true;
	};

	const onleave = () => {
		if (tooltip) return;
		active = 'tulungagung';
		isInteracted = false;
		tooltip = true;
	};

	const position = $derived.by(() => {
		const { x, y, w, h } = coordinates;
		return `transform: translate(${x}px, ${y}px); width:${w}px; height:${h}px`;
	});

	const setTooltipPosition = () => {
		if (!active) return;
		const target = svg.querySelector(`path#${active}`);
		if (!target) return;
		const b = svg.getBoundingClientRect();
		const { width, height, left, top } = target.getBoundingClientRect();
		coordinates = { x: left - b.left, y: top - b.top, w: width, h: height };
	};

	$effect(() => !$screenSize || setTooltipPosition());
</script>

<div class="relative">
	{#if tooltip}
		<div class="pointer-events-none absolute z-10 transition-all duration-300" style={position}>
			{#if !isInteracted}
				<div class="absolute bottom-full w-8 translate-y-3" in:fade><Brand animate nobase /></div>
			{:else}
				<Tooltips>
					<div class="relative w-52 text-sm">
						<button
							onclick={() => (tooltip = !tooltip)}
							aria-label="Close Tooltip"
							class="hover:opacity-1 absolute right-0 top-0 z-10 aspect-square w-8 rounded-full bg-black/80 text-xl text-white opacity-75 transition-transform hover:bg-black active:scale-95"
						>
							<i class="fasl fa-close"></i>
						</button>

						<div class="flex w-full overflow-hidden">
							<img
								src={active === 'tulungagung' ? alun2 : img2}
								alt="Taman Aloon Aloon"
								class="aspect-[6/4] w-full transition-transform duration-500 hover:scale-110"
							/>
						</div>

						{#if active === 'tulungagung'}
							<h3 class="px-2 py-1 font-bold">Pusat Kota Tulungagung</h3>
						{:else}
							<h3 class="px-2 py-1 font-bold capitalize">Kecamatan {active}</h3>
						{/if}

						<div class="h-10 overflow-hidden">
							<div class="h-10 capitalize">
								<a
									href="/kecamatan/{active}"
									class="flex h-full w-full items-center justify-center bg-orange-400 text-white transition-colors active:bg-orange-600"
								>
									<span>Jelajahi</span>
								</a>
							</div>
						</div>
					</div>
				</Tooltips>
			{/if}
		</div>
	{/if}

	<TulungagungMap bind:svg {active} {onhover} {onclick} {onleave} />
</div>
