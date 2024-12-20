<script lang="ts">
	import Modal from '$comp/utils/Modal.svelte';
	import { md } from '$lib/helpers/markdown.helper';

	const { text }: { text: string } = $props();
	let showModal = $state(false);
	const toggleModal = () => (showModal = !showModal);

	const readPost = (full = false) => {
		if (!text) return text;
		if (full) return md(text).html;

		const part = `${text.substring(0, 500)}...`;
		const { html: partialResult } = md(part, true);
		return partialResult;
	};
</script>

{#if showModal}
	<Modal {toggleModal}>
		<article class="pk-article">
			{@html readPost(true)}
		</article>
	</Modal>
{/if}

<div class="border-b pb-10 pt-7">
	<article class="pk-article text-gray-600">
		{@html readPost()}
	</article>
	<button class="inline-flex items-center text-black" onclick={toggleModal}>
		<span class="underline">Baca Selengkapnya</span>
		<i class="fasl fa-angle-right ml-2 leading-none"></i>
	</button>
</div>
