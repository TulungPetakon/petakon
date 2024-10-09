<script>
	import { scrollTop } from '$lib/stores/app-stores.svelte.js';

	const navLinks = [
		{ href: '#', title: 'Pertama Kali ke Tulungagung?' },
		{ href: '#', title: 'Explore' },
		{ href: '#', title: 'Rencana Perjalanan' }
	];
</script>

<div
	class="group w-full px-20 fixed top-0 left-0 flex items-center text-white transition-all duration-500 z-50 shadowed"
	class:scrolled={$scrollTop > 0}
	class:shadowed-active={$scrollTop > 0}
>
	<h1 class="font-bold text-xl">PETAKON</h1>
	<nav class="ml-auto">
		{#each navLinks as { href, title }}
			<a
				{href}
				class="py-5 inline-flex mx-3 after:bg-white after:w-full after:scale-x-0 after:h-[.15rem] relative after:absolute after:bottom-0 after:left-0 after:rounded-t-md hover:after:scale-x-100 after:transition-transform after:duration-300 group-[.scrolled]:after:petakon-bg-gradient"
			>
				{title}
			</a>
		{/each}
	</nav>
</div>

<style lang="postcss">
	.scrolled {
		@apply bg-white text-black;
	}
</style>
