<script>
	import Aside from './_aside.svelte';
	import ProductList from './_product-list.svelte';

	const { destinations = [], district } = $props();
</script>

<section class="px-[calc(5%-0.5rem)] md:pl-[10%] md:pr-[calc(10%-0.5rem)] py-5 bg-slate-100 w-full">
	<div class="flex">
		<aside class="pr-2 pl-0 lg:basis-3/12 basis-4/12 md:block hidden">
			<Aside />
		</aside>

		<div class="lg:basis-9/12 md:basis-8/12 basis-full">
			<ProductList {destinations} {district} />
		</div>
	</div>
</section>
