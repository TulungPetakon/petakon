<script>
	import { fly, scale } from 'svelte/transition';
	const { children } = $props();
</script>

<div
	transition:scale={{ start: 0, duration: 250 }}
	role="tooltip"
	class="w-fit absolute left-1/2 bottom-full -translate-x-1/2 shadow-lg pointer-events-auto"
>
	<div
		class="relative h-full w-fit bg-white leading-tight rounded overflow-hidden"
		transition:fly={{ y: 100, duration: 250 }}
	>
		{@render children()}
	</div>
	<i
		class="fas fa-triangle scale-y-[-1] absolute left-1/2 bottom-0 translate-y-3/4 -translate-x-1/2 text-xs text-white -z-10"
	></i>
</div>
