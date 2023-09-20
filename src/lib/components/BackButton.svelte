<script>
  import { ChevronLeft } from 'lucide-svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
</script>

<button>
  <ChevronLeft color="#ffffff" size={64} on:click={() => goto($$props.from || '/')}/>
</button>