<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

  console.log(data);


  const random = () => Math.random();
  const getSize = () => {
    // 40% change of getting the class col-span-2
    // if they got the class 15 % chance of getting col-row-2
    // else a 40% chance of getting col-row-2
    if (random() < 0.3) {
      // if (random() < 0.15) {
      //   return 'col-span-2 row-span-2';
      // } else {
      //   return 'col-span-2';
      // }
    return 'col-span-2';
    } else if (random() < 0.40) {
      return 'row-span-2';
    } else {
      return '';
    }
  }
</script>

<section class="w-full">
  {#each data.projects as { slug, title, short, image, year, tags}}
    <ProjectCard
      title={title}
      short={short}
      image={image}
      slug={slug}
      year={year}
      tags={tags}
    />
  {/each}
	<!-- Generate 30 divs for testing -->
		<!-- {#each Array.from({ length: 30 }) as _, i}
			<div class="h-64 bg-gray-200 {getSize()}" />
		{/each} -->
	
</section>

<style lang="postcss">
	section {
		@apply lg:grid lg:grid-cols-3 sm:block md:grid md:grid-cols-2 gap-4;
		/* @apply h-full w-full; */
	}
</style>
