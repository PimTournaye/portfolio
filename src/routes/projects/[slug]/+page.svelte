<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let { project } = data;
    let { title, description, image, button, tags } = project;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<section class="flex flex-row">
  <figure class="relative w-auto h-full">
    <img src={image[0].url} alt="Picture of {title}" />
  </figure>
  <div>
    <h1 class="font-bold text-5xl">{title}</h1>
    {#each tags as tag}
      <div class="badge badge-outline flex space-x-2">
        <span>{tag}</span>
      </div>
    {/each}
    <p>{@html description.html}</p>
    {#if button}
    {#each button as { buttonName, url}}
      <div class="mt-5 flex flex-row w-1/2">
        <a href={url}>
          <span class="text-base-content">{buttonName}</span>
        </a>
      </div>
      {/each}
      {/if}
  </div>
</section>
