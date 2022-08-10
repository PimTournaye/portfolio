<script>
	import Sidebar from '$lib/header/Sidebar.svelte';
	import '../app.css';

	let dark = true;
</script>

<div class:dark class="flex flex-row">
	<Sidebar bind:dark class="flex"/>
	<main class="flex justify-center mt-8 md: ml-10">
		<slot />
	</main>
</div>
