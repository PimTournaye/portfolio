<script context="module">
	import { gql, GraphQLClient } from 'graphql-request';

	export async function load(context) {
		const graphcms = new GraphQLClient(
			//import.meta.env.VITE_GRAPHCMS_URL,
			'https://api-eu-central-1.graphcms.com/v2/ckxlpg27z4bcj01xpbrehcs3y/master',
			{
				headers: {}
			}
		);

		const query = gql`
        query Project($slug: String!) {
  project(where: {slug: $slug}) {
    name
    short
    description
    tags
    image {
      url
    }
  }
}

        `
      ;

		const variables = {
			slug: context.params.slug
		};

		const { project } = await graphcms.request(query, variables);

		return {
			props: {
				project
			}
		};
	}
</script>

<script>
	export let project;
</script>

<svelte:head>
	<title>{project.name}</title>
</svelte:head>

<h1>{project.name}</h1>
<p>{project.description}</p>
<p>{project.tags}</p>
<img src={project.image} alt="Picture of {project.name}" />
