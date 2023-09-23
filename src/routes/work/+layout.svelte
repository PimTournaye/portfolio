<script>
	import BackButton from '$lib/components/BackButton.svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	/** @type {import('./$types').LayoutData} */
	export let data;

	let bannerWidth = writable(0);

</script>

<section>
		<div id="banner" bind:clientWidth={bannerWidth}>
			<h1 class="sideways-title">WORK</h1>
			<BackButton />
		</div>

		<div class="w-full" style="margin-left: {bannerWidth}px;">
			<slot />
		</div>
		
</section>

<style lang="postcss">
	section {
		@apply bg-bright-bau-red;
		@apply flex flex-row;
		@apply pt-8 pb-16 px-8;
		@apply h-full
	}

	#banner {
		@apply flex flex-col items-center h-screen justify-between; 
		@apply pr-8 pb-32 fixed;
	}

	.sideways-title {
		@apply text-6xl md:text-7xl lg:text-8xl font-bold text-center font-sans;
		@apply text-white;
		writing-mode: vertical-rl;
		text-orientation: mixed;
	}
</style>
