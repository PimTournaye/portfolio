<script context="module">
	export const prerender = true;
</script>


<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1 class="font-bold text-7xl flex mx-auto">Hey, I'm Pim</h1> 
	<h2 class="text-xl">I am a creative coder, improviser and musician that is passionate about all things that play with forms of interaction</h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
