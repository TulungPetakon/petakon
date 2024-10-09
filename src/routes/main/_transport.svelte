<section class="pt-20 px-60">
	<h2 class="font-bold text-3xl">Pilihan Transportasi</h2>
	<div class="flex pt-10">
		{#each ['antarjemput', 'sewa'] as x}
			<div class="basis-1/2 pr-2">
				<button class="petakon-bg-gradient rounded-lg p-5 text-white w-full text-left">
					<div class="uppercase text-2xl font-bold">{x}</div>
					<div class="py-2">Lorem ipsum dolor sit amet.</div>
				</button>
			</div>
		{/each}
	</div>
</section>
