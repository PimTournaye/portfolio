<script lang="ts">
    import { page } from '$app/stores';

    export let text: string;
    export let route: string;
</script>


<li class:active={$page.url.pathname === route}>
    <a sveltekit:prefetch href={route}
        class="sidebar-item rounded-full
    hover:rounded-xl transition-all duration-200 ease-linear
    group
    {$$props.class}
    ">
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
    </a>
</li>