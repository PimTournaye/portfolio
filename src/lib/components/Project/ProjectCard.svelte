<script>
	export let title;
	export let slug;
	export let short;
	export let year;
	export let images;
	export let tags;
</script>

<a href="/projects/{slug}" class="flex flex-col items-center
 bg-white rounded-lg border shadow-md mb-8
 md:flex-row md:max-w-xl 
 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
	<div class="flex flex-col justify-between p-4 leading-normal">
		<img
		class="w-full object-cover object-center transition-all ease-in duration-200 max-h-60 hover:scale-105 bg-gray-50 md:h-36 lg:h-60"
		src={images[0].url}
		alt="Picture of {title}"
		/>
		<h5 class="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{short}</p>
		{#if tags}
		<div class="mt-4 space-x-2">
			{#each tags as tag}
			<div class="pill bg-gray-400 rounded-full text-xs px-4 py-1 mb-2 inline-block">
				{tag}
			</div>
			{/each}
			<p class="flex flex-col mb-3 font-normal text-gray-700 dark:text-gray-400 float-right">{year}</p>
		</div>
		{/if}
	</div>
</a>
<!-- class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" -->