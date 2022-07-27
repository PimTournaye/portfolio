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
