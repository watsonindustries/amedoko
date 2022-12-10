<svelte:options tag="my-example" />

<script>
	let src = "/public/images/nagi-amedoko.jpeg";
	let imageName = "Ame Doko gator by Nabi";
</script>

<style>
</style>

<main>
	<img src={src} alt={imageName}/>
</main>
