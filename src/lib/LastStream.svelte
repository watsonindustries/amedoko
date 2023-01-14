<!--
  @component

  Displays the last stream and information about it.
-->
<script lang="ts">
    import type { Video } from "holodex.js";
    import { getVideoURL, deltaFormatted } from "../utils";
    import Timer from "./Timer.svelte";

    export let pastVideo: Video;
    export let lastStreamDelta: number;

    let videoURL = getVideoURL(pastVideo.videoId);
</script>

<div class="text-ame-light-yellow bg-ame-dark-brown p-5 my-3 rounded-md max-w-sm w-11/12 shadow-md mx-auto"
    >Last seen
    <br />
    <Timer {videoURL} streamDelta={deltaFormatted(lastStreamDelta)} /> ago
</div>
