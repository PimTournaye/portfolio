<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>PROJECT SLUG</svelte:head>

<main>
	<div class="title-card">
		<h1 class="project-title">PROJECT TITLE</h1>
		<div class="tags">#PROJECT #TAGS</div>
		<img src="./static" alt="" />
	</div>

	<section>
		<div class="project-desc">DESCRIPTION HERE</div>

		<figure>
			<img src="./static" alt="" />
			<figcaption>PHOTO CAPTION HERE</figcaption>
		</figure>
	</section>

	<section class="additional-info">
		<div></div>
		<a href="http://"> LINK TO SOURCE CODE</a>

	</section>
</main>
