<script context="module" lang="ts">
	import client from '../lib/graphql/client';
	client.init();
</script>

<script>
	import Sidebar from '$lib/header/Sidebar.svelte';
	import '../app.css';

	let dark = false;
</script>

<div class="flex flex-col ">
	<Sidebar />
	<main class=" flex flex-col
    h-full w-auto 
    overflow-hidden;
	ml-48
    ">
		<slot />
	</main>
</div>
