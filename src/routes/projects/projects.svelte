<script context="module" lang="ts">
	export const prerender = true;
	import { gql, GraphQLClient } from 'graphql-request'

	const URL = import.meta.env.GRAPHCMS_URL as string
  
	export async function load() {
	  const graphcms = new GraphQLClient(
		  URL,
		{
		  headers: {},
		}
	  )
  
	  const query = gql`
		query PostsIndex {
		  posts {
			id
			title
			slug
			date
			excerpt
		  }
		}
	  `
  
	  const { posts } = await graphcms.request(query)
  
	  return {
		props: {
		  posts,
		},
	  }
	}
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>




<section>
	<h1>Here are some projects that I'm proud of, are noteworthy or just felt like sharing.</h1>

	<div class="project-card">
		<figure>
			<img src="" alt="" srcset="">
			<figcaption>PROJECT TITLE</figcaption>
		</figure>
		<div class="onhover-desc">
			<p>SMALL DESCRIPTION</p>
			<div class="click-arrowoh"></div>
	</div>
</section>

  
  <script>
	export let posts
  </script>
  
  <h1>GraphCMS starter blog</h1>
  <ul>
	{#each posts as post}
	<li>
	  <a href="/post/{post.slug}">{post.title}</a>
	</li>
	{/each}
  </ul>
