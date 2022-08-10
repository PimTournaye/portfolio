<script>
    import { page } from '$app/stores';

    export let text;
    export let route;
    export let color;
</script>


<li class:active={$page.url.pathname === route}>
    <a sveltekit:prefetch href={route}
        class="sidebar-item rounded-full
    hover:rounded-xl transition-all duration-200 ease-linear
    dark:bg-bau-{color} bg-bright-bau-{color}"
    >
    <span class="sidebar-tooltip">{text}</span>
</a>
</li>