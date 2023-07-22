<script lang='ts'>
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">Help</svelte:fragment>

	<main>
		<slot />
	</main>

	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>