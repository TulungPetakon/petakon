<script lang="ts">
	import img from '$images/destinations/hero-sendang.jpg?format=webp&img';
	let { district, height = $bindable() }: { district: App.District; height: number } = $props();
</script>

<div
	class="pk-overlay relative h-fit w-full bg-cover bg-fixed bg-center"
	style="background-image: url({img});"
	bind:clientHeight={height}
>
	{#snippet breadcrumbs(text: string, active: boolean = false)}
		<span
			class="capitalize transition-all"
			class:text-blue-300={active}
			class:font-bold={active}
			class:hover:text-orange-300={!active}
		>
			{text}
		</span>
	{/snippet}

	<div class="relative z-10 px-[5%] py-7 text-white md:px-[10%]">
		<div class="hidden pb-8 text-sm text-slate-200 md:block">
			<a href="/"> {@render breadcrumbs('Home')} </a>
			<span> / </span>
			{#if !district}
				{@render breadcrumbs('Explore', true)}
			{:else}
				<a href="/explore">{@render breadcrumbs('Explore')}</a>
			{/if}

			{#if district}
				<span> / </span>
				{#if district}
					{@render breadcrumbs(`Jelajahi ${district}`, true)}
				{/if}
			{/if}
		</div>

		<div class="flex flex-col pb-3 sm:flex-row">
			<h1 class="w-[85%] pb-3">
				{#if district}
					<span class="block pb-2 text-lg md:text-2xl">Jelajahi Kecamatan</span>
					<span class="block text-3xl font-bold capitalize md:text-5xl">{district} </span>
				{:else}
					<span class="block max-w-2xl text-2xl font-bold md:text-4xl" style="line-height: 130%;">
						Jelajahi <u>Tulungagung</u> dan Ciptakan Kenangan tak Terlupakan
					</span>
				{/if}
			</h1>

			{#if district}
				<div class="flex items-center">
					<button
						class="pk-button group inline-flex items-center rounded-full bg-black/20 hover:bg-orange-400"
					>
						<span>Ganti</span>
						<i
							class="fas fa-angle-down ml-2 block text-xl text-orange-400 transition-all group-hover:text-white"
							style="line-height: 0;"
						></i>
					</button>
				</div>
			{/if}
		</div>
	</div>
</div>
