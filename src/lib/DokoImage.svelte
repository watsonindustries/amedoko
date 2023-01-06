<script lang="ts">
    import nagiGator from "$lib/assets/nagi-amedoko.jpeg";
    
    export let src = nagiGator;
    export let url = "https://twitter.com/Nagi_Nyaaa/status/1598539547184230400";
    export let imageName = "Ame Doko gator by Nabi";
</script>

<a href={url} class="mx-auto my-3 max-w-lg drop-shadow-lg">
    <img
        {src}
        alt={imageName}
        class="object-contain"
        width="1000"
        height="1000"
    />
</a>
