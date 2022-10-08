<script>
  export let text;
  export let route;
</script>

<li>
  <a
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
