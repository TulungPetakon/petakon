<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { isTab } from '$lib/stores/app-readable.svelte';
	import { scrollTop, topbarHeight } from '$lib/stores/app-writable.svelte.js';
	import { mainLinks } from './navlink';

	import Brand from '$comp/svgs/Brand.svelte';
	import Drawer from './Drawer.svelte';

	const { solidBG = false } = $props();

	let animateIcon = $state(false);
	let showdrawer = $state(false);
	const drawerToggle = () => (showdrawer = !showdrawer);

	let clientHeight = $state(0);
	$effect(() => topbarHeight.set(clientHeight || 0));
	onDestroy(() => topbarHeight.set(0));
</script>

<div
	class="group sticky left-0 top-0 z-50 flex w-full items-center justify-between px-[6%] text-white duration-500 md:py-1 lg:py-0"
	in:fly={{ y: -20 }}
	class:active={$scrollTop > 0 || solidBG}
	bind:clientHeight
>
	<!-- <div class="block lg:hidden">
		<button
			aria-label="Navigation Bar"
			class="rounded-sm transition-transform text-md
			active:scale-95
			group-[.active]:text-slate-700"
			onclick={drawerToggle}
		>
			<i class="fasl fa-bars text-2xl md:text-base"></i></button
		>
	</div> -->

	<h1 class="py-2 text-xl transition-all group-[.active]:text-black md:py-1">
		<a
			href="/"
			class=" flex items-center"
			role="button"
			onmouseenter={() => (animateIcon = true)}
			onmouseleave={() => (animateIcon = false)}
		>
			<div
				class="inline-block w-8 origin-top transition-transform duration-300"
				class:scale-[2]={$scrollTop < 1 && !solidBG}
			>
				<Brand mono={$scrollTop < 1 && !solidBG} animate={animateIcon} />
			</div>
			<span
				class="font-semibold transition-transform duration-300"
				class:translate-x-5={$scrollTop < 1 && !solidBG}
			>
				petakon
			</span>
		</a>
	</h1>

	<div class="block lg:hidden">
		<button
			aria-label="Navigation Bar"
			class="text-md rounded-sm transition-transform
			active:scale-95
			group-[.active]:text-slate-700"
			onclick={drawerToggle}
		>
			<i class="fasl fa-bars text-2xl md:text-base"></i></button
		>
	</div>

	<nav class="hidden lg:block">
		{#each mainLinks as { href, title, icon }}
			<a
				{href}
				class="relative mx-3 hidden py-5 transition-all
				after:absolute
				after:bottom-0 after:left-0 after:h-[.15rem] after:w-full after:scale-x-0 after:rounded-t-md after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100
				group-[.active]:text-black
				group-[.active]:after:bg-sky-500 has-[.isOpen]:after:scale-x-100 lg:inline-flex"
			>
				<span class:isOpen={href === $page.route.id}> <i class="fasl {icon}"></i> {title} </span>
			</a>
		{/each}

		<div class="inline-flex">
			<!-- <button
				class="rounded-sm transition-all
				group-[.active]:text-slate-700
				md:px-3 md:py-2 md:bg-sky-500 md:!text-white
				disabled:active:scale-100 disabled:cursor-not-allowed disabled:opacity-50
				"
			>
				<i class="fasl fa-arrow-right-to-bracket mr-1 text-2xl md:text-base"></i>
				<span class="hidden md:inline-block"> Masuk/Daftar </span>
			</button> -->
		</div>
	</nav>
</div>

{#if showdrawer && $isTab}
	<Drawer toggle={drawerToggle} />
{/if}

<style>
	.active {
		@apply bg-white shadow;
	}
</style>
