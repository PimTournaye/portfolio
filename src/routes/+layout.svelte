<script >
	import "../app.css";

	import Sidebar from '$lib/header/Sidebar.svelte';
	import Footer from "../lib/footer/Footer.svelte";
</script>

<div class="flex flex-col ">
  <Sidebar />
  <main
    class=" flex flex-col
	jusitfy-center items-center
    h-full w-auto
    overflow-hidden;
	mt-12 ml-60 mr-60
  pl-36
	"
  >
    <slot />
  </main>

  <Footer />
</div>