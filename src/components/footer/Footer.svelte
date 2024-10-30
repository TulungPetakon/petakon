<script>
	import Brand from '$comp/icons/Brand.svelte';
	import p1 from '@images/partners/harapan-jaya.png?format=webp&h=100';
	import p2 from '@images/partners/hotel-surakarta.png?format=webp&h=100';
	import p3 from '@images/partners/ilio.png?format=webp&h=100';
	import p4 from '@images/partners/jaya-mandiri.png?format=webp&h=100';
	import dis1 from '@images/partners/dishub.png?format=webp&h=100';
	import dis2 from '@images/partners/disbupar.png?format=webp&h=100';

	const partners = [
		{ src: p1, name: 'Harapan Jaya' },
		{ src: p3, name: 'Ilio Guest House' },
		{ src: p4, name: 'Jaya Mandiri' },
		{ src: p2, name: 'Hotel Surakara' }
	];

	const supporter = [
		{ src: dis1, name: 'Dinas Perhubungan Tulungagung' },
		{ src: dis2, name: 'Dinas Kebudayaan dan Pariwisata Tulungagung' }
	];

	const petakonMenu = [
		{ href: '/', text: 'Kunjungan Pertama di Tulungagung?', title: 'Profil Kota Tulungagung' },
		{ href: '/', text: 'Halaman Depan', title: '' },
		{ href: '/', text: 'Destinasi Wisata', title: '' },
		{ href: '/', text: 'Event dan Aktivitas', title: '' },
		{ href: '/', text: 'Transportasi', title: '' },
		{ href: '/', text: 'Penginapan', title: '' },
		{ href: '/', text: 'Akomodasi', title: '' },
		{ href: '/', text: 'Souvenir dan Oleh-Oleh', title: '' },
		{ href: '/', text: 'Wawasan Perjalanan', title: '' }
	];

	const policy = [
		{ href: '/', text: 'Kebijakan Privasi', title: '' },
		{ href: '/', text: 'Syarat dan Ketentuan', title: '' }
	];

	const contact = [
		{
			href: '/',
			text: 'support@petakon.id',
			title: 'Email Support',
			icon: 'pk-mail',
			color: '#000'
		},
		{
			href: '/',
			text: '+620000000000',
			title: 'Call Center',
			icon: 'pk-whatsapp',
			color: '#128C7E'
		}
	];

	const social = [
		{ href: '/', icon: 'pk-facebook', title: 'Facebook', color: '#1877F2' },
		{ href: '/', icon: 'pk-x', title: 'Twitter X', color: '#000' },
		{ href: '/', icon: 'pk-instagram', title: 'Instagram', color: '#E1306C' },
		{ href: '/', icon: 'pk-tiktok', title: 'Tiktok', color: '#000' }
	];
</script>

<footer class="px-[6%] w-full mt-20">
	<div class="flex gap-8 py-10 flex-wrap sm:flex-nowrap border-t-2">
		<!-- Menu -->
		<div
			class="mx-auto text-left w-full
			sm:w-auto"
		>
			<h4 class="text-gray-900 font-semibold mb-4 pr-8 relative w-fit">
				<span class="text-xl">petakon</span>
				<div class="sm:w-8 absolute bottom-1 right-0 w-6"><Brand /></div>
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
			class="mx-auto text-left w-full
			sm:w-auto"
		>
			<h4 class="text-xl text-gray-900 font-semibold mb-4 pr-8">Kebijakan</h4>
			<ul class="transition-all duration-500 md:text-sm">
				{#each policy as { href, text, title }}
					<li class="mb-3">
						<a {href} class="text-gray-500 hover:text-gray-950" {title}>{text}</a>
					</li>
				{/each}
			</ul>

			<h4 class="text-xl text-gray-900 font-semibold mb-4 pr-8 mt-10 sm:mt-7">Kontak</h4>
			<ul class="transition-all duration-500 md:text-sm">
				{#each contact as { href, text, title, icon, color }}
					<li class="mb-3">
						<a {href} class="text-gray-500 hover:text-gray-950 flex items-center" {title}>
							<i class="{icon} w-0 mr-7 text-lg" style="color:{color};line-height:0"></i>
							<span class="inline-block">{text}</span>
						</a>
					</li>
				{/each}
			</ul>
			<div class="flex justify-center mt-4">
				{#each social as { href, icon, title, color }}
					<a
						{href}
						{title}
						aria-label={title}
						class="w-7 aspect-square rounded-full inline-flex justify-center items-center mr-2 transition-all text-white"
						style="background-color: {color};"
					>
						<i class="{icon} md:text-sm leading-[0]"></i>
					</a>
				{/each}
			</div>
		</div>

		<!-- Supporter -->
		<div
			class="text-center w-full pb-10 border-b-2 order-first
			lg:mx-auto
			sm:w-auto sm:text-left sm:pb-0 sm:border-b-0 sm:order-none"
		>
			{#snippet brand(brands)}
				<div class="flex items-center flex-wrap justify-center sm:justify-start">
					{#each brands as { src, name }}
						<img {src} alt={name} title={name} class="max-h-[30px] md:max-h-[35px]" />
					{/each}
				</div>
			{/snippet}

			<h4 class="text-lg text-gray-900 font-semibold mb-4 leading-tight">Partners</h4>
			{@render brand(partners)}

			<h4 class="text-lg mt-10 sm:mt-7 text-gray-900 font-semibold mb-2 leading-tight">
				Background Support
			</h4>
			{@render brand(supporter)}
		</div>
	</div>

	<!-- Bottom Bar -->
	<div class="py-5 border-t border-gray-200">
		<div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
			<div class="flex space-x-2 items-center sm:justify-center">
				<span class="opacity-75 md:text-sm leading-none">Built With</span>
				<i class="fas fa-heart text-rose-400 leading-[0]"></i>
				<span class="opacity-75 md:text-sm leading-none">Peta Konektivitas</span>
			</div>
			<span class="md:text-sm text-gray-500">
				&copy {new Date().getFullYear()} Petakon, All rights reserved.
			</span>
		</div>
	</div>
</footer>
