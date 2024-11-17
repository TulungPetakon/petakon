<script>
	import { fade, fly, scale } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Splide from '@splidejs/splide';
	import destinasi from '$images/destinations/pantai-molang.jpg?format=webp';
	import kuliner from '$images/spotlight/lodho.jpg?format=webp';
	import karnaval from '$images/events/karnaval.jpg?format=webp';
	import jaranan from '$images/events/budaya.jpg?format=webp';

	let height = $state(0);
	let active = $state(0);
	let activeIndicator = $state(0);
	let splide;

	const wisata = [
		{
			title: 'Event dan Festival',
			img: karnaval,
			tmbl: 'Partisipasi',
			description:
				'Rasakan pesona budaya lokal melalui beragam Event dan Festival di Kabupaten Tulungagung! Dari seni tradisional hingga pertunjukan musik modern, setiap acara menawarkan pengalaman yang unik dan memikat.'
		},
		{
			title: 'Kuliner',
			img: kuliner,
			tmbl: 'Explore',
			description:
				'Nikmati Keunikan Kuliner Khas Kabupaten Tulungagung yang menggugah selera! Dari hidangan tradisional hingga makanan modern dengan sentuhan lokal, setiap sajian menghadirkan cita rasa yang autentik.'
		},
		{
			title: 'Destinasi Populer',
			img: destinasi,
			tmbl: 'Rencanakan Perjalanan',
			description:
				'Jelajahi Destinasi Populer di Kabupaten Tulungagung, tempat keindahan alam dan budaya bertemu. Temukan pesona pantai yang memukau, air terjun yang menenangkan, serta situs budaya yang penuh sejarah.'
		},
		{
			title: 'Pertunjukan Budaya',
			img: jaranan,
			tmbl: 'Kunjungi',
			description:
				'Selami Kekayaan Budaya di Kabupaten Tulungagung melalui Beragam Pertunjukan Tradisional! Nikmati tarian, musik, dan seni tradisional yang memukau dan kaya akan nilai sejarah!'
		}
	];

	onMount(() => {
		splide = new Splide('#hero_slider', {
			arrows: false,
			autoplay: true,
			perMove: 1,
			perPage: 2,
			speed: 750,
			interval: 7500,
			type: 'loop',
			pauseOnHover: false,
			isNavigation: true,
			padding: { right: '5rem' },
			breakpoints: {
				1100: {
					padding: { right: '0rem' }
				},
				980: {
					perPage: 1,
					padding: { right: '10rem' }
				},
				850: {
					padding: { right: '5rem' }
				},
				640: {
					perPage: 3,
					padding: '4rem'
				},
				540: {
					perPage: 2
				},
				420: {
					padding: '2rem'
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

<div
	style="clip-path: inset(0);"
	class="absolute left-0 top-0 h-[var(--app-height)] w-full pk-overlay"
>
	{#key activeIndicator}
		<img
			out:fade
			in:scale={{ start: 1.2 }}
			src={wisata[activeIndicator].img}
			alt="Featured"
			class="object-cover object-top w-full h-full fixed left-0 top-0 -z-10 pointer-events-none"
		/>
	{/key}
</div>

<div class="w-full text-white overflow-hidden" style="height: calc(var(--app-height) - 5rem)">
	<div class="lg:py-20 w-full h-full relative flex flex-col-reverse sm:flex-row items-center">
		<div
			class="basis-1/2 h-fit sm:pl-[15%] pl-[10%] pr-[10%] grow sm:pr-0"
			bind:clientHeight={height}
			style="--height:{height}px"
		>
			<h1 class="font-bold text-3xl md:text-4xl">Jangan Lewatkan!</h1>
			<div class="flex mt-10">
				<div
					class="flex flex-col justify-start items-center basis-1/6 relative h-[calc(5/6 * var(--height))]"
				>
					<span
						class="block bg-gray-400 rounded-sm w-[.15rem] opacity-50 h-full absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2"
					></span>
					{#each wisata as { title }, i}
						<button
							onclick={() => splide.go(i)}
							aria-label={title}
							class="w-3 bg-slate-500 relative rounded-full aspect-square border-2 border-transparent hover:border-white transition-all duration-300 mb-auto last:mb-0"
						>
							{#if activeIndicator === i}
								<div
									transition:scale={{ start: 0 }}
									class="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center w-8 bg-sky-500 rounded-full aspect-square border-white border-2"
								>
									{i + 1}
								</div>
							{/if}
						</button>
					{/each}
				</div>
				<div class="basis-5/6 pl-5">
					{#key active}
						<div class="px-1" in:fly={{ x: 20 }}>
							<h2 class="text-2xl uppercase font-bold">{wisata[active].title}</h2>
							<p in:fly={{ x: 20, delay: 150 }} class="mt-5 opacity-85">
								{wisata[active].description}
							</p>
							<button
								in:fly={{ x: 20, delay: 300 }}
								class="mt-5 border-2 border-sky-400 pk-button hover:border-sky-500 hover:bg-sky-500 transition-all duration-300"
							>
								{wisata[active].tmbl}
							</button>
						</div>
					{/key}
				</div>
			</div>
		</div>
		<div
			class="basis-1/3 sm:basis-1/2 sm:h-full mt-20 sm:mt-0 grow sm:pl-12 max-w-[100%] sm:max-w-[50%]"
		>
			<div id="hero_slider" class="splide h-full flex items-center" role="group">
				<div class="splide__track">
					<ul class="splide__list">
						{#each wisata as { title, img }, i}
							<li class="splide__slide p-2 flex items-center group" class:active={i === active}>
								<div
									style="background-image: url({img});"
									class="bg-cover bg-center w-full aspect-square rounded-sm group-[.active]:aspect-[3/4] transition-all duration-300 relative flex"
								>
									<div class="w-full h-1/2 mt-auto bg-gradient-to-t from-black/75 flex items-end">
										<div class="p-2 sm:p-5 opacity-85">
											<h3 class="font-bold">{title}</h3>
											<div class="info text-xs sm:text-sm sm:mt-2 text-cyan-200 opacity-75">
												<!-- <i class="fa-light fa-location-dot"></i> Location/Time/Date: -->
											</div>
										</div>
									</div>
								</div>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
