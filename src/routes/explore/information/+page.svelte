<script>
	import { topbarHeight } from '$lib/stores/app-writable.svelte';
	const { kecamatan } = $props();
</script>

<section class="relative flex px-[5%] md:px-[10%] py-10 mb-20">
	<article class="pk-article basis-full md:basis-8/12">
		<h1 class="mb-2 font-bold text-2xl capitalize">Tentang {kecamatan}</h1>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro nisi sint illum accusamus
			atque libero alias voluptatem dolorem aliquam adipisci minus iste natus debitis ab asperiores
			fuga, sapiente voluptate eveniet commodi perspiciatis assumenda at architecto maxime? Ipsa
			voluptates est nihil magnam libero impedit nostrum, provident eaque quod ipsam doloremque
			illum.
		</p>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ducimus qui eius libero, id
			suscipit, consectetur quidem eum inventore dolorem adipisci eaque dolorum? Esse ipsum ipsam id
			pariatur autem quis, molestiae doloribus cum cupiditate dignissimos vitae nam iste tempore
			totam repellat quibusdam aspernatur natus necessitatibus iure temporibus maxime officia.
			Molestias aliquid delectus veritatis vitae eveniet sunt fugit officia nihil quos, beatae quae
			ullam consequatur cumque necessitatibus expedita perferendis dolor pariatur, eligendi, animi
			amet sint possimus. Temporibus dolorem ex ad quod ratione deleniti autem laborum. Iure autem,
			adipisci beatae in ex dolores? Porro officiis tempore, maiores omnis, quae alias quos, soluta
			labore laudantium inventore enim cum itaque dolor minus voluptatum. Quaerat commodi officiis
			inventore nesciunt fugit harum! Numquam magnam veniam porro facere. Odit voluptatibus deleniti
			nulla sint illo ipsum dolore, ipsa magni ullam magnam repellendus quam non sequi labore
			delectus repellat. Est distinctio iusto debitis sed et. Maxime laudantium quisquam aut
			voluptatibus nulla, assumenda unde alias sit molestias odit, laboriosam voluptatum aspernatur
			consequuntur, ipsa repellendus? Praesentium architecto repellat ullam iusto facere enim
			reiciendis quibusdam! Quod reiciendis voluptates doloribus doloremque commodi culpa. Omnis
			ratione nostrum nulla ut porro! Minus harum laboriosam totam nihil earum esse impedit nostrum
			adipisci, molestias veniam facere qui.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio a nam consequatur hic provident
			ex aspernatur soluta aperiam, suscipit incidunt!
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem tempora rem deleniti.
			A, dignissimos quod illum nobis reprehenderit pariatur architecto voluptatibus accusamus harum
			suscipit deleniti facilis atque numquam cumque corporis iste in maxime cum! Autem tenetur
			facere iste unde quos eveniet omnis. Repellendus eligendi repudiandae sequi dolor. Nam, iusto
			aperiam. Dolor, est sint. Modi, vitae. Neque officia soluta fuga. A, sequi. Numquam sed unde
			aliquam quibusdam totam dolore officiis recusandae, reiciendis nobis ut fuga, dolorum ratione,
			dolorem placeat qui quos magnam alias. Consequuntur, quasi! Illo aliquid illum repudiandae
			repellendus dolore. Rem doloremque, at libero dolorum ex ratione voluptate provident ipsa
			minima eligendi. Quibusdam vitae voluptas repellendus ut tempore, explicabo, voluptates
			labore, omnis molestiae distinctio quaerat accusamus! Est dicta sunt tempora, enim
			reprehenderit error voluptate fugiat, dolor doloribus explicabo in pariatur libero voluptates
			omnis dolorum debitis, atque optio architecto maiores doloremque magnam corporis mollitia
			soluta impedit? Maiores id vel sunt dolorem nihil nobis sint voluptatum pariatur officia est?
			Perspiciatis minus, maiores quas minima nostrum natus iusto, earum harum repudiandae ratione
			id autem, in quasi deleniti est velit nulla? Autem vel illum inventore maxime illo ullam,
			ratione necessitatibus deleniti cumque! Deserunt soluta a nam reprehenderit consectetur, nulla
			asperiores fuga eligendi sequi cumque.
		</p>
	</article>

	<aside class="min-w-60 basis-4/12 hidden md:flex pl-10 relative">
		<div class="ml-auto sticky right-0 h-fit pb-5" style="top:{$topbarHeight + 110}px;">
			<h2 class="font-bold text-lg mb-2">Daftar Isi</h2>
			<ol class="capitalize">
				<li class="py-1 xl:py-0">
					<a href="#hubla" class="hover:underline hover:text-black inline-block">
						Tentang {kecamatan}
					</a>
				</li>
				<li class="py-1 xl:py-0">
					<a
						href="#haiss"
						class="hover:underline hover:text-black inline-block"
						style="line-height: 125%;"
					>
						Apa saja yang ada di Kecamatan {kecamatan}?
					</a>
				</li>
			</ol>
		</div>
	</aside>
</section>
