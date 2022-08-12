<script lang="ts">
	import { GQL_Project } from '$houdini';
	import type { LoadEvent } from '@sveltejs/kit';

	export async function load(event: LoadEvent) {
		const { slug } = event.params;
		await GQL_Project.fetch({ event, variables: { slug } });
		return {};
	}

	const { name, description} = $GQL_Project.data?.project || {};
	const tags = $GQL_Project.data?.project?.tags;
	const image = $GQL_Project.data?.project?.image[0].url;
	const demo = $GQL_Project.data?.project?.demo;
	const source = $GQL_Project.data?.project?.sourceCode;
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<section>
	<h1>{name}</h1>
	<figure class="px-10 pt-10">
		<img src={image} alt="Picture of {name}" />
	</figure>
	<!-- {#each tags as tag}
		<div class="badge badge-outline">
			<span>{tag}</span>
		</div>
	{/each} -->
	<p>{description}</p>

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
