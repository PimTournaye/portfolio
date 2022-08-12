<script lang="ts">
	import { browser } from '$app/env';
	import { GQL_Projects } from '$houdini';

	import ProjectCard from '$lib/components/ProjectCard.svelte';

	$: browser && GQL_Projects.fetch();

	export let projects = $GQL_Projects.data?.projects || [];
</script>

{#if $GQL_Projects.isFetching}
	Loading...
{:else}
	{#each projects as { name, slug, short, image, year, tags }}
		<ProjectCard name={name} slug={slug} short={short} images={image} year={year} tags={tags} />
	{/each}
{/if}
