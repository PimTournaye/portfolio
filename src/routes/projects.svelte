<script context="module">
	import { browser } from '$app/env';
	export const router = browser;

	import { GraphQLClient, gql } from 'graphql-request';

	export async function load() {
		const graphcms = new GraphQLClient(
			'https://api-eu-central-1.graphcms.com/v2/ckxlpg27z4bcj01xpbrehcs3y/master'
		);

		const QUERY = gql`
			{
				projects {
					slug
					name
					short
					image {
						url
					}
					tags
				}
			}
		`;

		const { projects } = await graphcms.request(QUERY);
		return {
			props: {
				projects
			}
		};
	}
</script>

<script>
	// @ts-nocheck
	export let projects;
	console.log(projects);
</script>

<section>
	<h1 class="title">Projects</h1>
	<div>Here are some noteworthy projects I've done in the past.</div>
</section>

<section id="projects-container mt-5 space-x-2">
	{#each projects as {name, id, image, short, tags}}
		<div class="card w-96 bg-base-100 shadow-xl card-normal">
			<figure><img src={image.url} alt="Picture of {name}" /></figure>
			<p class="">
				<!-- RECHECK THE SLUG HERE -->
				<a href="/projects/{id}" class="card-title hover:bg-red-700">
					{name}
				</a>
			</p>
			<p>{short}</p>
			{#if tags}
			<div class="mt-5 space-x-2">
				{#each tags as tag}
				<span class="badge badge-primary">{tag}</span>
				{/each}
			</div>
			{/if}

		</div>
	{/each}
</section>
