<script context="module">
	import { browser } from '$app/env';
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1 class="font-bold text-7xl flex mx-auto">Hey, I'm Pim</h1>
	<h2 class="text-xl">
		I am a creative coder, improviser and musician that is passionate about all things that play
		with forms of interaction
	</h2>

	<h1>Contact:</h1>
		Socials
		<ul>
			<li>
				<a href="https://www.linkedin.com/in/pim-tournaye-a65b151a2/">LinkedIn</a>
			</li>
			<li>
				<a href="https://www.instagram.com/wafflemancer">Instagram</a>
			</li>
		</ul>
</section>
