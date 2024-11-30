<script lang="ts">
	import { districtList } from '$lib/helpers/kecamatan.helper';
	import img from '$images/beach/jurang-senggani.jpg';
	import Districts from '$comp/svgs/Districts.svelte';
</script>

<h1 class="mb-5 text-2xl font-bold uppercase">Unggulan Kota Tulungagung</h1>
<div class="grid sm:grid-cols-2 lg:grid-cols-3">
	{#each districtList as name}
		<div
			class="py-2 sm:px-4 group
    lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n)]:pr-0 lg:odd:pl-4 lg:even:pr-4
    sm:odd:pl-0 sm:even:pr-0"
		>
			<a
				href="/explore/{name}"
				class="block bg-cover bg-center relative pk-overlay text-white capitalize rounded overflow-hidden text-xl font-bold px-5 py-7"
				style="background-image: url({img})"
			>
				<span class="relative z-10">{name} </span>
				<div class="h-full p-2 absolute right-0 top-1/2 -translate-y-1/2">
					<Districts {name} />
				</div>
			</a>
		</div>
	{/each}
</div>
