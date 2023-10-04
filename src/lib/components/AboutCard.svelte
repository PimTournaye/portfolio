<script>
	export let icon = '';
	export let text = '';
	export let name = '';
  export let category = '';
  
</script>

<article>
  <img src="{icon.url}" alt="icon of {name}">
  <div>
      <h5>{name}</h5>
      <h6>{category}</h6>
      <p>{text}</p>
  </div>
</article>

<style lang="postcss">
  article {
    @apply flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl;
    @apply 2xl:max-w-3xl;
    @apply lg:max-w-2xl;
    @apply bg-bright-background hover:bg-timberwolf bg-opacity-80 hover:bg-opacity-100;
    @apply transition duration-300 ease-in-out;
  }

  img {
    /* @apply object-cover; */
    @apply lg:w-48 md:w-32 sm:w-24; 
    @apply lg:h-48 md:h-auto sm:h-24;
    @apply lg:p-4 md:p-0; 
  }

  div {
    @apply flex flex-col justify-between p-4 leading-normal;
  }

  h5 {
    @apply text-xl font-bold text-gray-900 font-mono;
    /*  Responsive values */
    @apply md:text-lg lg:text-xl;
  }

  h6 {
    @apply mb-2 text-base font-light text-gray-900 font-sans;
  }

  p {
    @apply mb-2 text-base sm:text-sm text-gray-700 font-mono font-medium;
  }
</style>