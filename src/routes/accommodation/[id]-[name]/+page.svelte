<script>
	import { isMobile } from '$lib/stores/app-readable.svelte';
	import { topBarMode } from '$lib/stores/app-writable.svelte';
	import hotel from '$images/accomodations/frontone.jpg';

	$effect(() => topBarMode.set($isMobile ? 'hidden' : 'default')); // Change TopBar on mobile screen
	$effect.pre(() => () => topBarMode.set('default')); // Set back to default Topbar after leaving the page

	let saved = $state(false);
	const saveContent = () => {
		saved = !saved;
	};
</script>

<section class="relative">
	<!-- TopBar -->
	<div
		class="py-2 flex items-center px-[2%] sm:px-[5%] md:px-[6.5%] absolute z-10 sm:relative top-0 left-0 w-full"
	>
		<div class="sm:hidden">
			<button
				class="rounded-full w-10 aspect-square inline-flex items-center justify-center bg-white/80 text-black text-xl"
				aria-label="Back to Accommodation"
			>
				<i class="fasl fa-angle-left"></i>
			</button>
		</div>
		<div class="hidden sm:block text-sm text-gray-600">
			<a href="/" class="hover:text-black transition-all"> Home</a>
			<span> / </span>
			<a href="/accommodation" class=" hover:text-black transition-all">Accomodation</a>
			<span> / </span>
			<span class="font-bold text-black">Front Hotel Tulungagung</span>
		</div>

		<div class="flex ml-auto text-base md:text-sm">
			<button
				class="pk-button !px-2 sm:hover:text-black sm:w-auto sm:aspect-auto sm:block sm:bg-transparent sm:text-gray-600
				!rounded-full w-10 aspect-square inline-flex items-center justify-center bg-white/80 text-black mr-2"
				aria-label="share"
			>
				<i class="fasl fa-arrow-up-from-bracket inline-block text-base leading-none"></i>
				<span class="hidden sm:inline-block">Share</span>
			</button>
			<button
				class="pk-button !px-2 sm:hover:text-black sm:w-auto sm:aspect-auto sm:block sm:bg-transparent sm:text-gray-600
				!rounded-full w-10 aspect-square inline-flex items-center justify-center bg-white/80 text-black mr-2"
				class:motion-preset-confetti={saved}
				aria-label="save"
				onclick={saveContent}
			>
				<i
					class="{saved ? 'fas' : 'fasl'} fa-heart inline-block text-base leading-none"
					class:text-rose-500={saved}
				></i>
				<span class="hidden sm:inline-block">Save</span>
			</button>
		</div>
	</div>

	<!-- Photos -->
	<div class="md:px-[6.5%]">
		<div class="grid grid-cols-1 lg:grid-cols-2 rounded overflow-hidden relative">
			<button
				class="bg-white pk-button absolute text-sm !px-3 !py-1 right-3 bottom-5 hidden hover:bg-gray-200 sm:hidden lg:block"
			>
				<i class="fasl fa-image"></i>
				<span>Show All Photos</span>
			</button>

			<span
				class="bg-black/35 text-white absolute text-sm px-3 py-1 right-2 bottom-5 rounded-md sm:hidden"
			>
				1 / 20
			</span>

			<div class="w-full h-72 sm:h-80 md:h-96 lg:pr-1 lg:h-[25rem]">
				<div class="size-full overflow-hidden">
					<img src={hotel} alt="Front Hotel" class="size-full" />
				</div>
			</div>
			<div class="w-full pt-1 hidden h-24 sm:block lg:pt-0 lg:pl-1 lg:h-[25rem]">
				<div
					class="grid size-full grid-cols-5 grid-rows-1
			lg:grid-rows-2 lg:grid-cols-2"
				>
					{#each Array(4) as _}
						<div
							class="size-full
						lg:odd:pr-1 lg:even:pl-1 lg:first:pb-1 lg:[&:nth-child(3)]:pt-1 lg:[&:nth-child(2)]:pb-1 lg:last:pt-1"
						>
							<div class="size-full overflow-hidden">
								<img src={hotel} alt="Rooms" class="size-full" />
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Details -->
	<div class="relative py-2 sm:py-5 px-[5%] md:px-[6.5%]">
		<div id="general">
			<h1 class="font-bold py-2 text-2xl md:text-3xl">Front Hotel Tulungagung</h1>
			<div class="flex items-center">
				<span class="text-gray-500 leading-4 text-overflow block pb-1">
					Jalan Pangeran Antasari Nomor 1 Kenayan - Kabupaten Tulungagung, Tulungagung, Indonesia,
					66212
				</span>
			</div>
			<div class="flex mt-2 items-center">
				<i class="fas fa-star inline-block mr-2"></i>
				<button class="text-black underline"> 0 Review </button>
			</div>
		</div>
	</div>
</section>
