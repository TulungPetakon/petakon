<script lang="ts">
	import { districtList } from '$lib/helpers/kecamatan.helper';
	import img from '$images/destinations/hero-sendang.jpg?format=webp&img';
	import Districts from '$comp/svgs/Districts.svelte';

	let hovered: string | null = $state('');
</script>

<h1 class="mb-5 text-2xl font-bold uppercase">Unggulan Kota Tulungagung</h1>
<div class="grid sm:grid-cols-2 lg:grid-cols-3">
	{#each districtList as name}
		<div
			class="group py-2 sm:px-4
			sm:odd:pl-0 sm:even:pr-0 lg:odd:pl-4 lg:even:pr-4
			lg:[&:nth-child(3n)]:pr-0 lg:[&:nth-child(3n+1)]:pl-0"
		>
			<a
				href="/explore/{name}"
				onmouseenter={() => (hovered = name)}
				onmouseleave={() => (hovered = '')}
				class="pk-overlay relative block overflow-hidden rounded bg-cover bg-center px-5 py-7 text-xl font-bold capitalize text-white hover:text-orange-400"
				style="background-image: url({img})"
			>
				<span class="relative z-10">{name} </span>
				<div class="absolute right-0 top-1/2 z-10 h-full -translate-y-1/2 p-2 opacity-80">
					<Districts {name} active={name === hovered} />
				</div>
			</a>
		</div>
	{/each}
</div>
