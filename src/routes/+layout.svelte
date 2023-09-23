<script>
	import Navigation from '$lib/Navigation.svelte';
	import { onMount } from 'svelte';
	import '../app.postcss';
	import { writable } from 'svelte/store';

	// get the width of the header element for drawing margins
	let headerWidth = writable(0);

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
