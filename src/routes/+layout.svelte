<script lang="ts">
    import "../app.css";

    import { page } from '$app/stores';
</script>

<svelte:head>
    <meta name="description" content={$page.data.description} />
    <meta name="theme-color" content={$page.data.themeColor} />
    <meta name="twitter:card" content={$page.data.twitter.card} />
    <meta name="twitter:creator" content="@danirukun" />
    <meta name="twitter:title" content={$page.data.twitter.title} />
    <meta name="twitter:description" content={$page.data.twitter.description} />
    <meta name="twitter:image" content={$page.data.twitter.image} />

    <meta property="og:title" content={$page.data.title} />
    <meta property="og:type" content={$page.data.type} />
    <meta property="og:url" content={$page.data.url} />
    <meta property="og:image" content={$page.data.image} />
    <meta property="og:description" content={$page.data.description} />
</svelte:head>

<slot />

<footer class="flex flex-col mt-auto text-ame-dark-brown">
    <div class="flex">
        <a
            class="text-center mx-auto underline text-2xl"
            href="https://www.youtube.com/channel/UCyl1z3jo3XHR1riLFKG5UAg"
            >Amelia Watson's Channel</a
        >
    </div>

    <div class="flex flex-col mt-6">
        <a
            class="text-center mx-auto underline"
            href="https://github.com/watsonindustries/amedoko">Source Code</a
        >
        <a class="text-center mx-auto underline" href="/about"> About </a>
        <a
            class="text-center mx-auto underline"
            href="https://watsonindustries.live"
        >
            Watson Industries
        </a>
        <a class="text-center mx-auto underline" href="/privacy">
            Privacy Policy
        </a>
    </div>
    <div class="flex flex-row mx-auto py-5">
        <p class="mx-1">Copyright © Watson Industries Inc.</p>
        <p class="mx-1">Not affiliated with Cover Corp in any way.</p>
    </div>
</footer>
