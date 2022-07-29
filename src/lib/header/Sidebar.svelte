<script>
	import SidebarToggle from '$lib/header/SidebarToggle.svelte';
	import { page } from '$app/stores';
	export let dark;

	const moon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>`;

	const sun = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
  </svg>`;

	let mobileUser = false;
</script>

<header class="flex">
	{#if mobileUser}
		<SidebarToggle />
	{/if}

	<nav
		class="fixed top-0 left-0 h-screen w-36 m-0 flex flex-col justify-between shadow-lg dark:bg-slate-900 bg-timberwolf"
	>
		<ul class="mt-8">
			<li class:active={$page.url.pathname === '/'}>
				<a
					sveltekit:prefetch
					href="/"
					class="sidebar-item rounded-full
				hover:rounded-xl transition-all duration-200 ease-linear
				dark:bg-bau-red bg-bright-bau-red"
				> </a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a
					sveltekit:prefetch
					href="/about"
					class="sidebar-item rounded-full
				hover:rounded-xl transition-all duration-200 ease-linear
			dark:bg-bau-yellow bg-bright-bau-yellow"
				> </a>
			</li>
			<li class:active={$page.url.pathname === '/projects'}>
				<a
					sveltekit:prefetch
					href="/projects"
					class="sidebar-item rounded-full
				hover:rounded-xl transition-all duration-200 ease-linear
				dark:bg-bau-blue bg-bright-bau-blue"
				> </a>
			</li>
		</ul>

		<button
			class="sidebar-item rounded-full flex items-center justify-center mb-8
			 dark:text-white bg-slate-700 text-slate-900
			hover:rounded-xl transition-all duration-200 ease-linear"
			on:click|preventDefault={() => {
				dark = !dark;
			}}
		>
			{#if dark}
				{@html moon}
			{:else}
				{@html sun}
			{/if}
		</button>
	</nav>
</header>
