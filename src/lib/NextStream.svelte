<!--
  @component

  Displays the next live stream and information about it.
	Requires a stream delta in milliseconds.
-->
<script lang="ts">
    import type { Video } from "holodex.js";
    import { getVideoThumbnailURL, getVideoURL, deltaFormatted } from "../utils";

    import Timer from "./Timer.svelte";

    export let nextVideo: Video;
    export let nextStreamDelta: number;

    let { videoId } = nextVideo;
    let isStartingSoon = false;

    let thumbnailURL = getVideoThumbnailURL(videoId);
    let videoURL = getVideoURL(videoId);

    $: if (nextStreamDelta < 60_000) isStartingSoon = true;
</script>

<div
    class="text-ame-light-yellow bg-ame-dark-brown p-5 my-3 rounded-xl max-w-sm w-11/12 shadow-md mx-auto"
>
{#if isStartingSoon}
    <h2 class="text-2xl">Starting soon!</h2>
{:else}
<p>Next stream in</p>
<Timer {videoURL} streamDelta={deltaFormatted(nextStreamDelta)} />
{/if}

    <a href={videoURL} >
        <img
            src={thumbnailURL}
            alt={nextVideo.title}
            class="mt-3 rounded-sm mx-auto focus:scale-105 active:scale-105 transform-gpu transition-transform"
        />
    </a>
</div>
