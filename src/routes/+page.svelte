<script lang="ts">
    import DokoImage from "$lib/DokoImage.svelte";
    import type { PageData } from "./$types";
    import { calculateDateDeltaMillis } from "../utils";

    import { Icon, Play } from "svelte-hero-icons";
    import { writable } from "svelte/store";
    import NextStream from "$lib/NextStream.svelte";
    import LiveStream from "$lib/LiveStream.svelte";
    import LastStream from "$lib/LastStream.svelte";

    export let data: PageData;
    let currentDate = writable(new Date());

    let headline = "Ame Doko?";
    let chikuTakuURL = "https://watsonamelia.itch.io/chikutaku";

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
            href={chikuTakuURL}
            type="button"
            class="flex flex-row text-ame-light-yellow bg-ame-dark-brown hover:bg-amber-900 hover:scale-105 transition-transform transform-gpu focus:ring-4 focus:ring-stone-300 font-medium rounded-full text-sm px-5 py-2.5 my-3 shadow-md focus:outline-none"
        >
            <Icon src={Play} solid size="20" class="mr-1" />Play Chiku Taku!
        </a>
    </span>
</div>
