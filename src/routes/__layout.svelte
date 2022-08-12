<script>
	import Sidebar from '$lib/header/Sidebar.svelte';
	import '../app.css';
	import client from '../lib/graphql/client'
	client.init();

	let dark = true;
</script>

<div class:dark class="flex flex-row">
	<Sidebar bind:dark/>
	<main class="flex justify-center mt-8 md: ml-10">
		<slot />
	</main>
</div>
