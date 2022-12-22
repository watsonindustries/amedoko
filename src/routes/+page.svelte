<script lang="ts">
    import DokoImage from "$lib/DokoImage.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
    console.log(data);
</script>

<div class="flex flex-col text-ame-dark-brown my-6">
    <h1 class="text-5xl font-bold text-center">Ame Doko?</h1>
    <span class="text-center"
        >Last stream was <p class="font-bold">
            {data.lastStreamDays} ago
        </p></span
    >
    <span class="text-center"
        >Next stream in <p class="font-bold">{data.nextStreamDays}</p></span
    >
    <DokoImage />
</div>
