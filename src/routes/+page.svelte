<script lang="ts">
    import type { PageData } from "./$types";

    let src = "nagi-amedoko.jpeg";
    let imageName = "Ame Doko gator by Nabi";

    export let data: PageData;
    console.log(data);
</script>

<div class="flex flex-col text-ame-dark-brown my-6">
    <h1 class="text-5xl font-bold text-center">Ame Doko?</h1>
    <span class="text-center">Last stream was <p class="font-bold">{data.lastStreamDays} ago</p></span>
    <span class="text-center">Next stream in <p class="font-bold">{data.nextStreamDays}</p></span>
    <a
        href="https://twitter.com/Nagi_Nyaaa/status/1598539547184230400"
        class="mx-auto my-3 max-w-lg drop-shadow-lg"
    >
        <img {src} alt={imageName} />
    </a>
</div>
