<script lang="ts">
    import { page } from '$app/stores';

    export let text: string;
    export let route: string;
    export let color: string;

    const colors = {
        dark: "dark:bg-bau-" + color,
        light: "bg-bright-bau-" + color
    }
</script>


<li class:active={$page.url.pathname === route}>
    <a sveltekit:prefetch href={route}
        class="sidebar-item rounded-full
    hover:rounded-xl transition-all duration-200 ease-linear
    {$$props.class}
    ">
    <span class="sidebar-tooltip">{text}</span>
    </a>
</li>