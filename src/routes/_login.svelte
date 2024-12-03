<script lang="ts">
	import { onMount } from 'svelte';

	const key = 'petakon123';
	let inputKey = $state('');

	const { onLogged }: { onLogged: () => void } = $props();
	onMount(() => {
		const savedKey = localStorage.getItem('petakonKey');
		if (savedKey === key) return onLogged();
	});

	const check = () => {
		if (inputKey !== key) return (inputKey = '');
		localStorage.setItem('petakonKey', inputKey);
		return onLogged();
	};
</script>

<div
	class="flex !h-[var(--app-height)] w-full items-center justify-center bg-slate-100 text-center"
>
	<div class="">
		<div class="mx-auto my-5 flex w-96 flex-col items-center">
			<input
				type="text"
				bind:value={inputKey}
				class="w-full rounded-full border-2 border-sky-400 px-5 py-2"
				placeholder="Masukkan Kode Akses"
			/>

			<button class="pk-button mt-5 rounded-md bg-orange-400 text-white" onclick={check}>
				Buka
			</button>
		</div>
	</div>
</div>
