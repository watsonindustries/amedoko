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
        {
            url: "https://findthatmeme.us-southeast-1.linodeobjects.com/7d36103d-777e-4d8d-8c78-7474a8b0722a.png",
            alt: "Ame Doko Kiara Gosling",
        },
        {
            url: "https://findthatmeme.us-southeast-1.linodeobjects.com/104873cb-49f4-41e5-b6d4-6b9f5e4c7b88.png",
            alt: "Ame Dojo",
        },
        {
            url: "https://pbs.twimg.com/media/E47eC0BX0AUCHs1.jpg",
            alt: "Ame Doko sleeper",
        },
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
