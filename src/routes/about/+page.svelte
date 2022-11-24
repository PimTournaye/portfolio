<script>
	import SkillIcon from '$lib/components/SkillIcon.svelte';

	export let data;

	let { web, coding, aiMlIot, creative, design, other } = data;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="flex flex-col">
  <section class="flex flex-col">
    <h1 class="font-bold text-7xl flex mb-4">About me, Pim</h1>
    <p class="mb-8 text-lg">
      I'm a creative coder, improviser, musician and designer based in Brussels. Recentely graduated
      with distinction from Erasmushogeschool Brussel in Multimedia & Creative Technologies. I'm very
      passionate about telling stories, sharing and making experiences and interactions that inspire
      others. The intersection between technology, perspective and spirit is what drives me forward.
    </p>
  
    <h2 class="text-3xl font-bold">Skills</h2>
    <p class="mb-8 text-xl">Here's what I can do and what I'm learning in the fields I'm interested in.</p>

    {#each [coding, creative, web, design, aiMlIot, other] as skill}
      {#if skill.length > 0}
        <h3 class="mb-4 text-lg font-bold">{skill[0].category}</h3>
        <div class="flex flex-row flex-wrap flex-grow justify-around sm:flex-row pt-8 border-b-2 mb-8">
          {#each skill as { name, level, icon, text }}
          <SkillIcon {name} {level} {icon} {text} />
        {/each}
        </div>
      {/if}
    {/each}
  </section>
</div>