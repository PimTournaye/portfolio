<script>
    export let name;
    export let slug;
    export let short;
    export let image;
    export let tags;
</script>

		<div class="card w-96 bg-base-100 shadow-xl card-normal">
			<p class="">
				<!-- RECHECK THE SLUG HERE -->
				<a href="/projects/{slug}" class="card-title">
					{name}
				</a>
			</p>
			<figure class="px-10 pt-10">
				<img src={image[0].url} alt="Picture of {name}" />
			</figure>
			<p>{short}</p>
			{#if tags}
				<div class="mt-5 space-x-2 flex justify-start">
					{#each tags as tag}
						<div class="badge badge-outline">
							<span>●</span><span>{tag}</span>
						</div>
					{/each}
				</div>
			{/if}
		</div>