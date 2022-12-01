<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let { project } = data;
    let { title, description, image, button, tags } = project;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<section>
  <figure class="px-10 pt-10 relative">
    <h1 class=" ">{title}</h1>
    <img src={image[0].url} alt="Picture of {title}" />
  </figure>
  {#each tags as tag}
    <div class="badge badge-outline">
      <span>{tag}</span>
    </div>
  {/each}
  <p>{@html description.html}</p>

  {#if button}
  {#each button as { buttonName, url}}
    <div class="mt-5">
      <a href={url} class="btn btn-primary">
        <span class="text-base-content">{buttonName}</span>
      </a>
    </div>
    {/each}
    {/if}
</section>
