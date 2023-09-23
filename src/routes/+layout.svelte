<script>
	import Navigation from '$lib/Navigation.svelte';
	import { onMount } from 'svelte';
	import '../app.postcss';

	let headerWidth = 0;
	// get the width of the header element
	onMount(() => {
		headerWidth = document.querySelector('header').clientWidth;
	});
</script>

<svelte:head>
	<title>Pim Tournaye</title>
</svelte:head>


<header class="h-full fixed" bind:clientWidth={headerWidth}>
	<Navigation />
</header>
<main style="margin-left: {headerWidth}px">
	<slot />
</main>

<style lang="postcss">
	main {

	}
</style>
