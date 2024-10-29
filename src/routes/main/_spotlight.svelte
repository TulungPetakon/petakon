<script>
	import { onMount } from 'svelte';
	import Splide from '@splidejs/splide';
	import batik from '@images/spotlight/batik.jpg';
	import marmer from '@images/spotlight/marmer.jpg';
	import lodho from '@images/spotlight/lodho.jpg';

	let active = $state(0);
	let activeIndicator = $state(0);
	let splide;

	const spots = [
		{ title: 'Batik Gajah Mada', img: batik },
		{ title: 'Berbagai Produk Marmer', img: marmer },
		{ title: 'Kuliner Lodho Khas Tulungagung', img: lodho }
	];

	const pagingOffset = $derived.by(() => {
		const width = (1 / spots.length) * 100;
		const offset = activeIndicator < 1 ? 0 : (activeIndicator / spots.length) * 100;
		return `width:${width}%;left:${offset}%`;
	});

	const next = () => {
		if (activeIndicator >= spots.length) return splide.go(0);
		return splide.go(activeIndicator + 1);
	};

	const previous = () => {
		if (activeIndicator <= 0) {
			splide.go(spots.length - 1);
			return;
		}
		return splide.go(activeIndicator - 1);
	};

	onMount(() => {
		splide = new Splide('#spotlight_slider', {
			arrows: false,
			autoplay: true,
			perMove: 1,
			perPage: 1,
			speed: 750,
			interval: 7500,
			type: 'loop',
			pauseOnHover: false,
			isNavigation: true,
			padding: { right: '5rem' },
			breakpoints: {
				768: {
					perPage: 2
				},
				640: {
					perPage: 1
				}
			}
		}).mount();

		splide.on('move', (index) => {
			if (Number.isNaN(index) || index === activeIndicator) return;
			activeIndicator = index;
		});
		splide.on('active', ({ slideIndex }) => {
			if (slideIndex < 0) return;
			active = slideIndex;
		});
		splide.on('inactive', ({ isClone, slide }) => {
			if (!isClone) return;
			slide.classList.remove('active');
		});
	});
</script>

{#snippet pagination()}
	<div class="mt-10">
		<div class="w-full h-1 bg-slate-300 relative">
			<div class="block absolute h-full bg-orange-400 transition-all" style={pagingOffset}></div>
		</div>
		<div class="flex">
			<div class="text-left text-3xl font-black pt-1">
				<span class="text-white/85">{activeIndicator + 1}</span><span class="text-white/50"
					>/{spots.length}</span
				>
			</div>
			<div class="flex ml-auto">
				<button
					onclick={previous}
					aria-label="Previous"
					class="w-8 aspect-square text-2xl hover:text-orange-400 transition-all"
				>
					<i class="fasl fa-angle-left"></i>
				</button>
				<button
					onclick={next}
					aria-label="Next"
					class="w-8 aspect-square text-2xl hover:text-orange-400 transition-all"
				>
					<i class="fasl fa-angle-right"></i>
				</button>
			</div>
		</div>
	</div>
{/snippet}

<section
	class="w-full bg-[#1b1b1b] pt-20 pb-14 text-white flex flex-col
  md:flex-row md:pb-20"
>
	<div
		class="w-full flex items-end pr-[5%] pl-[5%] basis-full
    md:pl-[10%] md:basis-6/12
    xl:basis-7/12"
	>
		<div class="relative">
			<span class="absolute bottom-full left-1/2 -translate-x-1/2 w-full text-left">
				SPOTLIGHT
			</span>
			<h2 class="font-bold text-5xl text-left relative overflow-hidden">
				<span class="relative inline-block py-1 w-full leading-tight">
					Ciri Khas Kota <u>Tulungagung</u> yang Layak Ditelusuri
				</span>
			</h2>

			<p class="text-lg mt-6">
				Temukan keunikan budaya Indonesia melalui ciri khas yang menarik, seperti kerajinan tangan,
				tradisi lokal, dan kuliner khas yang menggugah selera. Eksplorasi ini mengungkap keindahan
				dan kekayaan identitas bangsa.
			</p>

			<a
				href="/"
				class="inline-flex items-center rounded mt-10 pk-button border-white border-2 text-lg
      hover:border-orange-400"
			>
				<span> Jelajahi Tulungagung </span>
				<i class="fasl fa-arrow-right-long ml-4 text-xl leading-none"></i>
			</a>

			<div class="hidden md:block">
				{@render pagination()}
			</div>
		</div>
	</div>

	<!-- Right Pane -->
	<div
		class="basis-full mt-10
    md:basis-6/12 md:mt-0 md:w-6/12
    xl:basis-5/12 xl:w-5/12"
	>
		<div id="spotlight_slider" class="splide h-full w-full flex items-center" role="group">
			<div class="splide__track w-full">
				<ul class="splide__list">
					{#each spots as { img, title }, i}
						<li class="splide__slide p-2 flex items-center group" class:active={i === active}>
							<div class="relative w-full h-full aspect-[11/12] overflow-hidden">
								<div
									style="background-image: url({img});"
									class="bg-cover bg-center w-full h-full rounded-sm transition-all duration-300 flex bg-gray-300 absolute top-0 left-0
                  group-[.active:hover]:scale-110
                  after:w-full after:bg-gradient-to-t after:from-black/75 after:absolute after:bottom-0 after:left-0 after:h-2/3"
								></div>
								<div class="w-full h-full mt-auto flex items-end relative z-10">
									<div class="p-5 sm:p-10 opacity-90">
										<a href="/" class="text-2xl md:text-4xl hover:text-orange-400 transition-all">
											{title}
										</a>
									</div>
								</div>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="block md:hidden px-[5%]">
			{@render pagination()}
		</div>
	</div>
</section>
