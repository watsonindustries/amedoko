<!--
  @component

  Displays the last stream and information about it.
-->
<script lang="ts">
    import type { Video } from "holodex.js";
    import { getVideoURL } from "../utils";
    import Timer from "./Timer.svelte";

    export let pastVideo: Video;
    export let lastStreamDelta: String;

    let videoURL = getVideoURL(pastVideo.videoId);
</script>

<span class="text-center"
    >Ame last seen
    <br />
    <Timer {videoURL} streamDelta={lastStreamDelta} /> ago
</span>
