<script lang="ts">
	import { md } from '$lib/helpers/markdown.helper.js';
	import { topbarHeight } from '$lib/stores/app-writable.svelte';

	const { data } = $props();
	const { html, toc } = md(data.post);
</script>

<section class="relative mb-20 flex px-[5%] py-10 md:px-[10%]">
	<article class="pk-article basis-full md:basis-8/12">
		{@html html}
	</article>

	<aside class="relative hidden min-w-60 basis-4/12 pl-10 md:flex">
		<div class="sticky right-0 ml-auto h-fit pb-5" style="top:{$topbarHeight + 110}px;">
			<h2 class="mb-2 text-lg font-bold">Daftar Isi</h2>
			<ol class="capitalize">
				{#each toc as { slug, text }}
					<li class="py-1 leading-5">
						<a href="#{slug}" class="inline-block hover:text-black hover:underline">
							{text}
						</a>
					</li>
				{/each}
			</ol>
		</div>
	</aside>
</section>
