<script>
	import { md } from '$lib/helpers/markdown.helper';
	import markdown from '$post/tulungagung.md?raw';
	import img from '$images/destinations/tulungagung.jpg';
</script>

<section class="px-[6%] py-10">
	<div class="mx-auto max-w-[800px] pb-20">
		<div class="text-center mb-10">
			<img src={img} alt="Taman Aloon Aloon" />
		</div>

		<article class="pk-article">
			{@html md(markdown).html}
		</article>
	</div>
</section>
