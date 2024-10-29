<script>
	import bus from '@images/utils/bus.png?format=webp';
</script>

<section class="flex items-center bg-slate-100 px-[5%] md:px-[6.5%] pt-20 pb-20">
	<!-- Left -->
	<div
		class="hidden
    sm:basis-4/12 sm:block
    md:basis-5/12
    lg:basis-1/2"
	>
		<img src={bus} alt="Trips Illustration" class="opacity-75 w-10/12" />
	</div>

	<!-- right -->
	<div
		class="sm:basis-8/12
    md:basis-7/12
    lg:basis-1/2"
	>
		<div class="flex items-center">
			<div class="block pr-4 sm:hidden basis-1/2">
				<img src={bus} alt="Trips Illustration" class="opacity-75 w-full" />
			</div>
			<div class="w-full relative">
				<span class="absolute bottom-full left-1/2 -translate-x-1/2 w-full text-left">
					Berkunjung Sekarang!
				</span>
				<h2 class="font-bold text-3xl text-left relative overflow-hidden">
					<span class="relative inline-block py-1 w-full leading-tight">
						RENCANAKAN PERJALANAN
					</span>
				</h2>
			</div>
		</div>

		<div class="flex flex-wrap w-full pt-5">
			<div
				class="basis-full pr-2 py-1
        md:basis-1/2 md:py-0"
			>
				<a
					href="/"
					class="block border-2 border-sky-600/50 w-full py-2 px-4 rounded h-full
        hover:border-orange-400"
				>
					<h3 class="font-bold text-xl pb-2">OPEN TRIP</h3>
					<p class="leading-tight">Liburan hemat dan seru sambil berkenalan dengan teman baru</p>
				</a>
			</div>

			<div
				class="basis-full pr-2 py-1
        md:basis-1/2 md:py-0"
			>
				<a
					href="/"
					class="block border-2 border-sky-600/50 w-full py-2 px-4 rounded h-full
        hover:border-orange-400"
				>
					<h3 class="font-bold text-xl pb-2">PRIVATE TRIP</h3>
					<p class="leading-tight">
						Liburan eksklusif dengan privasi penuh bersama teman atau keluarga
					</p>
				</a>
			</div>

			<div class="basis-full pr-2 py-1 md:pb-0 md:pt-2">
				<a
					href="/"
					class="block border-2 border-sky-600/50 w-full py-2 px-4 rounded h-full
          md:text-center
        hover:border-orange-400"
				>
					<h3 class="font-bold text-xl md:py-2">RENCANAKAN PERJALANANMU SENDIRI</h3>
				</a>
			</div>
		</div>
	</div>
</section>
