<script context="module">
	export const load = async ({ fetch, params }) => {
		const {slug} = params;
		const res = await fetch(`/projects/${slug}.json`);
		if (res.ok) {
			const { project } = await res.json();
			return { props: { project } };
		}
	};
</script>
<script>
	export let project;
</script>

<svelte:head>
	<title>{project.name}</title>
</svelte:head>


<section>
	<h1>{project.name}</h1>
	<figure class='px-10 pt-10'>
		<img src={project.image[0].url} alt="Picture of {project.name}"/>
	</figure>
	<p>{project.description}</p>
	<p>{project.tags}</p>
</section>
