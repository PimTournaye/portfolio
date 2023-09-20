<script>
	import BackButton from '$lib/components/BackButton.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<section>
	<div id="sidebar-stuff">
		<h1>ABOUT</h1>
		<BackButton />
	</div>

	<div>
		<slot />
	</div>
</section>

<style lang="postcss">
	section {
		@apply h-screen;
		@apply bg-bright-bau-yellow;
		@apply flex flex-row;
		@apply pt-6 pl-8;
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
