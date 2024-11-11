<script>
	import { md } from '$lib/helpers/markdown.helper.js';
	import { topbarHeight } from '$lib/stores/app-writable.svelte';

	const { data } = $props();
	const district = data.district.name;

	const loadPost = async (k) => {
		try {
			const { default: raw } = await import(`$post/kecamatan/${k}.md?raw`);
			return md(raw);
		} catch (e) {
			console.error(e);
		}
	};
</script>

<section class="relative flex px-[5%] md:px-[10%] py-10 mb-20">
	{#await loadPost(district) then { html, toc }}
		<article class="pk-article basis-full md:basis-8/12">
			{@html html}
		</article>

		<aside class="min-w-60 basis-4/12 hidden md:flex pl-10 relative">
			<div class="ml-auto sticky right-0 h-fit pb-5" style="top:{$topbarHeight + 110}px;">
				<h2 class="font-bold text-lg mb-2">Daftar Isi</h2>
				<ol class="capitalize">
					{#each toc as { slug, text }}
						<li class="py-1 leading-5">
							<a href="#{slug}" class="hover:underline hover:text-black inline-block">
								{text}
							</a>
						</li>
					{/each}
				</ol>
			</div>
		</aside>
	{/await}
</section>
