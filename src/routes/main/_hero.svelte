<script>
	import { fly, scale } from 'svelte/transition';
	import Splide from '@splidejs/splide';
	import klatak from '@images/beach/klatak.jpg?format=webp';
	import senggani from '@images/beach/jurang-senggani.jpg?format=webp';
	import dlodo from '@images/beach/dlodo.jpg?format=webp';
	import jls from '@images/beach/jls.jpg';
	import pathok from '@images/beach/pathok-gebang.jpeg';

	let active = $state(0);
	let activeIndicator = $state(0);
	let splide;

	const wisata = [
		{ title: 'Event dan Festival', img: pathok, tmbl: 'Partisipasi' },
		{ title: 'Kuliner', img: dlodo, tmbl: 'Explore' },
		{ title: 'Destinasi Populer', img: senggani, tmbl: 'Rencanakan Perjalanan' },
		{ title: 'Pertunjukan Budaya', img: jls, tmbl: 'Kunjungi' }
	];

	$effect(() => {
		splide = new Splide('.splide', {
			arrows: false,
			autoplay: true,
			perMove: 1,
			perPage: 2,
			speed: 750,
			interval: 7500,
			type: 'loop',
			pauseOnHover: false,
			isNavigation: true,
			padding: { right: '5rem' }
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

<div class="w-full h-[var(--app-height)] text-white">
	<div
		class="bg-cover bg-fixed h-full w-full absolute left-0 top-0 after:bg-black/35 after:absolute after:top-0 after:left-0 after:w-full after:h-full"
		style="background-image: url({klatak});"
	></div>

	<div class="py-20 w-full h-full relative flex items-center">
		<div class="basis-1/2 h-1/2 pl-52 grow">
			<h1 class="font-bold text-5xl">Jangan Lewatkan!</h1>
			<div class="flex mt-10 h-full">
				<div class="flex flex-col justify-start items-center basis-1/6 relative h-5/6">
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
									class="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center w-8 petakon-bg-gradient rounded-full aspect-square border-white border-2"
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
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt quo deleniti
								voluptatem aspernatur, soluta repellat enim nam tenetur perferendis fugit, quis
								suscipit sequi harum. Unde soluta dolorem corporis eum eveniet!
							</p>
							<button in:fly={{ x: 20, delay: 300 }} class="mt-5 petakon-button-outline">
								{wisata[active].tmbl}
							</button>
						</div>
					{/key}
				</div>
			</div>
		</div>
		<div class="basis-1/2 h-full grow pl-12 max-w-[50%]">
			<div
				class="splide h-full flex items-center"
				role="group"
				aria-label="Splide Basic HTML Example"
			>
				<div class="splide__track">
					<ul class="splide__list">
						{#each wisata as { title, img }, i}
							<li class="splide__slide p-2 flex items-center group" class:active={i === active}>
								<div
									style="background-image: url({img});"
									class="bg-cover bg-center w-full aspect-square rounded-lg group-[.active]:aspect-[3/4] transition-all duration-300 relative flex"
								>
									<div class="w-full h-1/2 mt-auto bg-gradient-to-t from-black/75 flex items-end">
										<div class="p-5 opacity-85">
											<h3 class="font-bold">{title}</h3>
											<div class="info text-sm mt-2 text-cyan-200 opacity-75">
												Location/Time/Date:
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
