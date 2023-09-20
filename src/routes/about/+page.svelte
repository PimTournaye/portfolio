<script>
	import BackButton from '$lib/components/BackButton.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<section>
    <div class="flex flex-row">

        <div class="flex flex-col">
            <h1>Hi, I'm Pim</h1>
        </div>

        <img class="w-96 h-96 rounded-tl-3xl rounded-tr-3xl rounded-bl-full rounded-br-3xl" src="profile-pic.png" alt="A portrait of Pim" />
    </div>
</section>