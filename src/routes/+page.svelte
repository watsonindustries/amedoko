<script lang="ts">
    import DokoImage from "$lib/DokoImage.svelte";
    import type { PageData } from "./$types";
    import {deltaFormatted} from '../utils';

    import {Icon, Play, MusicNote} from 'svelte-hero-icons';
    import { writable } from "svelte/store";

    export let data: PageData;
    let currentDate = writable(new Date());

    setInterval(() => {
        currentDate.update(() => new Date());
    }, 1000)

    let {pastVideo, nextVideo, liveVideo} = data;

    $: lastStreamDelta = deltaFormatted($currentDate, pastVideo.actualStart || pastVideo.scheduledStart || pastVideo.publishedAt);
    $: nextStreamDelta = deltaFormatted(nextVideo.scheduledStart, $currentDate)
</script>

<div class="flex flex-col text-ame-dark-brown text-center my-6">
    <h1 class="text-5xl font-bold text-center my-2">Ame Doko?</h1>
    
    {#if !liveVideo}
    <span class="text-center"
        >Ame last seen<a href="https://youtu.be/{pastVideo.videoId}"><p class="font-bold">
            {lastStreamDelta} ago
        </p></a>
    </span>
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

    {#if nextVideo && !liveVideo}
    <span class="text-center"
        >Next stream in <a href="https://youtu.be/{nextVideo.videoId}"><p class="font-bold">{nextStreamDelta}</p></a> </span
    >

    {/if}

    <DokoImage />

    <span class="text-center mx-auto mt-4">
        <a href="https://www.youtube.com/watch?v=9p89bCMl-iM" class="flex flex-row font-bold text-lg">
            <Icon src="{MusicNote}" solid size="20" class="mr-1" />
            Our Anthem
            <Icon src="{MusicNote}" solid size="20" class="ml-1" />
        </a>

    </span>
</div>
