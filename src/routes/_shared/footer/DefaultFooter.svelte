<script lang="ts">
	import Brand from '$comp/svgs/Brand.svelte';
	import LangToggle from '$comp/utils/LangToggle.svelte';

	interface ImageSource {
		img: { src: string };
	}
	interface Partners {
		name: string;
		src: string;
	}

	const pictures = import.meta.glob(['$images/partners/**/*'], {
		query: { as: 'picture', format: 'webp', h: '75' },
		import: 'default',
		eager: true
	});

	const partners = () => {
		const list = [
			{ src: 'gajah-mada.png', name: 'Batik Gajah Mada' },
			{ src: 'harapan-jaya.png', name: 'Harapan Jaya' },
			{ src: 'ilio.png', name: 'Ilio Guest House' },
			{ src: 'intan-jaya.png', name: 'Intan Jaya' },
			{ src: 'jaya-mandiri.png', name: 'Jaya Mandiri' },
			{ src: 'hotel-surakarta.png', name: 'Hotel Surakara' }
		];

		for (let i = 0; i < list.length; i++) {
			const imgSource = pictures[`/src/images/partners/${list[i].src}`];
			list[i].src = (imgSource as ImageSource).img.src;
		}
		return list;
	};

	const supporter = [
		{
			src: (pictures[`/src/images/partners/dishub.png`] as ImageSource)?.img.src,
			name: 'Dinas Perhubungan Tulungagung'
		},
		{
			src: (pictures[`/src/images/partners/disbupar.png`] as ImageSource)?.img.src,
			name: 'Dinas Kebudayaan dan Pariwisata Tulungagung'
		}
	];

	const petakonMenu = [
		{
			href: '/',
			text: 'Kunjungan Pertama di Tulungagung?',
			title: 'Profil Kota Tulungagung'
		},
		{ href: '/', text: 'Halaman Depan', title: '' },
		{ href: '/explore', text: 'Destinasi Wisata', title: '' },
		{ href: '/', text: 'Event dan Aktivitas', title: '' },
		{ href: '/explore/transport', text: 'Transportasi', title: '' },
		{ href: '/explore/accommodation', text: 'Hotel dan Penginapan', title: 'Hotel dan Penginapan' },
		{ href: '/explore/essential', text: 'Souvenir dan Oleh-Oleh', title: '' },
		{ href: '/', text: 'Wawasan Perjalanan', title: '' }
	];

	const policy = [
		{ href: '/', text: 'Kebijakan Privasi', title: '' },
		{ href: '/', text: 'Syarat dan Ketentuan', title: '' }
	];

	const contact = [
		{
			href: 'mailto:support@petakon.id',
			text: 'support@petakon.id',
			title: 'Email Support',
			icon: 'pk-mail',
			color: '#000'
		}
		// {
		// 	href: '/',
		// 	text: '+620000000000',
		// 	title: 'Call Center',
		// 	icon: 'pk-whatsapp',
		// 	color: '#128C7E'
		// }
	];

	const social = [
		{ href: '/', icon: 'pk-facebook', title: 'Facebook', color: '#1877F2' },
		{ href: '/', icon: 'pk-x', title: 'Twitter X', color: '#000' },
		{ href: '/', icon: 'pk-instagram', title: 'Instagram', color: '#E1306C' },
		{ href: '/', icon: 'pk-tiktok', title: 'Tiktok', color: '#000' }
	];
</script>

<footer class="w-full px-[6.5%]">
	<div class="flex flex-wrap gap-8 border-t-2 py-10 sm:flex-nowrap">
		<!-- Menu -->
		<div
			class="mx-auto w-full text-left
			sm:w-auto"
		>
			<h4 class="relative mb-4 w-fit pr-8 font-semibold text-gray-900">
				<span class="text-xl">petakon</span>
				<div class="absolute bottom-1 right-0 w-6 sm:w-8"><Brand /></div>
			</h4>
			<ul class="transition-all duration-500 md:text-sm">
				{#each petakonMenu as { href, text, title }}
					<li class="mb-3">
						<a {href} class="text-gray-500 hover:text-gray-950" {title}>{text}</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Kebijakan & Kontak -->
		<div
			class="mx-auto w-full text-left
			sm:w-auto"
		>
			<h4 class="mb-4 pr-8 text-xl font-semibold text-gray-900">Kebijakan</h4>
			<ul class="transition-all duration-500 md:text-sm">
				{#each policy as { href, text, title }}
					<li class="mb-3">
						<a {href} class="text-gray-500 hover:text-gray-950" {title}>{text}</a>
					</li>
				{/each}
			</ul>

			<h4 class="mb-4 mt-10 pr-8 text-xl font-semibold text-gray-900 sm:mt-7">Kontak</h4>
			<ul class="transition-all duration-500 md:text-sm">
				{#each contact as { href, text, title, icon, color }}
					<li class="mb-3">
						<a {href} class="flex items-center text-gray-500 hover:text-gray-950" {title}>
							<i class="{icon} mr-7 w-0 text-lg" style="color:{color};line-height:0"></i>
							<span class="inline-block">{text}</span>
						</a>
					</li>
				{/each}
			</ul>
			<div class="mt-4 flex justify-center">
				{#each social as { href, icon, title, color }}
					<a
						{href}
						{title}
						aria-label={title}
						class="mr-2 inline-flex aspect-square w-7 items-center justify-center rounded-full text-white transition-all"
						style="background-color: {color};"
					>
						<i class="{icon} md:text-sm" style=" line-height:0"></i>
					</a>
				{/each}
			</div>
		</div>

		<!-- Supporter -->
		<div
			class="order-first w-full border-b-2 pb-10 text-center
			sm:order-none
			sm:w-auto sm:max-w-[35%] sm:border-b-0 sm:pb-0 sm:text-left md:max-w-[25%] lg:mx-auto"
		>
			{#snippet brand(brands: Partners[])}
				<div class="flex flex-wrap items-center justify-center sm:justify-start">
					{#each brands as { src, name }}
						<img {src} alt={name} title={name} class="max-h-[35px]" />
					{/each}
				</div>
			{/snippet}

			<h4 class="mb-4 text-lg font-semibold leading-tight text-gray-900">Partners</h4>
			{@render brand(partners())}

			<h4 class="mb-2 mt-10 text-lg font-semibold leading-tight text-gray-900 sm:mt-7">
				Background Support
			</h4>
			{@render brand(supporter)}

			<div class="hidden sm:mt-7 sm:flex sm:items-center sm:justify-center">
				<div class="w-5/6">
					<LangToggle />
				</div>
			</div>
		</div>
	</div>

	<!-- Bottom Bar -->
	<div class="border-t border-gray-200 py-5">
		<div class="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
			<div class="flex items-center space-x-2 sm:justify-center">
				<span class="leading-none opacity-75 md:text-sm">Built With</span>
				<i class="fas fa-heart leading-[0] text-rose-400"></i>
				<span class="leading-none opacity-75 md:text-sm">Peta Konektivitas</span>
			</div>
			<span class="text-gray-500 md:text-sm">
				&copy {new Date().getFullYear()} Petakon, All rights reserved.
			</span>
		</div>
	</div>
</footer>
