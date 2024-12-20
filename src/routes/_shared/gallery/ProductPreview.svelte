<script lang="ts">
	const { slug, gallery, title } = $props();
	const getThumb = async (slug: string) => {
		const { default: raw } = await import(`$images/destinations/${slug}.jpg?format=webp`);
		return raw;
	};
</script>

<!-- Photos -->
<div class="md:px-[6.5%] xl:px-[15%]">
	<div class="relative grid grid-cols-1 overflow-hidden rounded-md lg:grid-cols-2">
		<button
			class="pk-button absolute bottom-5 right-3 hidden bg-white !px-3 !py-1 text-sm
      hover:bg-gray-200 sm:hidden lg:block"
		>
			<i class="fasl fa-image"></i>
			<span>Lihat Galeri</span>
		</button>

		<span
			class="absolute bottom-5 right-2 rounded-md bg-black/35 px-3 py-1 text-sm text-white sm:hidden"
		>
			1 / 5
		</span>

		<div class="h-72 w-full sm:h-80 lg:h-[22rem] lg:pr-1">
			<div class="size-full overflow-hidden bg-gray-200">
				{#await getThumb(slug) then src}
					<img {src} alt={title} class="size-full" />
				{/await}
			</div>
		</div>
		<div class="hidden h-24 w-full pt-1 sm:block lg:h-[22rem] lg:pl-1 lg:pt-0">
			<div class="grid size-full grid-cols-5 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2">
				{#snippet pic(slug: string)}
					<div
						class="size-full lg:first:pb-1 lg:last:pt-1 lg:odd:pr-1 lg:even:pl-1 lg:[&:nth-child(2)]:pb-1 lg:[&:nth-child(3)]:pt-1"
					>
						<div class="size-full overflow-hidden px-[1px]">
							{#await getThumb(slug) then src}
								<img {src} alt={title} class="size-full" />
							{/await}
						</div>
					</div>
				{/snippet}
				{#if gallery}
					{#each gallery as { url }, i}
						{#if i > 0}
							{@render pic(url)}
						{/if}
					{/each}
				{:else}
					<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
					{#each Array(4) as _}
						{@render pic(slug)}
					{/each}
				{/if}
			</div>
		</div>
	</div>
</div>
