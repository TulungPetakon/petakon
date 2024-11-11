<script>
	import img from '$images/beach/buper.jpg?format=webp';
	let { district, height = $bindable() } = $props();
</script>

<div
	class="pk-overlay bg-cover bg-center bg-fixed w-full h-fit relative rounded-br-[2.5rem] md:rounded-br-[4rem]"
	style="background-image: url({img});"
	bind:clientHeight={height}
>
	<div class="relative px-[5%] md:px-[10%] py-5 text-white z-10">
		<div class="hidden md:block text-sm text-slate-200 pb-8">
			<a href="/" class="hover:text-orange-300 transition-all"> Home </a>
			<span> / </span>
			<a href="/explore" class=" hover:text-orange-300 transition-all">Explore</a>
			<span> / </span>
			<span class="font-bold text-blue-300 capitalize">Jelajahi {district}</span>
		</div>

		<div class="flex flex-col sm:flex-row pb-3">
			<h1 class="capitalize pb-3 w-full">
				<span class="block text-lg md:text-2xl pb-2">Jelajahi Kecamatan</span>
				<span class="block text-3xl md:text-5xl font-bold">{district} </span>
			</h1>
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
		</div>
	</div>
</div>
