<script>
  import { page } from '$app/stores';
</script>

<div id="nav">
	{#if !$page.url.pathname.startsWith('/work')}
	<a href="/work" class="nav-item bg-bright-bau-red hover:bg-white hover:text-bright-bau-red">WORK</a>
{/if}

{#if !$page.url.pathname.startsWith('/about')}  
	<a href="/about" class="nav-item bg-bright-bau-blue hover:bg-white hover:text-bright-bau-blue">ABOUT</a>
{/if}

{#if !$page.url.pathname.startsWith('/explore')}
	<a href="/explore" class="nav-item bg-bright-bau-yellow hover:bg-white hover:text-bright-bau-yellow">EXPLORE</a>
{/if}
</div>

<style lang="postcss">
	#nav {
		@apply flex flex-row;
		@apply h-full;
		@apply sticky;
	}

	.nav-item {
		@apply text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center;
    @apply py-8;
    @apply w-16 md:w-24 lg:w-32 xl:w-40;
    @apply transition-all ease-in-out duration-300;
		writing-mode: vertical-rl;
		text-orientation: mixed;

		/* Adjust the position to vertically center the text */
    transform-origin: center;
    display: flex;
    align-items: center;

	}
</style>
