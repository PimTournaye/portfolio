<script>
	import BackButton from '$lib/components/BackButton.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section class="flex flex-col">
	<section class="flex flex-row space-x-8">
		<div class="flex flex-col space-y-4">
			<h1 class="about-title">Hi, I'm Pim</h1>
			<p class="about-desc">
				Creative coder exploring the intersection of technology and art. Recently completed a
				professional bachelor's degree with distinction in Multimedia & Creative Technologies.
				Currently expanding this education part-time in the arts at NYU's IMA Low Res program.
				Passionate about innovative projects combining design and technology.
				Specialized in creative coding, interaction design, and conceptual development.
			</p>
		</div>

		<img
			src="profile-pic.png"
			alt="A portrait of Pim"
      class="about-img"
		/>
	</section>

  <section class="mt-8">
    <h2>Coding.</h2>
    <div class="skill-section">
      <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
        {#each Array.from({ length: 8 }) as _, i}
          <div class="snap-start shrink-0 card py-20 w-40 md:w-80 text-center">{i + 1}</div>
        {/each}
      </div>
    </div>

    <h2>Art & Design.</h2>
    <div class="skill-section">
      <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
        {#each Array.from({ length: 8 }) as _, i}
          <div class="snap-start shrink-0 card py-20 w-40 md:w-80 text-center">{i + 1}</div>
        {/each}
      </div>
    </div>

    <h2>Soft.</h2>
    <div class="skill-section">
      <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
        {#each Array.from({ length: 8 }) as _, i}
          <div class="snap-start shrink-0 card py-20 w-40 md:w-80 text-center">{i + 1}</div>
        {/each}
      </div>
    </div>
  </section>
</section>

<style lang="postcss">
  /* Top part of the page */
  .about-title {
    @apply text-2xl md:text-4xl lg:text-6xl font-medium font-mono;
    @apply text-white text-right;
  }

  .about-desc {
    @apply text-base md:text-lg lg:text-xl font-light font-mono;
    @apply text-white text-right;
  }

  .about-img {
    @apply lg:w-96 lg:h-96;
    @apply rounded-lg rounded-bl-[120px];
  }
  /* Skills and interests section */
  h2 {
    @apply text-xl md:text-2xl lg:text-3xl font-medium font-mono;
    @apply text-white text-left;
  }

  .skill-section {
    @apply flex flex-row flex-wrap;
    @apply space-x-4 space-y-4;
  }
</style>
