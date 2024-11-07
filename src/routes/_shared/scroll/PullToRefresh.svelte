<script>
	import { fly } from 'svelte/transition';
	import { spin } from '$lib/helpers/animation/transition';
	import Dots from '$comp/loading/Dots.svelte';

	const { children } = $props();
	const maxPtrHeight = 120;

	let touchstartY = 0;
	let status = $state('ready');
	let touchDistance = $state(0);

	const ontouchstart = (e) => {
		if (status !== 'ready') return;
		touchstartY = e.touches[0].clientY;
	};

	const ontouchmove = (e) => {
		// if (!enable || status === 'refreshing') return;
		const touchY = e.touches[0].clientY;
		const elScrollY = e.currentTarget.parentElement.scrollTop | 0;
		const touchDiff = touchY - touchstartY;

		if (elScrollY === 0) {
			const diff = touchDiff < 0 ? 0 : touchDiff;
			touchDistance = diff * 0.3 >= maxPtrHeight ? maxPtrHeight : diff * 0.3;
		}

		if (touchDiff > 0 && elScrollY === 0) {
			status = 'pull-to-refresh';
		}
	};

	const ontouchend = (e) => {
		// If user dragged back to top
		if (touchDistance <= 0) {
			touchDistance = 0;
			status = 'ready';
			return;
		}

		// excecute when user dragged more than minimum requirement
		if (touchDistance >= 80) {
			touchDistance = 50;
			status = 'refreshing';
			e.currentTarget.parentElement.parentElement.style.pointerEvents = 'none';
		}

		if (touchDistance >= 50 && status === 'refreshing') return;

		// Cancel refresh if not meet requirement
		touchDistance = 0;
		status = 'released';
	};

	const ptrComplete = (e) => {
		if (!e.target.classList.contains('ptr')) return;
		if (status == 'refreshing') return window.location.reload();
		e.target.remove();
		status = 'ready';
	};
</script>

{#if status !== 'ready'}
	<div
		style="--ptr-height:{touchDistance}px; --op: {touchDistance / 50}"
		ontransitionend={ptrComplete}
		class:ptr-release={/released|refreshing/.test(status)}
		class="ptr border-b flex justify-center items-center bg-slate-50 z-10 relative overflow-hidden"
	>
		{#if status === 'refreshing'}
			<div class="w-5"><Dots /></div>
		{:else}
			<div class="text-center caption">
				{#if touchDistance > 80}
					<span in:spin class="block"> <i class="fasl fa-rotate-right text-lg"></i></span>
					<div class="block text-xs">Release to refresh!</div>
				{:else}
					<span class="block" in:fly={{ y: -20 }}>
						<i class="fasl fa-arrow-down-long text-lg"></i></span
					>
					<div class="block text-xs">Pull down to refresh!</div>
				{/if}
			</div>
		{/if}
	</div>
{/if}

<div {ontouchstart} {ontouchmove} {ontouchend} ontouchcancel={ontouchend} class="z-20">
	{@render children()}
</div>

<style>
	.ptr {
		height: var(--ptr-height);
	}

	.ptr-release {
		transition: all 0.3s;
	}
	.ptr .caption {
		opacity: var(--op);
	}
	.ptr-release .caption {
		transition: all 0.3s;
	}
</style>
