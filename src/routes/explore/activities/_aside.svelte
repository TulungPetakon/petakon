<div class="w-full bg-white rounded px-4 py-2">
	<h2 class="font-bold text-lg border-b py-2">Kisaran Harga</h2>
	<div class="py-2">
		<button
			class="pk-button border-2 border-gray-300 rounded-3xl !py-1 !px-3 text-sm hover:border-sky-400"
		>
			Bebas Biaya Masuk
		</button>
	</div>
</div>

<div class="w-full bg-white rounded px-4 py-2 mt-2">
	<h2 class="font-bold text-lg border-b py-2">Tags</h2>
	<div class="py-2">
		{#snippet button(text)}
			<button
				class="pk-button border-2 border-gray-300 rounded-3xl !py-1 !px-3 text-sm hover:border-sky-400 mr-1 mb-1 capitalize"
			>
				<span>
					{text}
				</span>
			</button>
		{/snippet}

		{#each ['edukasi', 'petualangan', 'hiburan', 'sejarah', 'relaksasi'] as text}
			{@render button(text)}
		{/each}
	</div>
</div>
