<!--
  @component

  Displays the next live stream and information about it.
	Requires a pre-formatted stream delta in the form `X days Y hours` etc.
-->
<script lang="ts">
    import type { Video } from "holodex.js";
    import { getVideoThumbnailURL, getVideoURL } from "../utils";

    import Timer from "./Timer.svelte";

    export let nextVideo: Video;
    export let nextStreamDelta: String;

    let { videoId } = nextVideo;

    let thumbnailURL = getVideoThumbnailURL(videoId);
    let videoURL = getVideoURL(videoId);
</script>

<div
    class="text-ame-light-yellow bg-ame-dark-brown p-5 my-3 rounded-md max-w-sm w-11/12 shadow-md mx-auto"
>
    Next stream in
    <br />
    <Timer {videoURL} streamDelta={nextStreamDelta} />
    <a href={videoURL} >
        <img
            src={thumbnailURL}
            alt={nextVideo.title}
            class="mt-3 rounded-sm mx-auto focus:scale-105 active:scale-105 transform-gpu transition-transform"
        />
    </a>
</div>
