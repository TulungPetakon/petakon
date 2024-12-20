<script lang="ts">
	interface BreadcrumbStructure {
		text: string;
		href?: string;
		active?: boolean;
	}

	const { structure = [] }: { structure: BreadcrumbStructure[] } = $props();
</script>

<div class="hidden text-sm text-gray-600 sm:block">
	{#each structure as { href, text, active }, i}
		{#if i > 0}
			<span class="ml-1 inline-block"> / </span>
		{/if}
		{#if active}
			<span class="inline-block font-bold text-black">{text}</span>
		{:else if href}
			<a {href} class=" inline-block transition-all hover:text-black"> {text} </a>
		{:else}
			<span class=" inline-block transition-all hover:text-black"> {text} </span>
		{/if}
	{/each}
</div>
