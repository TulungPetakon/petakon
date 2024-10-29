<script>
	const { thumbnail, title, link: href = '/', twFont } = $props();
</script>

<div class="w-full h-full relative overflow-hidden rounded group">
	<div
		style="background-image: url({thumbnail});"
		class="bg-cover bg-center w-full h-full rounded-sm transition-all duration-300 flex bg-gray-300 absolute top-0 left-0
      group-hover:scale-110
      after:w-full after:bg-gradient-to-t after:from-black/75 after:absolute after:bottom-0 after:left-0 after:h-2/3"
	></div>
	<div class="w-full h-full mt-auto flex items-end relative z-10">
		<div class="p-2 sm:p-5 opacity-90">
			<a {href} class="{twFont || ''} hover:text-orange-400 transition-all text-overflow">
				{title}
			</a>
		</div>
	</div>
</div>
