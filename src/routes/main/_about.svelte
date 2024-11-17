<script>
	import { md } from '$lib/helpers/markdown.helper';
	import MiniMap from '../about-tulungagung/MiniMap.svelte';
	import article from '$post/tulungagung.md?raw';

	const short = article.replace('## Sejarah Tulungagung', '').substring(0, 602);
	const { html } = md(`${short}...`);
</script>

<section
	class="flex pt-28 px-[5%] md:px-[6.5%] items-center justify-center flex-wrap sm:flex-nowrap"
>
	<!-- Left -->
	<div class="w-full sm:w-8/12 sm:text-right">
		<div class="relative">
			<span class="absolute bottom-full left-1/2 -translate-x-1/2 w-full">
				Tak Kenal Maka Tak Sayang
			</span>
			<h2 class="font-bold text-4xl uppercase relative overflow-hidden">
				<span class="relative inline-block py-1">
					Sekilas tentang <u>Tulungagung </u>
				</span>
			</h2>
		</div>

		<div class="mt-10 pk-article">
			{@html html}
		</div>

		<div class="mt-10">
			<a
				href="/about-tulungagung"
				class="border-2 border-sky-600/50 px-4 py-2 rounded transition-all text-center
      hover:border-sky-500 hover:bg-sky-500 hover:text-white"
			>
				<span> Baca Lebih Lengkap </span> <i class="fasl fa-arrow-right-long text-xl"></i>
			</a>
		</div>
	</div>

	<!-- Right -->
	<div
		class="flex items-center justify-center p-2 pt-20 w-full
    sm:w-6/12 sm:pt-0"
	>
		<div class="w-4/6 flex items-center justify-center m-auto">
			<MiniMap />
		</div>
	</div>
</section>
