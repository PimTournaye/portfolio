<script context="module" lang="ts">
	throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

	// import client from '../lib/graphql/client';
	// client.init();
</script>

<script>
	import Sidebar from '$lib/header/Sidebar.svelte';
	import '../app.css';

	let dark = false;
</script>

<div class="flex flex-col ">
	<Sidebar />
	<main class=" flex flex-col
	jusitfy-center items-center
    h-full w-auto
    overflow-hidden;
	mt-12 ml-60 mr-60
	">
		<slot />
	</main>
</div>
