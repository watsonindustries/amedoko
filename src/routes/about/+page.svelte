<script lang="ts">
    import type { PageData } from './$types';

    import { Icon, Home } from "svelte-hero-icons";
    
    export let data: PageData;
</script>

<div class="flex flex-col mx-8 md:mx-36 lg:mx-72 xl:mx-96 my-5 text-ame-dark-brown">
    <h1 class="text-5xl text-center my-2 mt-2">About</h1>
    <p class="my-2 text-xl">
        This is a small fan project for keeping track of Amelia's past, live and upcoming live streams! It fetches live stream information from the fantastic <a href="https://holodex.stoplight.io/docs/holodex" class="underline">Holodex API</a>.
        <br>AmeDoko uses Svelte and SvelteKit under the hood.
        <br><br>
        Big thanks to the following related projects for idea inspiration:
    </p>

    <ul class="my-3 text-xl">
        <li><a href="https://imissfauna.com" class="underline">I Miss Fauna</a></li>
        <li><a href="https://imissina-com.vercel.app" class="underline">I Miss Ina</a></li>
    </ul>
    <br>

    <p class="my-2 text-xl">
        Original author: <a href="https://twitter.com/DaniruKun" class="underline">@DaniruKun</a>
    </p>

    <div class="text-center mx-auto">
        <a href="/" type="button" class="flex flex-row text-ame-light-yellow bg-ame-dark-brown hover:bg-stone-600 focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
            <Icon src="{Home}" solid size="20" class="mr-1" />Go Back
        </a>
    </div>
</div>
