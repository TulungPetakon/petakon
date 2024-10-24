<script>
	import { fade, fly } from 'svelte/transition';
	import navLinks from './navlink';
	import { self } from 'svelte/legacy';
	const { toggle } = $props();
</script>

<div
	class="w-full h-full bg-black/50 fixed right-0 top-0 z-50"
	transition:fade={{ duration: 200 }}
	role
	onmousedown={self(toggle)}
>
	<div class="w-10/12 bg-white h-full relative ml-auto" transition:fly={{ x: 100, duration: 200 }}>
		<h1 class="font-black p-4 text-xl text-center">
			<a href="/" onclick={toggle}>PETAKON</a>
		</h1>
		<hr />
		<div class="list">
			{#each navLinks as { href, title, icon }}
				<a
					{href}
					class="block py-3 px-4 text-lg border-b hover:bg-slate-200 transition-all"
					onclick={toggle}
				>
					<span> <i class="fal {icon} mr-2"></i> {title} </span>
				</a>
			{/each}
		</div>

		<div class="mt-5 flex justify-center">
			<button
				class="pk-text-gradient pk-outline text-white opacity-90 mx-2 hover:opacity-100 transition-opacity rounded-md px-4 py-2 disabled:opacity-50"
				disabled
			>
				Masuk
			</button>
			<button
				disabled
				class="pk-bg-gradient text-white opacity-90 mx-2 hover:opacity-100 transition-opacity rounded-md px-4 py-2 disabled:opacity-50"
			>
				Daftar
			</button>
		</div>
	</div>
</div>
