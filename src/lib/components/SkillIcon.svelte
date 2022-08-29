<script>
  export let level ;
  export let svg = '';
  export let text = '';
  export let name = '';
</script>

<div class="flex group">
  <div class="radial-progress" style="--value:{level}">
    <img src={svg} alt="A programming icon of {name}" />
  </div>
  <p
    class="
    transition-all duration-100 scale-0
    group-hover:scale-100"
  >
    {text}
  </p>
</div>
