<script lang="ts">
	import { onMount } from 'svelte';
	import Splide from '@splidejs/splide';
	import placeholder from '$images/utils/petakon-placeholder.webp';
	import type { Glob } from '$lib/types/global';

	let splide: Splide;
	let activeIndicator = $state(0);
	const events = [
		{
			title: 'Tulungagung End Year 2024',
			date: '31 Dec 2024',
			location: 'Halaman Kantor Bupati Tulungagung',
			tags: '',
			periode: '',
			gallery: [
				{
					url: 'save-the-rock',
					type: 'picture'
				}
			]
		},
		{
			title: 'Toeloengagoeng Koeliner Jaman Doeloe',
			date: '27 - 28 April',
			location: '',
			tags: 'budaya',
			periode: 'yearly'
		},
		{
			title: 'Upacara Adat Tradisi Ulur-Ulur Telaga Buret',
			date: '24 Mei',
			location: '',
			tags: 'budaya',
			periode: 'yearly',
			gallery: [
				{
					url: 'ulur-ulur',
					type: 'picture'
				}
			]
		},
		{
			title: 'Grebeg Bhineka Tunggal Ika',
			date: '1 Juni',
			location: '',
			tags: 'budaya',
			periode: 'yearly',
			gallery: [
				{
					url: 'bhineka',
					type: 'picture'
				}
			]
		},
		{
			title: 'Upacara Adat Labuh Laut Pantai Sine ',
			date: '7 Juni',
			location: '',
			tags: 'budaya',
			periode: 'yearly',
			gallery: [
				{
					url: 'labuh-sine',
					type: 'picture'
				}
			]
		},
		{
			title: 'Upacara Adat Satu Suro Pantai Popoh',
			date: '7 Juli',
			location: '',
			tags: 'budaya',
			periode: 'yearly'
		},
		{
			title: 'Upacara Adat Sedekah Bumi Tumpeng Agung Pantai Gemah',
			date: '7 Juli',
			location: '',
			tags: 'budaya',
			periode: 'yearly',
			gallery: [
				{
					url: 'sedekah-gemah',
					type: 'picture'
				}
			]
		},
		{
			title: 'Upacara Adat Grebeg Wilis Buceng Robyong',
			date: '9 Juli',
			location: '',
			tags: 'budaya',
			periode: 'yearly',
			gallery: [
				{
					url: 'grebeg-wilis',
					type: 'picture'
				}
			]
		},
		{
			title: 'Larung Sesaji di Pantai Kedung Tumpang',
			date: '17 Juli',
			location: '',
			tags: 'budaya',
			periode: 'yearly'
		},
		{
			title: 'Upacara Adat Jamasan Pusaka Tombak Kanjeng Kyai Upas',
			date: '19 Juli',
			location: '',
			tags: 'budaya',
			periode: 'yearly',
			gallery: [
				{
					url: 'jamasan-upas',
					type: 'picture'
				}
			]
		},
		{
			title: 'Kirab Budaya dan Ritual Prasasti Sapu Angin Dumadining Thani Marurup, Desa Nglurup',
			date: '1 Agustus',
			location: '',
			tags: 'budaya',
			periode: 'yearly'
		},
		{
			title: 'Rangkaian Acara Siraman Barongan Iring-iringan, Desa Sendang',
			date: '16 - 20 Agustus',
			location: '',
			tags: 'budaya',
			periode: 'yearly'
		},
		{
			title: 'Ekrafaganza Tulungagung Creative Festival',
			date: '23 – 24 Agustus',
			location: '',
			tags: 'budaya',
			periode: 'yearly'
		},
		{
			title: 'Grebeg Tumpeng Sedekah Bumi Pantai Sanggar ',
			date: '8 September',
			location: '',
			tags: 'budaya',
			periode: 'yearly',
			gallery: [
				{
					url: 'tumpeng-sanggar',
					type: 'picture'
				}
			]
		},
		{
			title: 'Tulungagung Fashion Festival',
			date: '14 September',
			location: '',
			tags: 'budaya',
			periode: 'yearly'
		},
		{
			title: 'Konser Musik Selingkar Wilis Bangkit 3',
			date: '16 September',
			location: '',
			tags: 'budaya',
			periode: 'yearly'
		},
		{
			title: 'Upacara Adat Jamasan Pusaka Kyai Golok',
			date: '16 September',
			location: '',
			tags: 'budaya',
			periode: 'yearly'
		},
		{
			title: 'Exotica Tulungagung Carnival',
			date: '21 September',
			location: '',
			tags: 'budaya',
			periode: 'yearly'
		},
		{
			title: 'Pameran Museum Daerah Tulungagung',
			date: '14 - 16 Oktober',
			location: '',
			tags: 'budaya',
			periode: 'yearly',
			gallery: [
				{
					url: 'pameran-museum',
					type: 'picture'
				}
			]
		}
		// {
		// 	title: '',
		// 	date: '',
		// 	location: '',
		// 	tags: 'budaya',
		// 	periode: 'yearly'
		// }
	];

	const getThumb = async (gallery: Glob.Gallery[]) => {
		if (gallery.length < 1) return placeholder;

		const slug = gallery[0].url;
		const { default: raw } = await import(`$images/events/${slug}.jpg?format=webp`);
		return raw;
	};

	const filtered = events
		.filter(({ gallery }) => gallery)
		.map(async (item) => {
			const img = await getThumb(item.gallery || []);
			if (item.gallery) item.gallery[0].url = img;
			return item;
		});

	onMount(async () => {
		const x = await Promise.all(filtered);
		console.log(x);
		splide = new Splide('#event_slider', {
			arrows: false,
			autoplay: true,
			perMove: 1,
			perPage: 3,
			speed: 750,
			interval: 7500,
			type: 'loop',
			pauseOnHover: false,
			isNavigation: false,
			padding: '7.5rem',
			breakpoints: {
				1100: {
					padding: '5rem'
				},
				800: {
					perPage: 2
				},
				450: {
					perPage: 1,
					padding: '5rem'
				}
			}
		}).mount();

		splide.on('move', (index) => {
			if (Number.isNaN(index) || index === activeIndicator) return;
			activeIndicator = index;
		});
	});

	const slidePagination = (dir: string) => {
		if (dir === 'right') {
			if (activeIndicator >= filtered.length) return splide.go(0);
			return splide.go(activeIndicator + 1);
		}

		// Left - previous
		if (activeIndicator <= 0) return splide.go(filtered.length - 1);
		return splide.go(activeIndicator - 1);
	};
</script>

<section class="pt-28">
	<div class="relative flex w-full flex-wrap items-end px-[5%] md:px-[6.5%]">
		<div class="relative w-full sm:w-1/2">
			<span class="absolute bottom-full left-1/2 w-full -translate-x-1/2">
				Jangan Sampai Anda Lewatkan!
			</span>
			<h2 class="relative overflow-hidden text-4xl font-bold uppercase">
				<span class="relative inline-flex max-w-[80%]"> Kalender Event </span>
			</h2>
		</div>
		<div class="ml-auto mt-4 w-full sm:w-auto">
			<a
				href="/"
				class="block w-full rounded border-2 border-sky-600/50 px-4 py-2 text-center text-xl transition-all
      hover:border-sky-500 hover:bg-sky-500 hover:text-white"
			>
				<span> Lihat Semua </span> <i class="fasl fa-arrow-right-long text-xl"></i>
			</a>
		</div>
	</div>

	<div
		class="relative flex flex-wrap pt-10
    lg:flex-nowrap"
	>
		<div id="event_slider" class="splide flex h-full w-full items-center" role="group">
			<div class="splide__track">
				<ul class="splide__list">
					{#await Promise.all(filtered) then data}
						{#each data as { date, title, tags, gallery, location }}
							<li class="splide__slide group flex items-center p-1 sm:p-2 md:p-3 lg:p-4">
								<div
									class="relative flex aspect-[5/6] w-full overflow-hidden rounded-lg transition-all duration-300"
								>
									{#if gallery && gallery.length > 0}
										<img src={gallery[0].url} alt={title} class="absolute z-0 size-full" />
									{/if}
									<span
										class="absolute left-2 top-2 block bg-sky-800/75 px-5 py-1 capitalize text-white"
									>
										{tags}
									</span>
									<div
										class="relative mt-auto flex h-1/2 w-full items-end bg-gradient-to-t from-black/75"
									>
										<div class="p-2 sm:p-5">
											<a
												href="/#"
												class="text-overflow mb-2 text-lg leading-tight text-white transition-colors hover:text-orange-400 sm:text-2xl"
											>
												{title}
											</a>
											<div class="info px-1 text-sm sm:text-base">
												<i class="fasl fa-calendar text-sky-200"></i>
												<span class="inline-block pl-1 text-white">{date}</span>
											</div>
											<div class="info px-1 text-sm sm:text-base">
												<i class="fasl fa-location-dot text-orange-300"></i>
												<span class="inline-block pl-1 text-white">{location || '--'}</span>
											</div>
										</div>
									</div>
								</div>
							</li>
						{/each}
					{/await}
				</ul>
			</div>
		</div>

		<!-- Pagination -->
		{#snippet pagination(dir: string)}
			<button
				onclick={() => slidePagination(dir)}
				class:left-[5%]={dir === 'left'}
				class:right-[5%]={dir === 'right'}
				aria-label="Pagination {dir}"
				class="absolute top-1/2 aspect-square w-12 -translate-y-1/2 rounded-full border bg-slate-100/80 text-xl text-black shadow transition-all hover:bg-white active:scale-95"
			>
				<i class="fas fa-angle-{dir}"></i>
			</button>
		{/snippet}

		{@render pagination('left')}
		{@render pagination('right')}
	</div>
</section>
