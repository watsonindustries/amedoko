<script lang="ts">
    import DokoImage from "$lib/DokoImage.svelte";
    import type { PageData } from "./$types";
    import {deltaFormatted} from '../utils';

    export let data: PageData;
    let currentDate = new Date();
    console.log(data);

    let {pastVideo, nextVideo} = data;
    let lastStreamDelta = deltaFormatted(currentDate, pastVideo.actualStart || pastVideo.scheduledStart || pastVideo.publishedAt);
</script>

<div class="flex flex-col text-ame-dark-brown my-6">
    <h1 class="text-5xl font-bold text-center my-2">Ame Doko?</h1>
    
    <span class="text-center"
        >Last stream was <a href="https://youtu.be/{pastVideo.videoId}"><p class="font-bold">
            {lastStreamDelta} ago
        </p></a></span
    >

    {#if nextVideo}
    <span class="text-center"
        >Next stream in <a href="https://youtu.be/{nextVideo.videoId}"><p class="font-bold">{deltaFormatted(nextVideo.scheduledStart, currentDate)}</p></a> </span
    >
    {/if}

    <DokoImage />
</div>
