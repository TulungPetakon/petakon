<script>
	import { scrollTop } from '$lib/stores/app-stores.svelte.js';
	import navLinks from './navlink';
	import Drawer from './Drawer.svelte';

	let showdrawer = $state(false);
	const drawerToggle = () => (showdrawer = !showdrawer);
</script>

<div
	class="group w-full px-[6%] fixed top-0 left-0 flex items-center justify-between transition-all text-white duration-500 z-50 pk-shadow"
	class:scrolled={$scrollTop > 0}
	class:bg-white={$scrollTop > 0}
	class:pk-shadow-active={$scrollTop > 0}
>
	<div class="block lg:hidden">
		<button
			aria-label="Navigation Bar"
			class="py-2 px-3 rounded-md active:scale-95 transition-transform text-md border border-slate-400 group-[.scrolled]:text-slate-400"
			onclick={drawerToggle}
		>
			<i class="fal fa-bars"></i></button
		>
	</div>

	<h1 class="font-bold text-xl py-5 group-[.scrolled]:text-black">
		<a href="/"> PETAKON </a>
	</h1>

	<nav class="block">
		{#each navLinks as { href, title, icon }}
			<a
				{href}
				class="hidden lg:inline-flex py-5 mx-3 after:bg-white after:w-full after:scale-x-0 after:h-[.15rem] relative after:absolute after:bottom-0 after:left-0 after:rounded-t-md hover:after:scale-x-100 after:transition-transform after:duration-300 group-[.scrolled]:after:pk-bg-gradient group-[.scrolled]:text-black"
			>
				<span> <i class="fal {icon}"></i> {title} </span>
			</a>
		{/each}

		<div class="inline-flex">
			<button
				disabled
				class="pk-outline rounded-md px-4 py-2 disabled:active:scale-100 disabled:cursor-not-allowed active:scale-95 transition-all pk-bg-gradient text-white disabled:opacity-50"
			>
				<i class="fa-light fa-arrow-right-to-bracket mr-1"></i>
				<span class="hidden md:inline-block"> Masuk/Daftar </span>
			</button>
		</div>
	</nav>
</div>

{#if showdrawer}
	<Drawer toggle={drawerToggle} />
{/if}
