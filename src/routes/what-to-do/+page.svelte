<script>
	const load = async () => {
		const post = await fetch('/post/what-to-do.md');
		const text = await post.text();
		return text;
	};
</script>

<section class="px-[6%] py-10">
	{#await load() then text}
		<p>
			{text}
		</p>
	{/await}
</section>
