<script>
	import ProjectCard from '$lib/components/Project/ProjectCard.svelte';
	export let data;
	let { projects } = data;

	console.log(projects);
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<section>
	<h1 class="title text-4xl mb-10 font-bold">Projects</h1>
	<div>Here are some noteworthy projects I've done in the past.</div>

	{#each projects as { title, slug, short, image, year, tags }}
		<ProjectCard {title} {slug} {short} images={image} {year} {tags} />
	{/each}
</section>
