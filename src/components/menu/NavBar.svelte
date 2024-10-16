<script>
	import { cart, scrollTop } from '$lib/stores/app-stores.svelte.js';

	const navLinks = [
		{ href: '#', title: 'Pertama Kali ke Tulungagung?', id: 'first' },
		{ href: '/explore', title: 'Explore', id: 'explore' },
		{ href: '/planner', title: 'Rencana Perjalanan', id: 'planner' }
	];
</script>

<div
	class="group w-full px-[7.5%] fixed top-0 left-0 flex items-center text-white transition-all duration-500 z-50 shadowed"
	class:scrolled={$scrollTop > 0}
	class:shadowed-active={$scrollTop > 0}
>
	<h1 class="font-bold text-xl py-5"><a href="/"> PETAKON</a></h1>
	<nav class="ml-auto hidden min-[800px]:block">
		{#each navLinks as { href, title, id }}
			<a
				{href}
				class="py-5 inline-flex mx-3 after:bg-white after:w-full after:scale-x-0 after:h-[.15rem] relative after:absolute after:bottom-0 after:left-0 after:rounded-t-md hover:after:scale-x-100 after:transition-transform after:duration-300 group-[.scrolled]:after:petakon-bg-gradient"
			>
				<span> {title} </span>
				{#if id === 'planner' && $cart.length > 0}
					<div
						class="flex justify-center items-center px-1 aspect-square rounded-full ml-2 bg-green-600 text-white text-xs"
					>
						<span> {$cart.length}</span>
					</div>
				{/if}
			</a>
		{/each}
	</nav>
</div>

<style lang="postcss">
	.scrolled {
		@apply bg-white text-black;
	}
</style>
