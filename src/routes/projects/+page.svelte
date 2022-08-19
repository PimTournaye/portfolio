<script context="module" lang="ts">
	throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

	// import { GQL_Projects } from '$houdini';
	// import Projects from '$lib/components/Project/Projects.svelte';
	// import type { LoadEvent } from '@sveltejs/kit';

	// export async function load(event: LoadEvent) {
	// 	await GQL_Projects.fetch({ event });
	// 	return {};
	// }
</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>

<section>
    <h1 class="title text-4xl mb-10 font-bold">Projects</h1>
    <div>Here are some noteworthy projects I've done in the past.</div>
    <Projects />
</section>