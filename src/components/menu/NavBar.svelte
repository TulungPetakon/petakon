<script>
	import { page } from '$app/stores';
	import { scrollTop } from '$lib/stores/app-stores.svelte.js';
	import { mainLinks } from './navlink';
	import Brand from '$comp/svgs/Brand.svelte';
	import Drawer from './Drawer.svelte';

	const { solidBG = false } = $props();

	let animateIcon = $state(false);

	let showdrawer = $state(false);
	const drawerToggle = () => (showdrawer = !showdrawer);
</script>

<div
	class="group w-full px-[6%] md:py-1 lg:py-0 sticky top-0 left-0 flex items-center justify-between text-white duration-500 z-50"
	class:active={$scrollTop > 0 || solidBG}
>
	<div class="block lg:hidden">
		<button
			aria-label="Navigation Bar"
			class="rounded-sm transition-transform text-md
			active:scale-95
			group-[.active]:text-slate-700"
			onclick={drawerToggle}
		>
			<i class="fasl fa-bars text-2xl md:text-base"></i></button
		>
	</div>

	<h1 class="text-xl py-2 md:py-1 group-[.active]:text-black transition-all">
		<a
			href="/"
			class=" flex items-center"
			role
			onmouseenter={() => (animateIcon = true)}
			onmouseleave={() => (animateIcon = false)}
		>
			<div
				class="w-8 inline-block origin-top transition-transform duration-300"
				class:scale-[2]={$scrollTop < 1 && !solidBG}
			>
				<Brand mono={$scrollTop < 1 && !solidBG} animate={animateIcon} />
			</div>
			<span
				class="transition-transform duration-300"
				class:translate-x-5={$scrollTop < 1 && !solidBG}
			>
				petakon
			</span>
		</a>
	</h1>

	<nav class="block">
		{#each mainLinks as { href, title, icon }}
			<a
				{href}
				class="hidden py-5 mx-3 relative transition-all
				lg:inline-flex
				after:bg-white after:w-full after:scale-x-0 after:h-[.15rem] after:absolute after:bottom-0 after:left-0 after:rounded-t-md after:transition-transform after:duration-300
				hover:after:scale-x-100
				group-[.active]:text-black group-[.active]:after:pk-bg has-[.isOpen]:after:scale-x-100"
			>
				<span class:isOpen={href === $page.route.id}> <i class="fasl {icon}"></i> {title} </span>
			</a>
		{/each}

		<div class="inline-flex">
			<button
				class="rounded-sm transition-all
				group-[.active]:text-slate-700
				md:px-3 md:py-2 md:pk-bg md:!text-white
				disabled:active:scale-100 disabled:cursor-not-allowed disabled:opacity-50
				"
			>
				<i class="fasl fa-arrow-right-to-bracket mr-1 text-2xl md:text-base"></i>
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
