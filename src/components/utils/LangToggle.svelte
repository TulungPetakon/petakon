<script>
	let language = $state('id');
	const changeLang = (lang) => (language = lang);
</script>

<div class="bg-slate-200 rounded py-[.2rem] px-[.15rem] w-full min-w-20">
	<div class="flex w-full text-sm relative">
		<span
			class="block w-1/2 h-full bg-sky-500 absolute left-0 top-0 rounded transition-transform"
			class:translate-x-full={language === 'id'}
		></span>
		<button
			class="px-2 basis-1/2 relative z-10 transition-all"
			class:text-white={language === 'en'}
			onclick={() => changeLang('en')}
		>
			English
		</button>
		<button
			class="p-1 basis-1/2 relative z-10 transition-all"
			class:text-white={language === 'id'}
			onclick={() => changeLang('id')}
		>
			Indonesian
		</button>
	</div>
</div>
