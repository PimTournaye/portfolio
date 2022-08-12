<script lang="ts">
    export let name: string | null;
    export let slug: string | null;
    export let short: string | null;
    export let image: string | null;
    export let tags: string[] | null;
</script>

<div class="card w-96 shadow-xl card-normal">
    <p class="">
        <!-- RECHECK THE SLUG HERE -->
        <a href="/projects/{slug}" class="card-title">
            {name}
        </a>
    </p>
    <figure class="px-10 pt-10">
        <img src={image} alt="Picture of {name}" />
    </figure>
    <p>{short}</p>
    {#if tags}
        <div class="mt-5 mb-5 space-x-2 flex justify-start">
            {#each tags as tag}
                <div class="badge badge-outline flex flex-wrap">
                    <span class="mr-2">●</span><span>{tag}</span>
                </div>
            {/each}
        </div>
    {/if}
</div>