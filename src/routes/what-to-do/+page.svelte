<script>
	import { md } from '$lib/helpers/markdown.helper';
	import markdown from '$post/what-to-do.md?raw';
</script>

<section class="px-[6%] py-10">
	<article class="pk-article mx-auto max-w-[800px] pb-20">
		{@html md(markdown).html}
	</article>
</section>
