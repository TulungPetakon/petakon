<script lang="ts">
	import { navigating } from '$app/stores';
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	import delay from '$lib/helpers/timer/delay';

	let show = $state(false);

	const progress = tweened(0, {
		duration: 3500,
		easing: cubicOut
	});

	$effect(() => {
		(async () => {
			const { complete, from, to } = $navigating || {};
			if (from?.route.id === to?.route.id) return;

			show = true;
			progress.set(0.7);
			await complete; // waiting to be fulfilled

			progress.set(1, { duration: 500 });
			await delay(500);
			show = false; // hide progress
		})();
	});
</script>

{#if show}
	<div
		out:fade
		onoutroend={() => progress.set(0, { duration: 1 } /** Reset Progress */)}
		class="fixed left-0 top-0 z-[100] h-1 w-full"
	>
		<div
			class="background-animate h-full w-[var(--width)]
    rounded-full bg-gradient-to-r from-sky-500
    via-yellow-500 to-sky-500"
			style={`--width: ${$progress * 100}%`}
		></div>
	</div>
{/if}

<style>
	.background-animate {
		background-size: 800%;
		animation: AnimationName 1.25s ease infinite forwards;
	}

	@keyframes AnimationName {
		0% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
