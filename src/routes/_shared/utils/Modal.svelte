<script>
	import ScrollArea from '$comp/scroll/ScrollArea.svelte';
	import { self } from '$lib/helpers/event-handler.helper';
	import { fade, fly } from 'svelte/transition';

	const { children, toggleModal } = $props();
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
	role="dialog"
	class="fixed left-0 top-0 z-50 flex size-full items-center justify-center bg-black/40 backdrop-blur-sm"
	onmousedown={self(toggleModal)}
	transition:fade={{ duration: 250 }}
>
	<div
		class="relative w-[800px] max-w-[90%] rounded-lg bg-white pb-10 pt-14"
		transition:fly={{ y: 20, duration: 250 }}
	>
		<button
			aria-label="close"
			class="absolute left-5 top-2 aspect-square w-10 text-lg"
			onclick={toggleModal}
		>
			<i class="fasl fa-xmark-large"></i>
		</button>
		<ScrollArea
			defer
			class="!max-h-[calc(0.75*var(--app-height))]"
			options={{ scrollbars: { theme: 'os-theme-dark' } }}
		>
			<div class="px-7">
				{@render children()}
			</div>
		</ScrollArea>
	</div>
</div>
