<script>
	import Sidebar from '$lib/header/Sidebar.svelte';
	import '../app.css';

	let dark = true;
</script>

<div class:dark class="flex">
	<Sidebar bind:dark class="flex"/>
	<main class="flex justify-center mt-8 md: ml-10">
		<slot />
	</main>
	<footer>
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
		<p>Built with &hearts and Svelte</p>
	</footer>
</div>
