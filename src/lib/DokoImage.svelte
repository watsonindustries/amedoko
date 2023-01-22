<script lang="ts">
    // Replace these if needed
    import nagiGator from "$lib/assets/nagi-amedoko.jpeg";
    import gatorBox from "$lib/assets/ame-doko-gator-box.jpeg";
    import amewhereGator from "$lib/assets/ame-where-gator.jpeg";
    import missingAme from "$lib/assets/missing-ame.jpeg";

    import { writable } from "svelte/store";

    const imgCollection = [
        { url: nagiGator, alt: "Ame Doko gator by Nabi" },
        { url: gatorBox, alt: "Gator in a box" },
        { url: amewhereGator, alt: "Ame where gator comic" },
        { url: missingAme, alt: "Missing Ame poster by CaptPolybius" },
    ];

    let i = getRandomIntInclusive(0, imgCollection.length - 1);
    $: activeImg = writable(imgCollection[i]);

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }

    function handleClick() {
        ++i;
        if (i > imgCollection.length - 1) {
            i = 0;
        }

        activeImg.set(imgCollection[i]);
    }
</script>

<div
    class="hover:cursor-pointer mx-auto my-3 max-w-lg drop-shadow-lg"
    on:click={handleClick}
    on:keydown={handleClick}
>
    <img
        src={$activeImg.url}
        alt={$activeImg.alt}
        class="object-contain w-3/4 mx-auto rounded-md"
        width="1000"
        height="1000"
    />
</div>
