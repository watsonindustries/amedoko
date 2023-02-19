<script lang="ts">
    import DokoImage from "$lib/DokoImage.svelte";
    import type { PageData } from "./$types";
    import { calculateDateDeltaMillis } from "../utils";

    import { Icon, MusicNote } from "svelte-hero-icons";
    import { writable } from "svelte/store";
    import NextStream from "$lib/NextStream.svelte";
    import LiveStream from "$lib/LiveStream.svelte";
    import LastStream from "$lib/LastStream.svelte";

    export let data: PageData;
    let currentDate = writable(new Date());

    let headline = "Ame Doko?";

    setInterval(() => {
        currentDate.set(new Date());
    }, 1000);

    let { pastVideo, nextVideo, liveVideo } = data;

    let nextStreamDelta;

    let lastStreamStart =
        pastVideo.actualStart ||
        pastVideo.scheduledStart ||
        pastVideo.publishedAt;

    $: lastStreamDelta = calculateDateDeltaMillis(
        $currentDate,
        lastStreamStart
    );

    $: if (nextVideo) {
        nextStreamDelta = calculateDateDeltaMillis(
            nextVideo.scheduledStart,
            $currentDate
        );
    }

    if (liveVideo) headline = "Ame Koko!";
</script>

<svelte:head>
    <title>{data.title}</title>

    <meta property="og:title" content={data.title} />
    <meta name="twitter:title" content={data.title} />
</svelte:head>

<div class="flex flex-col text-ame-dark-brown text-center my-6">
    <h1 class="text-5xl font-bold text-center my-3">{headline}</h1>

    {#if !liveVideo}
        <LastStream {pastVideo} {lastStreamDelta} />
    {/if}

    {#if liveVideo}
        <LiveStream {liveVideo} />
    {/if}

    {#if nextVideo && !liveVideo}
        <NextStream {nextVideo} {nextStreamDelta} />
    {/if}

    <DokoImage />

    <span class="text-center mx-auto mt-4">
        <a
            href="https://www.youtube.com/watch?v=9p89bCMl-iM"
            class="flex flex-row font-bold text-lg"
        >
            <Icon src={MusicNote} solid size="20" class="mr-1 animate-bounce" />
            Our Anthem
            <Icon src={MusicNote} solid size="20" class="ml-1 animate-bounce" />
        </a>
    </span>
</div>
