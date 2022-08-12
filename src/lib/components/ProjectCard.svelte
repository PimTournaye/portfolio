<script lang="ts">
    let name: string;
    let slug: string;
    let short: string;
    let image: string;
    let tags: string[];
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
        <div class="mt-5 space-x-2 flex justify-start">
            {#each tags as tag}
                <div class="badge badge-outline">
                    <span class="text=[]">●</span><span>{tag}</span>
                </div>
            {/each}
        </div>
    {/if}
</div>