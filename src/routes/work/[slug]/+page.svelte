<script>
	import { onMount } from 'svelte';

	// import { browser } from '$app/env';
  
  /** @type {import('./$types').PageData} */
	export let data;
  let banner, bannerWidth, sectionWidth;
  onMount(() => {
    // Get the width of element with ID banner
    banner = document.getElementById('banner');
    bannerWidth = banner.offsetWidth;
  });
    
  const { short, tags, year, title } = data.project;
  const description = data.project.description.html;
	const image = data.project.image[0].url;
	const buttons = data.project.button;

	// Get the orientation of the image
	// const img = new Image();
	// img.src = image;
	// img.onload = () => {
	// 	const orientation = img.width > img.height ? 'landscape' : 'portrait';
	// 	console.log(orientation);
	// };
</script>

<section bind:clientWidth={sectionWidth} style="--sectionWidth: {sectionWidth}px">
    <img src={image} alt={title}/>
    <div id="title-desc">
      <h1>{title}</h1>
      <p>{short}</p>
    </div>
    
    <div>
      <article>
        {@html description}
      </article>
      
      <div class="tags-btns">
        <div class="flex flex-row space-x-4">
          {#each tags as tag}
					<span>{tag}</span>
          {/each}
        </div>
        <div class="space-x-4">
          <!-- Check if we have buttons -->
          {#if buttons}
          {#each buttons as button}
          <a href={button.url} target="_blank" rel="noopener noreferrer">
            <button class="btn">
              {button.buttonName}
            </button>
          </a>
          {/each}
          {/if}
        </div>
      </div>
    </div>
</section>

<style lang="postcss">
  section{
    @apply flex flex-col;
    @apply w-full;
    @apply h-full;
    @apply overflow-hidden;
  }

  #title-desc {
    
  }

	img {
    @apply max-h-[80%];
    //max-width: var(--sectionWidth);
    width: 100%;
    @apply shadow-lg rounded-tl-lg rounded-bl-lg;
    @apply mb-4
	}

	h1 {
		@apply text-8xl font-bold text-right text-white;
		@apply px-4 pb-4;
    
    /* Not about this yet... */
    /* @apply w-3/4; */
    /* @apply bg-black rounded-tl-xl rounded-bl-xl; */
    /* Move to the right */
    /* transform: translateX(calc(var(--sectionWidth) - 100%)); */
	}

	p {
		@apply text-2xl text-right text-white;
		@apply px-4 pt-2;
	}

	article {
		@apply text-base text-white;
		@apply px-4 pt-2;
	}

	span {
		@apply text-base text-white;
		@apply px-6 py-4 rounded-lg;
		@apply bg-bright-bau-blue;
	}

  .tags-btns {
    @apply flex flex-row justify-between;
    @apply bg-bright-background bg-opacity-40;
    @apply p-2 mt-8 rounded-lg;
  }

  .btn {
    @apply px-6 py-4; 
    @apply text-white font-bold;
    @apply hover:bg-timberwolf hover:bg-opacity-100 hover:text-bright-bau-red;
    @apply transition ease-in-out duration-300; 
    @apply bg-bright-bau-yellow rounded-lg;
    
  }
</style>
