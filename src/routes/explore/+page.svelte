<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section>
	<div class="text-right">
		<p>
			Here you can explore various aspects of me, my work, and my interests, in an interactive way.
			Consider this page a peek into the inner workings of the messy process and pile of things,
			thoughts and loose ends that is my mind.
		</p>
	</div>
	<div class="my-auto" id="explore-grid">
		<a href="https://music-library-viz.vercel.app/" class="card" id="music-viz">
			<div class="h-full w-full flex flex-col-reverse p-8">
				<span class="text-5xl text-white text-right font-mono">MY MUSIC LIBRARY</span>
			</div>
		</a>
    <h1 class="text-7xl font-bold text-white text-center place-self-center">
      MORE THINGS LATER.
      <br />
      CHECK BACK SOON.
    </h1>
	</div>
</section>

<style lang="postcss">
	section {
		/* @apply lg:grid lg:grid-cols-3 sm:block md:grid md:grid-cols-2 gap-4; */
		@apply h-full;
		@apply bg-bright-bau-yellow;
		@apply flex flex-col items-center;
	}

	p {
		@apply text-white;
		@apply text-2xl;
		@apply font-medium;
		@apply px-8;
		@apply font-mono;
	}

	.card {
		@apply bg-[#eadccf];
		@apply rounded-xl shadow-lg;
	}

	#explore-grid {
		@apply grid grid-cols-2 gap-4;
		@apply h-full;
		@apply w-full;
		@apply px-8;
	}

	#music-viz {
		/* background pic */
		background-image: url('/music-viz.png');
		background-color: black;
		@apply object-center object-cover;
	}
</style>
