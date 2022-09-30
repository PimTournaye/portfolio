<script>
	import ProjectCard from '$lib/components/Project/ProjectCard.svelte';
	export let data;
	$: ({ Projects } = data);
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

{console.log($Projects.data.projects)}

<section>
	<h1 class="title text-4xl mb-10 font-bold">Projects</h1>
	<div>Here are some noteworthy projects I've done in the past.</div>

	{#each $Projects.data.projects as { name, slug, short, image, year, tags }}
		<ProjectCard {name} {slug} {short} images={image} {year} {tags} />
	{/each}
</section>
