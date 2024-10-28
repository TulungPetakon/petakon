<script>
	import { fade, fly } from 'svelte/transition';
	import { self } from 'svelte/legacy';
	import { mainLinks } from './navlink';

	const { toggle } = $props();
</script>

<div
	onmousedown={self(toggle)}
	class="w-full h-full bg-black/50 fixed right-0 top-0 z-50"
	transition:fade={{ duration: 250 }}
	role
>
	<div class="w-full bg-white h-full relative ml-auto" transition:fly={{ y: 100, duration: 250 }}>
		<div class="flex px-2 py-1 items-center border-b">
			<button aria-label="Close" class="text-xl w-10 aspect-square" onclick={toggle}>
				<i class="fasl fa-xmark-large"></i></button
			>
			<h1 class="font-bold px-2 text-xl text-center">
				<a href="/" onclick={toggle}>Menu Utama</a>
			</h1>
		</div>

		<!-- Account -->
		<div class="my-4 flex justify-center text-base">
			<button
				class="bg-sky-500 text-white w-4/12 rounded-sm mx-1 py-1 transition-all
			hover:bg-sky-600"
			>
				Masuk
			</button>
			<button
				class="border-sky-500 w-4/12 rounded-sm mx-1 py-1 transition-all border-2
			hover:bg-sky-600 hover:text-white"
			>
				Daftar
			</button>
		</div>
		<!-- End Account -->

		<div class="bg-slate-100 w-full h-2"></div>

		<div class="list py-4 px-2">
			{#each mainLinks as { href, title, icon }}
				<a
					{href}
					class="block py-2 px-5 text-lg transition-all
					hover:bg-slate-200"
					onclick={toggle}
				>
					<i class="fasl {icon} mr-10 w-0 text-2xl inline-block"></i> <span> {title} </span>
				</a>
			{/each}
		</div>
	</div>
</div>
