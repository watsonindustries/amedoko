<script lang="ts">
    import "../app.css";

    import { Icon } from "@steeze-ui/svelte-icon";
    import { Github } from "@steeze-ui/simple-icons";
    import { GlobeAlt, EyeOff, QuestionMarkCircle } from "svelte-hero-icons";

    import { page } from "$app/stores";
</script>

<svelte:head>
    <!-- <meta name="description" content={$page.data.description} />
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
    <meta property="og:description" content={$page.data.description} /> -->

  <!-- HTML Meta Tags -->
  <meta name="description" content="Find out where is Ame!">

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://amedoko.watsonindustries.live">
  <meta property="og:type" content="website">
  <meta property="og:description" content="Find out where is Ame!">
  <meta property="og:image" content={$page.data.image}>

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="amedoko.watsonindustries.live">
  <meta property="twitter:url" content="https://amedoko.watsonindustries.live">
  <meta name="twitter:description" content="Find out where is Ame!">
  <meta name="twitter:image" content={$page.data.image}>
        
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

    <div class="flex flex-col mt-6 space-y-2">
        <a
            class="inline-flex items-center justify-center hover:underline"
            href="/about"
        >
            <Icon src={QuestionMarkCircle} solid size="16" />
            <p class="ml-1">About</p>
        </a>

        <a
            class="inline-flex items-center justify-center hover:underline"
            href="https://watsonindustries.live"
        >
            <Icon src={GlobeAlt} solid size="16" />
            <p class="ml-1">Watson Industries</p>
        </a>

        <a
            class="inline-flex items-center justify-center hover:underline"
            href="/privacy"
        >
            <Icon src={EyeOff} solid size="16" />
            <p class="ml-1">Privacy Policy</p>
        </a>

        <a
            class="inline-flex items-center justify-center hover:underline"
            href="https://github.com/watsonindustries/amedoko"
            ><Icon src={Github} solid size="16" class="mr-1" /> Source Code</a
        >
    </div>
    <div class="flex flex-row mx-auto py-5">
        <p class="mx-1">Copyright © Watson Industries Inc.</p>
        <p class="mx-1">Not affiliated with Cover Corp in any way.</p>
    </div>
</footer>
