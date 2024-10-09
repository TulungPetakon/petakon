<script>
	import p1 from '@images/partners/harapan-jaya.png?format=webp';
	import p2 from '@images/partners/hotel-surakarta.png?format=webp';
	import p3 from '@images/partners/ilio-guest-house.png?format=webp';
	import p4 from '@images/partners/jaya-mandiri.png?format=webp';
</script>

<section class="pt-20 px-[5%] md:px-[10%]">
	<h2 class="font-semibold text-center md:text-xl">Trusted by:</h2>
	<div class="flex pt-5 justify-center items-center">
		{#each [p1, p2, p3, p4] as src}
			<div class="px-2">
				<img
					{src}
					alt="partner"
					class="max-h-[100px] grayscale opacity-35 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
				/>
			</div>
		{/each}
	</div>
</section>
