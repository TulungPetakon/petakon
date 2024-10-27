<script>
	import { page } from '$app/stores';
	import { scrollTop } from '$lib/stores/app-stores.svelte.js';
	import navLinks from './navlink';
	import Brand from '$comp/icons/Brand.svelte';
	import Drawer from './Drawer.svelte';

	const { solidBG = false } = $props();

	let showdrawer = $state(false);
	const drawerToggle = () => (showdrawer = !showdrawer);
</script>

<div
	class="group w-full px-[6%] sticky top-0 left-0 flex items-center justify-between text-white duration-500 z-50"
	class:active={$scrollTop > 0 || solidBG}
>
	<div class="block lg:hidden">
		<button
			aria-label="Navigation Bar"
			class="py-2 px-3 rounded-sm active:scale-95 transition-transform text-md border border-slate-400 group-[.active]:text-slate-400"
			onclick={drawerToggle}
		>
			<i class="fal fa-bars"></i></button
		>
	</div>

	<h1 class="font-bold text-xl py-1 group-[.active]:text-black transition-all">
		<a href="/" class=" flex items-center">
			<div class="w-8 inline-block"><Brand mono={$scrollTop < 1 && !solidBG} /></div>
			<span>petakon</span>
		</a>
	</h1>

	<nav class="block">
		{#each navLinks as { href, title, icon }}
			<a
				{href}
				class="hidden lg:inline-flex py-5 mx-3 after:bg-white after:w-full after:scale-x-0 after:h-[.15rem] relative after:absolute after:bottom-0 after:left-0 after:rounded-t-md hover:after:scale-x-100 has-[.isOpen]:after:scale-x-100 after:transition-transform after:duration-300 group-[.active]:after:pk-bg transition-all group-[.active]:text-black"
			>
				<span class:isOpen={href === $page.route.id}> <i class="fasl {icon}"></i> {title} </span>
			</a>
		{/each}

		<div class="inline-flex">
			<button
				disabled
				class="pk-outline rounded-sm px-4 py-2 disabled:active:scale-100 disabled:cursor-not-allowed active:scale-95 transition-all pk-bg text-white disabled:opacity-50"
			>
				<i class="fasl fa-arrow-right-to-bracket mr-1"></i>
				<span class="hidden md:inline-block"> Masuk/Daftar </span>
			</button>
		</div>
	</nav>
</div>

{#if showdrawer}
	<Drawer toggle={drawerToggle} />
{/if}

<style>
	.active {
		@apply bg-white shadow;
	}
</style>
