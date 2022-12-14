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
    <p class="mb-8 text-lg">
      Another aspect of my work is playing with communication, in the broadest possible sense of that word. I believe that 
      most things are a mode of communication, whether it's body language, monologues or conversation, improvisation, abscence,
      visuals, patterns, sounds and tones, movements, staring out of a window. I could go on and on, but what interests me about these modes of
      communication is that these forms of expression and impression ahev such a wide range of meanings and interpretations. And those change
      when you start combining them. I like to experiment and play with communication to not only understand what I'm communicating myself, but 
      also what others are communicating to me, or themselves. I feel that communicating to ourselves often gets left out of the picture, 
      and that it might be a important puzzle piece in our damaged social fabric.
    </p>
  
    <h2 class="text-3xl font-bold">Skills</h2>
    <p class="mb-4 text-xl italic">Here's what I can do and what I'm learning in the fields I'm interested in.</p>
    
    <div class="border-b-2 mb-4">
      <h3 class="mb-8 text-xl font-bold">Legend</h3>
      <ul class="flex flex-row justify-around space-x-4">
        <li class="flex flex-col w-1/3 flex-grow mb-8 justify-center max-w-lg p-4">
          <div class="radial-progress bg-timberwolf text-bright-bau-red shadow-lg
          mx-auto mb-6" style="--value:100; --thickness: 4px">Yeah!</div>
          <p class="mb-1 text-lg font-bold">Expert</p>
          <p>I feel confident in this field. I've used this numerous times and consider it to be very much in my comfort zone</p>
        </li>
        <li class="flex flex-col w-1/3 flex-grow mb-8 justify-center max-w-lg p-4">
          <div class="radial-progress bg-timberwolf text-bright-bau-yellow shadow-lg
          mx-auto mb-6" style="--value:80; --thickness: 4px">Cool.</div>
          <p class="mb-1 text-lg font-bold">Proficient</p>
          <p>I've used this quite a bit, but can still dive a lot deeper to use this to it's fullest extent.</p>
        </li>
        <li class="flex flex-col w-1/3 flex-grow mb-8 justify-center max-w-lg p-4">
          <div class="radial-progress bg-timberwolf text-bright-bau-blue shadow-lg
          mx-auto mb-6" style="--value:50; --thickness: 4px">Hmm...</div>
          <p class="mb-1 text-lg font-bold">Beginner</p>
          <p>Have used this from time to time or am actively learning how to use this. Have already or am starting to scratch the surface of what is possible with this</p>
        </li>
      </ul>
    </div>

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