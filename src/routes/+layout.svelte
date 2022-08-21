<script>
  import Sidebar from '$lib/header/Sidebar.svelte';
  import '../app.css';

  let dark = false;
</script>

<div class="flex flex-col ">
  <Sidebar />
  <main
    class=" flex flex-col
	jusitfy-center items-center
    h-full w-auto
    overflow-hidden;
	mt-12 ml-60 mr-60
	"
  >
  <!-- Temp Alert element while Houdini is being fixed -->
  <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong class="font-bold">Development temporarly halted</strong>
    <span class="block sm:inline">Due to breaking changes within the SvelteKit API, I'm waiting for the GraphQL Houdini client to update.
      <br><br>
      Waiting for https://github.com/HoudiniGraphql/houdini/pull/449
    </span>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
      <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
    </span>
  </div>
    <slot />
  </main>
</div>
