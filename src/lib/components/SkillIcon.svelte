<script>
	export let level;
	export let icon = '';
	export let text = '';
	export let name = '';

	// TODO: add dark mode colors
	let color = () => {
		if (level > 70) {
			return 'text-bright-bau-red';
		} else if (level > 50) {
			return 'text-bright-bau-yellow';
		} else {
			return 'text-bright-bau-blue';
	};
}
</script>

<div class="flex flex-col w-1/4 flex-grow mx-4 mb-8 justify-center max-w-lg
 bg-slate-100 px-8 py-8">
	<div
		class="radial-progress bg-gray-300 {color()} shadow-lg
          mx-auto mb-6"
		style="--value:{level}; --thickness: 4px"
	>
		<img src={icon.url} alt="icon of {name}" class="h-10 w-10" />
	</div>
	<div class="flex flex-col flex-grow space-y-2 mx-auto">
    <h1 class="font-bold text-lg">{name}</h1>
    <p
      class="
          text-sm
          text-gray-500
          font-light
          leading-relaxed
          text-justify
          max-w-xs"
    >
      {text}
    </p>
  </div>
</div>
