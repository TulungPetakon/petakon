<script>
	import { fade } from 'svelte/transition';
	import Brand from '$comp/svgs/Brand.svelte';
</script>

<div
	out:fade
	class="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-white z-[1000]"
>
	<div class="flex flex-col items-center">
		<div class="w-16 h-16 block">
			<Brand animate />
		</div>
		<span class="caption block mt-2 after:inline-block after:text-sky-500 after:text-3xl"
			>Punten, Ape Takon</span
		>
	</div>
</div>

<style>
	.caption::after {
		line-height: 0;
		animation: caption 2.1s infinite ease-out forwards;
	}

	@keyframes caption {
		0% {
			content: '';
		}
		25% {
			content: '.';
		}
		50% {
			content: '..';
		}
		100% {
			content: '...';
		}
	}
</style>
