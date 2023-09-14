<div id="nav">
	<a href="/work" class="nav-item bg-bright-bau-red">WORK</a>
	<a href="/about" class="nav-item bg-bright-bau-blue">ABOUT</a>
	<a href="/explore" class="nav-item bg-bright-bau-yellow">EXPLORE</a>
</div>

<style lang="postcss">
	#nav {
		@apply flex flex-row;
		@apply border-r-2 border-black;
		@apply h-full;
	}

	.nav-item {
		@apply text-xl md:text-2xl lg:text-3xl font-bold text-white text-center;
    @apply py-8;
    @apply w-16 md:w-24 lg:w-32;
    @apply hover:w-32 md:hover:w-40 lg:hover:w-48;
    @apply transition-all ease-in-out duration-200;
		writing-mode: vertical-rl;
		text-orientation: mixed;

		/* Adjust the position to vertically center the text */
    transform-origin: center;
    display: flex;
    align-items: center;

	}
</style>
