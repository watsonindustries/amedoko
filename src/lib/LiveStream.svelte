<!--
  @component

  Displays the current live stream and information about it.
-->
<script lang="ts">
    import type { Video } from "holodex.js";

    import { Icon, Play } from "svelte-hero-icons";

    export let liveVideo: Video;
</script>

<div class="mx-auto my-3">
    <h2 class="text-3xl">Live NOW 🎥</h2>
    <span class="text-center">
        <a
            href="https://youtu.be/{liveVideo.videoId}"
            type="button"
            class="flex flex-row text-ame-light-yellow bg-ame-dark-brown hover:bg-stone-600 focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 my-3 focus:outline-none"
        >
            <Icon src={Play} solid size="20" class="mr-1" />Watch on YouTube
        </a>
    </span>
</div>
