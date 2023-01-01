<script lang="ts">
    import DokoImage from "$lib/DokoImage.svelte";
    import type { PageData } from "./$types";
    import {deltaFormatted} from '../utils';

    import {Icon, Play} from 'svelte-hero-icons';

    export let data: PageData;
    let currentDate = new Date();
    console.log(data);

    let {pastVideo, nextVideo, liveVideo} = data;
    let lastStreamDelta = deltaFormatted(currentDate, pastVideo.actualStart || pastVideo.scheduledStart || pastVideo.publishedAt);
</script>

<div class="flex flex-col text-ame-dark-brown text-center my-6">
    <h1 class="text-5xl font-bold text-center my-2">Ame Doko?</h1>
    
    {#if !liveVideo}
    <span class="text-center"
        >Last stream was <a href="https://youtu.be/{pastVideo.videoId}"><p class="font-bold">
            {lastStreamDelta} ago
        </p></a></span>
    {/if}

    {#if liveVideo}
    <div class="mx-auto my-3">
        <h2 class="text-3xl">Live NOW 🎥</h2>
        <span class="text-center"> 
            <a href="https://youtu.be/{liveVideo.videoId}" type="button" class="flex flex-row text-ame-light-yellow bg-ame-dark-brown hover:bg-stone-600 focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 my-3 focus:outline-none">
                <Icon src="{Play}" solid size="20" class="mr-1" />Watch on YouTube
            </a>
        </span>    
    </div>
    {/if}

    {#if nextVideo}
    <span class="text-center"
        >Next stream in <a href="https://youtu.be/{nextVideo.videoId}"><p class="font-bold">{deltaFormatted(nextVideo.scheduledStart, currentDate)}</p></a> </span
    >
    {/if}

    <DokoImage />
</div>
