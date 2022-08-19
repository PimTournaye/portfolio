<script lang="ts" context="module">
	throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

	// import { browser } from '$app/env';
	// import { GQL_Project } from '$houdini';
	// import type { LoadEvent } from '@sveltejs/kit';
	// import Project from '$lib/components/Project/Project.svelte';

	// export async function load(event: LoadEvent) {
	// 	const variables = { slug: event.params.slug };
	// 	await GQL_Project.fetch({ event, variables });
	// 	return { props: { variables } };
	// }
</script>

<script lang="ts">
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");
	// Suggestion (check code before using, and possibly convert to data.X access later):
	// import type { PageData } from './$types';
	// export let data: PageData;
	// $: ({ variables } = data);

	export let variables: any;

	$: browser && GQL_Project.fetch({ variables });

	const { name, description } = $GQL_Project.data?.project || {};
	const tags = $GQL_Project.data?.project?.tags;
	const image = $GQL_Project.data?.project?.image[0].url;
	const demo = $GQL_Project.data?.project?.demo;
	const source = $GQL_Project.data?.project?.sourceCode;

	console.log(description);
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<section>
	<h1>{name}</h1>
	<figure class="px-10 pt-10">
		<img src={image} alt="Picture of {name}" />
	</figure>
	{#if tags}
		{#each tags as tag}
			<div class="badge badge-outline">
				<span>{tag}</span>
			</div>
		{/each}
	{/if}
	<!-- This does work, the type checking is just really annoying here. -->
	{#if description}
		<p>{@html description.html}</p>
	{/if}
	{#if demo}
		<div class="mt-5">
			<a href={demo} class="btn btn-primary">
				<span class="text-base-content">Demo</span>
			</a>
		</div>
	{/if}

	{#if source}
		<div class="mt-5">
			<a href={source} class="btn btn-primary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
				<span class="text-base-content">Source Code</span>
			</a>
		</div>
	{/if}
</section>
