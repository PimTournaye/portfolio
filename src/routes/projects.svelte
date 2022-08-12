<script context="module" lang="ts">
	import Projects from '$lib/components/Projects.svelte';

	import { browser } from '$app/env';
	import { GQL_Projects } from '$houdini'
	import type { LoadEvent } from '@sveltejs/kit';

	export const router = browser;

	export const load = async (event: LoadEvent) => {
		await GQL_Projects.fetch({ event });
		return {};
	}
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<section>
	<h1 class="title text-4xl mb-10 font-bold">Projects</h1>
	<div>Here are some noteworthy projects I've done in the past.</div>
</section>

<section class="flex md:flex-row sm:flex-col justify-between">
	<Projects />
</section>
