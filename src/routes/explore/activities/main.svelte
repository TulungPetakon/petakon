<script lang="ts">
	import Aside from './_aside.svelte';
	import ProductList from './_product-list.svelte';

	const { destinations = [], district } = $props();
</script>

<section class="w-full bg-slate-100 px-[calc(5%-0.5rem)] py-5 md:pl-[10%] md:pr-[calc(10%-0.5rem)]">
	<div class="flex">
		<aside class="hidden basis-4/12 pl-0 pr-2 md:block lg:basis-3/12">
			<Aside />
		</aside>

		<div class="basis-full md:basis-8/12 lg:basis-9/12">
			<ProductList {destinations} {district} />
		</div>
	</div>
</section>
