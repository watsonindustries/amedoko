<svelte:options tag="next-stream" />

<script lang="ts">
    import { diffInDaysFloored } from "./Utils";
    let nextLive = { start_scheduled: "soon..." };
    let diffInDays;

    async function fetchNextLiveData() {
        const headers = new Headers();
        headers.set("X-APIKEY", "37416592-50cc-437c-83a5-2ab3d08d96d0");

        const options = { method: "GET", headers: headers };
        let response = await fetch(
            "https://holodex.net/api/v2/videos?channel_id=UCyl1z3jo3XHR1riLFKG5UAg&include=live_info&limit=1&type=stream&status=upcoming",
            options
        );

        let json = await response.json();
        nextLive = json[0];
        let nextLiveDate = new Date(nextLive.start_scheduled);
        let currentDate = new Date();

        diffInDays = diffInDaysFloored(nextLiveDate, currentDate);
    }

    fetchNextLiveData();
</script>

<p>Next stream in {diffInDays} days</p>
