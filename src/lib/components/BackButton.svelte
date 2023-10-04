<script>
  import { ChevronLeft } from 'lucide-svelte';
</script>

<a href="/">
  <ChevronLeft color="#ffffff" size={64}/>
</a>

<style lang="postcss">
  a {
    @apply transition duration-300 ease-in-out;
    @apply hover:scale-125;
    /* Animation of arrow bouncing to the left twice */
  }
  @keyframes bounceLeft {
      0% {
        transform: translateX(0px);
      }
      10% {
        transform: translateX(10px);
      }
      20% {
        transform: translateX(-10px);
      }
      30% {
        transform: translateX(10px);
      }
      40% {
        transform: translateX(0px);
      }
      50% {
        transform: translateX(10px);
      }
      60% {
        transform: translateX(-10px);
      }
      70% {
        transform: translateX(10px);
      }
      80% {
        transform: translateX(0px);
      }
    }
</style>