<script context="module">
	import { browser } from '$app/env';
	import tagColor from '$lib/tags-colors';
	export const router = browser;

	export const load = async ({fetch}) => {
		const res = await fetch('/projects.json');
		if (res.ok) {
			const { projects } = await res.json();
			return {props: { projects }};
		}
	}
</script>

<script>
	// @ts-nocheck
	export let projects;
	console.log(projects);
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<section>
	<h1 class="title text-4xl mb-10 font-bold">Projects</h1>
	<div>Here are some noteworthy projects I've done in the past.</div>
</section>

<section id="projects-container mt-5 space-x-2">
	{#each projects as { name, slug, short, image, tags }}
		{@debug }
		<div class="card w-96 bg-base-100 shadow-xl card-normal">
			<p class="">
				<!-- RECHECK THE SLUG HERE -->
				<a href="/projects/{slug}" class="card-title">
					{name}
				</a>
			</p>
			<figure class='px-10 pt-10'>
				<img src={image.url} alt="Picture of {name}" />\
			</figure>
			<p>{short}</p>
			{#if tags}
				<div class="mt-5 space-x-2 flex justify-start">
					{#each tags as tag}
						<div class="badge badge-outline">
							<span class="text=[{tagColor(tag)}]">●</span><span>{tag}</span>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</section>
