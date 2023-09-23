<script>
	import Navigation from '$lib/Navigation.svelte';
	import '../app.postcss';
</script>

<svelte:head>
	<title>Pim Tournaye</title>
</svelte:head>

<div class="h-full flex flex-row">
	<div class="h-full">
		<Navigation />
	</div>

	<main class="w-full">
		<slot />
	</main>
</div>
