<script>
	import BackButton from '$lib/components/BackButton.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<section>
  <div id="container">
    <div class="flex flex-col justify-between items-center h-full">
      <h1 class="sideways-title">EXPLORE</h1>
			<BackButton />
    </div>
    
    <div id="content">
      <h2>UNDER CONSTRUCTION.</h2>
      <p>Please visit some other time soon.</p>
    </div>
  </div>
</section>

<style lang="postcss">
	section {
		@apply h-screen;
    @apply bg-bright-bau-yellow;
	}

  #container {
    @apply flex flex-row;
    @apply pt-6 pb-16 pl-8;
		@apply h-full;
  }

	.sideways-title {
		@apply text-6xl md:text-7xl lg:text-8xl font-bold text-black text-center font-sans;
		writing-mode: vertical-rl;
		text-orientation: mixed;
		@apply text-white;
	}

	#content {
		@apply flex flex-col;
		@apply items-center;
		@apply justify-center mx-auto;
	}
	h2 {
		@apply text-8xl md:text-4xl lg:text-7xl font-bold text-black text-center font-mono;
		@apply text-white;
	}

  p {
    @apply text-xl md:text-2xl lg:text-3xl font-medium text-black text-center font-mono;
    @apply text-white mt-8;
  }
</style>
