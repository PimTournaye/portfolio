<script lang="ts">
  export let text: string;
  export let route: string;
</script>

<li>
  <a
    sveltekit:prefetch
    href={route}
    class="sidebar-item rounded-full
    hover:rounded-xl transition-all duration-200 ease-linear
    group
    {$$props.class}
    "
  >
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </a>
</li>
