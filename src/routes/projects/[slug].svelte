<script context="module">
	import tagColor from '$lib/tags-colors';

	export const load = async ({ fetch, params }) => {
		const { slug } = params;
		const res = await fetch(`/projects/${slug}.json`);
		if (res.ok) {
			const { project } = await res.json();
			return { props: { project } };
		}
	};
</script>

<script>
	export let project;
	const { name, image, description, tags } = project;
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<section>
	<h1>{name}</h1>
	<figure class="px-10 pt-10">
		<img src={image[0].url} alt="Picture of {name}" />
	</figure>
	{#each tags as tag}
	<div class="badge badge-outline">
		<span class="text=[{tagColor(tag)}] mr-2 mb-0.5">●</span><span>{tag}</span>
	</div>
	{/each}
	<p>{description}</p>

	{#if project.demo}
		<div class="mt-5">
			<a href={project.demo} class="btn btn-primary">
				<span class="text-base-content">Demo</span>
			</a>
		</div>
	{/if}

	{#if project.sourceCode}
		<div class="mt-5">
			<a href={project.sourceCode} class="btn btn-primary">
				<span class="text-base-content">Source Code</span>
			</a>
		</div>
	{/if}
</section>
