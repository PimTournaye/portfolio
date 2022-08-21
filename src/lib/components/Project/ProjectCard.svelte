<script lang="ts">
  export let name: string | null;
  export let slug: string | null;
  export let short: string | null;
  export let year: number | null;
  export let images: string[] | ArrayLike<any>;
  export let tags: string[] | null;
</script>

<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      {#each images as image}
        <img
          class="h-48 w-full object-cover md:h-full md:w-48"
          src={image.url}
          alt="Picture of {name}"
        />
      {/each}
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm font-semibold">{year}</div>
      <a
        href="/projects/{slug}"
        class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{name}</a
      >
      <p class="mt-2 text-slate-500">{short}</p>
    </div>
    {#if tags}
      <div class="mt-5 mb-5 space-x-2 flex-col justify-start">
        {#each tags as tag}
          <div class="badge badge-outline flex flex-wrap">
            <span class="block w-auto">{tag}</span>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>
