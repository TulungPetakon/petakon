<script lang="ts">
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';
	import { isMobile, screenSize } from '$lib/stores/app-readable.svelte.js';
	import { scrollTop, topbarHeight, topBarMode } from '$lib/stores/app-writable.svelte.js';
	import type { Activities } from '$lib/types/activities';
	import type { Utils } from '$lib/types/utils.js';
	import placeholder from '$images/utils/petakon-placeholder.webp';

	import BreadCrumbs from '$comp/utils/BreadCrumbs.svelte';
	import ProductPreview from '$comp/gallery/ProductPreview.svelte';
	import Description from './_/Description.svelte';

	const { data } = $props();
	const activity = data.activity as unknown as Activities.Item;
	const { address, description, name, rating, slug, gallery } = activity;

	let saved = $state(false);
	const saveContent = () => {
		saved = !saved;
	};

	$effect(() => topBarMode.set($isMobile ? 'hidden' : 'default')); // Change TopBar on mobile screen
	$effect.pre(() => () => topBarMode.set('default')); // Set back to default Topbar after leaving the page

	const scrollControl: Utils.scrollControl = getContext('scrollControl');
	const getTargetPosition: (x: string) => number = getContext('getTargetPosition');
	const targetPos = () => getTargetPosition('#offers') - $topbarHeight;
	const scroll = () => scrollControl({ instant: true, scrollTo: targetPos() });
</script>

<section class="relative">
	<!-- TopBar -->
	<div
		class="absolute left-0 top-0 z-10 flex w-full items-center px-[2%] py-2 sm:relative sm:px-[5%] md:px-[6.5%] xl:px-[15%]"
	>
		<div class="sm:hidden">
			<button
				class="inline-flex aspect-square w-10 items-center justify-center rounded-full bg-white/80 text-xl text-black"
				aria-label="Back to Activities"
			>
				<i class="fasl fa-angle-left"></i>
			</button>
		</div>
		<BreadCrumbs
			structure={[
				{ text: 'Home', href: '/' },
				{ text: 'Activities', href: '/activities' },
				{ text: name, active: true }
			]}
		/>

		<div class="ml-auto flex text-base md:text-sm">
			<button
				class="pk-button mr-2 inline-flex aspect-square w-10 items-center justify-center !rounded-full
				bg-white/80 !px-2 text-black sm:block sm:aspect-auto sm:w-auto sm:bg-transparent sm:text-gray-600 sm:hover:text-black"
				aria-label="share"
			>
				<i class="fasl fa-arrow-up-from-bracket inline-block text-base leading-none"></i>
				<span class="hidden sm:inline-block">Bagikan</span>
			</button>
			<button
				class="pk-button mr-2 inline-flex aspect-square w-10 items-center justify-center !rounded-full
				bg-white/80 !px-2 text-black sm:block sm:aspect-auto sm:w-auto sm:bg-transparent sm:text-gray-600 sm:hover:text-black"
				aria-label="save"
				onclick={saveContent}
			>
				<i
					class="{saved ? 'fas' : 'fasl'} fa-heart inline-block text-base leading-none"
					class:text-rose-500={saved}
				></i>
				<span class="hidden sm:inline-block">Simpan</span>
			</button>
		</div>
	</div>

	<!-- Photo Gallery -->
	<ProductPreview {gallery} {slug} title={name} />

	<!-- Details -->
	<div class="relative px-[5%] py-2 sm:py-5 md:px-[6.5%] xl:px-[15%]">
		<div class="flex">
			<div class="basis-full md:pr-5 lg:basis-7/12 xl:basis-8/12 xl:pr-20">
				<div id="general" class="border-b pb-7">
					<h1 class=" pb-1 pt-2 text-2xl font-semibold md:text-3xl">{name}</h1>
					<div class="flex items-center">
						{#each ['Edukasi', 'Alam', 'Glamping'] as tag, i}
							<a
								href="./#"
								class="mr-1 inline-block text-lg leading-tight text-gray-500 transition-all duration-300 hover:text-black hover:underline"
								class:ml-1={i > 0}>{tag}</a
							>
							{i > 0 ? '' : ' • '}
						{/each}
					</div>
					<div class="mt-1 flex items-center">
						<span class="text-lg">{rating}</span><i class="fas fa-star mr-2 inline-block"></i>
						<button class="text-black underline"> 0 Review </button>
					</div>
				</div>

				<div class="border-b py-7">
					<div class="block pb-5">
						<button class="group flex" title={address}>
							<div class="w-12 text-left">
								<i class="fasl fa-clock-seven inline-block text-2xl"></i>
							</div>
							<div class="text-left">
								<div>
									<span
										class="inline-block rounded-md border border-red-500 px-2 py-1 text-xs text-red-500"
									>
										Sedang Tutup
									</span>
									<span>
										• Buka Besok Pukul <strong>08:00</strong>
									</span>
								</div>
								<div class="group-hover:text-black group-hover:underline">
									<span> Lihat Jadwal </span>
									<i class="fasl fa-angle-right text-sm"></i>
								</div>
							</div>
						</button>
					</div>

					<div class="block pb-5">
						<button class="group flex" title={address}>
							<div class="w-12 text-left">
								<i class="fasl fa-map-location inline-block text-2xl"></i>
							</div>
							<div class="text-left">
								<div class="text-overflow font-bold">{address}</div>
								<div class="group-hover:text-black group-hover:underline">
									<span> Lihat Peta </span>
									<i class="fasl fa-angle-right text-sm"></i>
								</div>
							</div>
						</button>
					</div>

					<div class="block">
						<button class="group flex">
							<div class="w-12 text-left">
								<i class="fasl fa-user-check inline-block text-2xl"></i>
							</div>
							<div class="text-left">
								<div class="font-bold">No Drugs Allowed</div>
								<div class="group-hover:text-black group-hover:underline">
									<span> Kebijakan Berkunjung </span>
									<i class="fasl fa-angle-right text-sm"></i>
								</div>
							</div>
						</button>
					</div>
				</div>

				<!-- Description -->
				<Description text={data.post || description} />

				<div class="border-b py-8">
					<h2 class="text-xl font-semibold md:text-2xl" id="facilities">
						Apa yang Ada di Tempat Ini
					</h2>

					<div class="mt-7 grid grid-cols-2">
						<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
						{#each Array(10) as _}
							<div class="block pb-4">
								<div class="group flex items-center">
									<div class="w-12 text-left">
										<i class="fasl fa-wifi inline-block text-2xl"></i>
									</div>
									<div class="text-left text-lg">Wi-fi</div>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div id="offers"></div>

				<div class="py-8" id="tickets">
					<h2 class="text-xl font-semibold md:text-2xl">Tiket Masuk</h2>

					<div class="mt-5 flex items-center">
						<div>
							<button
								class="pk-button rounded-lg border-2 border-sky-400 font-semibold text-sky-500"
							>
								Lihat Kalender
							</button>
						</div>
						<div>
							<button
								class="pk-button ml-2 border border-gray-400 !px-4 !py-1 text-gray-500 hover:border-black hover:text-black"
							>
								Hari ini
							</button>
						</div>
						<div>
							<button
								class="pk-button ml-2 border border-gray-400 !px-4 !py-1 text-gray-500 hover:border-black hover:text-black"
							>
								Besok
							</button>
						</div>
					</div>

					<div class="mt-5"></div>
					{#each ['Dewasa', 'Anak-anak'] as val}
						<div
							class="my-3 flex items-center rounded border-2 border-gray-300 p-5 transition-colors hover:border-sky-400"
						>
							<div class="flex basis-8/12 flex-col">
								<div class="text-xl font-semibold text-black">{val}</div>
								<div>
									<button class="text-gray-500 underline transition-colors hover:text-sky-600">
										Lihat Detail
									</button>
								</div>
							</div>
							<div class="basis-4/12 text-right">
								<span class="text-2xl font-semibold text-black">RP --.--</span>
							</div>
						</div>
					{/each}

					<div class="mb-2 mt-4 flex">
						<button class="ml-auto text-gray-500 transition-colors hover:text-black">
							<span>Kebijakan Biaya</span>
							<i class="fasl fa-angle-right leading-none"></i>
						</button>
					</div>
				</div>
			</div>

			{#snippet offer()}
				<div
					class="flex w-full items-center bg-[rgb(255,244,239)] px-5 py-2 md:flex-col lg:flex-row"
				>
					<div class="py-1 md:w-full xl:w-auto">
						<span class="block text-sm font-bold">Mulai Dari</span>
						<span class="text-xl font-bold text-orange-500"> RP --.--</span>
					</div>
					<div class="ml-auto md:w-full xl:w-auto">
						<button
							class="pk-button rounded-full bg-orange-400 text-white md:w-full"
							onclick={scroll}
						>
							<span><i class="fasl fa-ticket-perforated"></i> Penawaran </span>
						</button>
					</div>
				</div>
			{/snippet}
			<div
				class="ml-auto hidden w-full md:relative md:block md:w-96 lg:w-auto lg:basis-5/12 xl:basis-4/12"
			>
				<div class="right-0 top-24 mt-2 w-full md:sticky md:mb-10">
					<div class="bg-sky-100 p-5">
						<button
							class="pk-button flex items-center justify-center rounded-full bg-sky-500 !py-3 leading-none text-white md:w-full"
						>
							<i class="fasl fa-calendar-lines-pen mr-1 inline-block"></i>
							<span class="inline-block">Tambahkan ke Daftar Perjalanan</span>
						</button>
					</div>
					{@render offer()}
				</div>
			</div>

			{#if $screenSize.width < 768 && $scrollTop <= targetPos() - 10}
				<div class="fixed bottom-0 left-0 z-10 w-full" transition:fly={{ duration: 250, y: 20 }}>
					<div class="bg-sky-100 text-right">
						<button class="px-2 py-1 text-xs text-sky-500">
							<i class="fasl fa-calendar-lines-pen"></i>
							<span>Tambahkan ke Daftar Perjalanan</span>
						</button>
					</div>
					{@render offer()}
				</div>
			{/if}
		</div>

		<div class="border-y py-8" id="essentials">
			<h2 class="text-xl font-semibold md:text-2xl">Penawaran Lainnya</h2>
			<div class="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
				{#each Array(4) as _}
					<a href="#/" class="h-30 px-2 pb-4">
						<div class="h-full overflow-hidden rounded bg-white shadow-lg">
							<div class="aspect-[5/3.5] w-full overflow-hidden bg-gray-200">
								<img src={placeholder} alt={'hubla'} class="size-full" />
							</div>

							<div class="px-4 pb-5 pt-3">
								<h3
									class="text-overflow py-2 text-base font-semibold md:text-lg"
									style="line-height: 1.25;"
								>
									Produk Unggulan
								</h3>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<div class="border-b py-8" id="map">
			<h2 class="text-xl font-semibold md:text-2xl">Titik Lokasi</h2>
			<div class="mt-8 flex h-96 w-full items-center justify-center bg-slate-100">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505636.05801829736!2d111.5869938517723!3d-8.072724083247827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78e3b74eb610b9%3A0x3027a76e352be20!2sKabupaten%20Tulungagung%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1731827674308!5m2!1sid!2sid"
					style="border:0;"
					allowfullscreen={true}
					loading="lazy"
					class="size-full"
					referrerpolicy="no-referrer-when-downgrade"
					title="Tulungagung Map"
				></iframe>
			</div>
			<div class="mt-8">
				<h3 class="text-lg font-semibold">{address}</h3>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum numquam eum officiis iure,
					dolor soluta sed, veniam tempora pariatur voluptates tenetur nam. Adipisci, culpa voluptas
					quaerat pariatur nisi harum reprehenderit. Nostrum iusto error rerum! Amet sit modi rerum,
					esse omnis eveniet. Reprehenderit error quo, aliquid libero ut ipsa fugiat. Ipsam cum
					impedit ex possimus placeat aliquam veniam quisquam magnam dolor, ut modi consectetur.
					Quis, officiis reiciendis. Tenetur sed eveniet ut quos fuga, quasi sunt repellendus
					placeat quae, laborum iste expedita alias nobis consequatur numquam obcaecati! Fugiat ut
					dicta illum enim, nesciunt labore voluptates commodi quam vero suscipit rem ipsa ex.
				</p>
			</div>
		</div>

		<div class="border-y py-8" id="reviews">
			<h2 class="text-xl font-semibold md:text-2xl">Review</h2>
		</div>

		<div class="border-y py-8" id="additional-info">
			<h2 class="text-xl font-semibold md:text-2xl">Informasi Tambahan</h2>
		</div>

		<div class="py-8" id="related">
			<h2 class="text-xl font-semibold md:text-2xl">Mungkin Menarik Untuk Anda</h2>
		</div>
	</div>
</section>
