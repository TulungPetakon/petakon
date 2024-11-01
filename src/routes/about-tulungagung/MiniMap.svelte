<script>
	import { fade } from 'svelte/transition';
	import { screenSize } from '$lib/stores/app-stores.svelte';
	import alun2 from '@images/destinations/taman-aloon-aloon.jpg?format=webp';
	import img2 from '@images/beach/jls.jpg?format=webp';
	import TulungagungMap from '$comp/svgs/TulungagungMap.svelte';
	import Tooltips from '$comp/utils/Tooltips.svelte';
	import Brand from '$comp/svgs/Brand.svelte';

	let isInteracted = $state(false);
	let svg = $state();
	let coordinates = $state({ x: 0, y: 0, w: 0, h: 0 });
	let active = $state('tulungagung');
	let tooltip = $state(true);

	const onclick = () => (tooltip = !tooltip);
	const onhover = (kecamatan) => {
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
		const b = svg.getBoundingClientRect();
		const { width, height, left, top } = target.getBoundingClientRect();
		coordinates = { x: left - b.left, y: top - b.top, w: width, h: height };
	};

	$effect(() => setTooltipPosition($screenSize));
</script>

<div class="relative">
	{#if tooltip}
		<div class="absolute z-10 pointer-events-none transition-all duration-300" style={position}>
			{#if !isInteracted}
				<div class="w-8 absolute bottom-full translate-y-3" in:fade><Brand animate nobase /></div>
			{:else}
				<Tooltips>
					<div class="w-52 text-sm relative">
						<button
							onclick={() => (tooltip = !tooltip)}
							aria-label="Close Tooltip"
							class="absolute right-0 top-0 text-xl bg-black/80 w-8 aspect-square rounded-full text-white opacity-75 hover:bg-black hover:opacity-1 active:scale-95 transition-transform z-10"
						>
							<i class="fasl fa-close"></i>
						</button>

						<div class="flex w-full overflow-hidden">
							<img
								src={active === 'tulungagung' ? alun2 : img2}
								alt="Taman Aloon Aloon"
								class="w-full aspect-[6/4] hover:scale-110 transition-transform duration-500"
							/>
						</div>

						{#if active === 'tulungagung'}
							<h3 class="font-bold py-1 px-2">Pusat Kota Tulungagung</h3>
						{:else}
							<h3 class="font-bold py-1 px-2 capitalize">Kecamatan {active}</h3>
						{/if}

						<div class="h-10 overflow-hidden">
							<div class="h-20 transition-all hover:-translate-y-1/2">
								<p class="leading-tight text-xs px-2 py-1 h-10 block basis-full">
									Pusat Pemerintahan Lorem ipsum dolor sit amet.
								</p>
								<div class="h-10 capitalize">
									<a
										href="/"
										class="flex items-center justify-center h-full w-full bg-orange-400 text-white active:bg-orange-600 transition-colors"
									>
										<span>Jelajahi {active}</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</Tooltips>
			{/if}
		</div>
	{/if}

	<TulungagungMap bind:svg {active} {onhover} {onclick} {onleave} />
</div>
