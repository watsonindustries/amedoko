<script lang="ts">
    import type { PageData } from "./$types";

    let src = "nagi-amedoko.jpeg";
    let imageName = "Ame Doko gator by Nabi";

		export let data: PageData;
		console.log(data);
</script>

<h1 class="text-3xl font-bold underline text-center">Ame Doko?</h1>
<p>Last stream was {data.lastStreamDays} days ago</p>
<p>Next stream in {data.nextStreamDays} days</p>
<img src={src} alt={imageName} />