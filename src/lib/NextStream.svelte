<!--
  @component

  Displays the next live stream and information about it.
	Requires a pre-formatted stream delta in the form `X days Y hours` etc.
-->
<script lang="ts">
    import type { Video } from "holodex.js";

    import Timer from "./Timer.svelte";

    export let nextVideo: Video;
    export let nextStreamDelta: String;
</script>

<span class="text-center"
    >Next stream in
    <br />
    <Timer videoId={nextVideo.videoId} streamDelta={nextStreamDelta} />
</span>
