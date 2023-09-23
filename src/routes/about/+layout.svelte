<script>
	import BackButton from '$lib/components/BackButton.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<section>
  <div id="container">
    <div class="flex flex-col justify-between items-center h-full">
      <h1 class="sideways-title">ABOUT</h1>
			<BackButton />
    </div>
    
    <div id="content">
      <slot />
    </div>
  </div>
</section>

<style lang="postcss">
	section {
		@apply h-screen;
    @apply bg-bright-bau-blue;
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
    @apply mx-16
	}
</style>

