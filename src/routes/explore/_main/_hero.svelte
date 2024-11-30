<script lang="ts">
	import img from '$images/beach/buper.jpg?format=webp&img';
	let { district, height = $bindable() }: {district: App.District, height: number} = $props();
</script>

<div
	class="pk-overlay bg-cover bg-center bg-fixed w-full h-fit relative"
	style="background-image: url({img});"
	bind:clientHeight={height}
>
	{#snippet breadcrumbs(text: string, active: boolean = false)}
		<span
			class="transition-all capitalize"
			class:text-blue-300={active}
			class:font-bold={active}
			class:hover:text-orange-300={!active}
		>
			{text}
		</span>
	{/snippet}

	<div class="relative px-[5%] md:px-[10%] py-7 text-white z-10">
		<div class="hidden md:block text-sm text-slate-200 pb-8">
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

		<div class="flex flex-col sm:flex-row pb-3">
			<h1 class="pb-3 w-[85%]">
				{#if district}
					<span class="block text-lg md:text-2xl pb-2">Jelajahi Kecamatan</span>
					<span class="block capitalize text-3xl md:text-5xl font-bold">{district} </span>
				{:else}
					<span class="block text-2xl md:text-4xl font-bold max-w-2xl" style="line-height: 130%;">
						Jelajahi <u>Tulungagung</u> dan Ciptakan Kenangan tak Terlupakan
					</span>
				{/if}
			</h1>

			{#if district}
				<div class="flex items-center">
					<button
						class="pk-button bg-black/20 rounded-full inline-flex items-center hover:bg-orange-400 group"
					>
						<span>Ganti</span>
						<i
							class="fas fa-angle-down block ml-2 text-xl text-orange-400 group-hover:text-white transition-all"
							style="line-height: 0;"
						></i>
					</button>
				</div>
			{/if}
		</div>
	</div>
</div>
