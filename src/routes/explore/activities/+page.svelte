<script>
	import Aside from './_aside.svelte';
	import ProductList from './_product-list.svelte';
</script>

<section class="px-[5%] md:px-[10%] py-5 bg-slate-100 w-full">
	<div class="flex">
		<aside class="pr-2 pl-0 lg:basis-3/12 basis-4/12 md:block hidden">
			<Aside />
		</aside>

		<div class="lg:basis-9/12 md:basis-8/12 basis-full">
			<ProductList />
		</div>
	</div>
</section>
