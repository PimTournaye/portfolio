<script lang="ts">
	import { browser } from '$app/env';
	import { CachePolicy, GQL_Projects } from '$houdini';

	async function query() {
		GQL_Projects.fetch({ policy: CachePolicy.NetworkOnly });
	}

	$: browser && GQL_Projects.fetch();

    export let projects = $GQL_Projects.data?.projects || [];
</script>

{#if $GQL_Projects.isFetching}
	Loading...
{:else}


{#each projects as { name, slug, short, image, tags }}
<div class="card w-96 shadow-xl card-normal">
    <p class="">
        <!-- RECHECK THE SLUG HERE -->
        <a href="/projects/{slug}" class="card-title">
            {name}
        </a>
    </p>
    <figure class="px-10 pt-10">
        <img src={image[0].url} alt="Picture of {name}" />
    </figure>
    <p>{short}</p>
    {#if tags}
        <div class="mt-5 space-x-2 flex justify-start">
            {#each tags as tag}
                <div class="badge badge-outline">
                    <span class="text=[]">●</span><span>{tag}</span>
                </div>
            {/each}
        </div>
    {/if}
</div>
{/each}
    
    {/if}