<script>
	import BackButton from '$lib/components/BackButton.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<section>
	<div id="container">
		<div class="flex flex-col justify-between items-center mr-8">
			<h1 class="sideways-title">WORK</h1>
			<BackButton />
		</div>

		<slot />
	</div>
</section>

<style lang="postcss">
	section {
		@apply h-screen;
		@apply bg-bright-bau-red;
	}

	#container {
		@apply flex flex-row;
		@apply pt-8 pb-16 px-8;
		@apply h-full fixed
	}

	.sideways-title {
		@apply text-6xl md:text-7xl lg:text-8xl font-bold text-center font-sans;
		@apply text-white;
		writing-mode: vertical-rl;
		text-orientation: mixed;
	}
</style>
