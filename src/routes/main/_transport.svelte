<script lang="ts">
	import antarjemput from '$images/utils/antarjemput.svg';
	import sewa from '$images/utils/rental.svg';
</script>

<section class="pt-20 px-[5%] md:px-[10%]">
	<h2 class="font-bold text-3xl">Pilihan Transportasi</h2>
	<div class="flex pt-10 flex-wrap">
		<div class="basis-full sm:basis-1/2 pr-2 my-1 relative">
			<button class="bg-sky-500 rounded-lg p-5 text-white w-full text-left">
				<div class="uppercase text-2xl font-bold">Antar Jemput</div>
				<div class="py-2">Lorem ipsum dolor sit amet.</div>

				<img
					src={antarjemput}
					alt="antar jemput"
					class="absolute top-1/2 right-2 -translate-y-1/2"
				/>
			</button>
		</div>

		<div class="basis-full sm:basis-1/2 pr-2 my-1 relative">
			<button class="bg-sky-500 rounded-lg p-5 text-white w-full text-left">
				<div class="uppercase text-2xl font-bold">Sewa Kendaraan</div>
				<div class="py-2">Lorem ipsum dolor sit amet.</div>
				<img src={sewa} alt="Sewa Kendaraan" class="absolute top-1/2 right-2 -translate-y-1/2" />
			</button>
		</div>
	</div>
</section>
