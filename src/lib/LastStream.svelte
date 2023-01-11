<!--
  @component

  Displays the last stream and information about it.
-->
<script lang="ts">
    import type { Video } from "holodex.js";
    import Timer from "./Timer.svelte";

    export let pastVideo: Video;
    export let lastStreamDelta: String;
</script>

<span class="text-center"
    >Ame last seen
    <br />
    <Timer videoId={pastVideo.videoId} streamDelta={lastStreamDelta} /> ago
</span>
