<svelte:options tag="my-app" />

<script>
    import DokoImage from "./DokoImage.svelte";
    import LastStream from "./LastStream.svelte";
    import NextStream from "./NextStream.svelte";
</script>

<main>
    <h1>Ame Doko?</h1>
    <DokoImage />
		<LastStream />
    <NextStream />
</main>

<style>
    /* It can be empty :) */
</style>
