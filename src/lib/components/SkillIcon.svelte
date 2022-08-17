<script lang="ts">
	export let level: number = 0;
	export let svg: string = '';
	export let text: string = '';
	export let name: string = '';
</script>

<div class="flex group">
	<div class="radial-progress" style="--value:{level}">
		<img src={svg} alt="A programming icon of {name}" />
	</div>
	<p class="
    transition-all duration-100 scale-0
    group-hover:scale-100">{text}</p>
</div>
