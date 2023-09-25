<script>
  export let title, short, image, slug, year, tags;
</script>

<a 
href="{`/work/${slug}`}"
class="card" 
style="background-image: url({image[0].url});">
  <h1 class="justify-end"><span>{title}</span></h1>

  <div class="hidden hover:flex hover:flex-col">
    <p>{short}</p>
    <p>{year}</p>
    <p>{tags}</p>
  </div>
</a>


<style lang="postcss">
  .card {
    @apply flex flex-col justify-end;
    @apply border-2 border-black rounded-xl;
    @apply bg-cover bg-center;
    @apply p-4;
    @apply h-64 shadow-lg;

    @apply font-sans font-medium text-2xl;
  }

  .card > h1 span {
    @apply text-white bg-black px-2 py-1;
  }
  /* 1x1 */
  .single-card {

  }

  /* 1x2 */
  .wide-card {

  }
  /* 2x1 */
  .tall-card {

  }
  /* 2x2 */
  .double-card {

  }
</style>