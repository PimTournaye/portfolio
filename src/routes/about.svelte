<script context="module">
	// @ts-ignore
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>


<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>About me, Pim</h1>
	<p id="part-one" class="text-roman white-text">
		You know how some things in life just really rub off on you? Jazz was one of those things for
		me. The spirit of the music, of improvisation and a continual <span
			class="text-bright-bau-yellow dark:text-bau-yellow">conversation</span
		>
		is something I really internalized throughout my studies. I believe that conversation perpetuates
		in everything. Design, coding,
		<span class="yellow-text">conceptualization and ideation</span>, walking, the way you open your
		window to look outside. You name it, there's continuous movement, tension and release. One thing
		that immensely enhances that social aspect is interactivity, and it continues to facinate me
		endlessly. Hi again, I'm <span class="red-text">Pim Tournaye</span>, a student from Brussels.
		Someone with a large background in social music, arts and a knack for design thinking, vision,
		development and experimentation. I like involving people and building experiences that are
		unforgettable.
	</p>
</div>
