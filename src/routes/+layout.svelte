<script>
    import "../app.css";
    import { MetaTags } from "svelte-meta-tags";

    import amedokoLogo from "$lib/assets/amedoko-landscape-twitter.png";

    const url = "https://amedoko.watsonindustries.live";
    const description = "Find out where is Ame!";
</script>

<MetaTags
    title="Ame Doko?"
    description="Find out when you can see Ame!"
    canonical={url}
    twitter={{
        handle: "@danirukun",
        site: "@amedoko",
        cardType: "summary",
        title: "Ame Doko?",
        description: description,
        image: amedokoLogo,
        imageAlt: "AmeDoko Logo",
    }}
    openGraph={{
        type: "website",
        url: "https://amedoko.watsonindustries.live",
        title: "Ame Doko?",
        description: description,
        images: [
            {
                url: amedokoLogo,
                width: 768,
                height: 384,
                alt: "AmeDoko Logo",
            },
        ],
    }}
/>

<slot />

<footer class="flex flex-col mt-auto text-ame-dark-brown">
    <div class="flex">
        <a
            class="text-center mx-auto underline text-2xl"
            href="https://www.youtube.com/channel/UCyl1z3jo3XHR1riLFKG5UAg"
            >Amelia Watson's channel</a
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
