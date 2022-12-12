<svelte:options tag="last-stream" />

<script lang="ts">
		import { diffInDaysFloored } from "./Utils";
    let lastLive = { start_actual: "some time ago" };
    let diffInDays;

    async function fetchLastLiveData() {
        const headers = new Headers();
        headers.set("X-APIKEY", "37416592-50cc-437c-83a5-2ab3d08d96d0");

        const options = { method: "GET", headers: headers };
        let response = await fetch(
            "https://holodex.net/api/v2/videos?channel_id=UCyl1z3jo3XHR1riLFKG5UAg&include=live_info&limit=1&type=stream&status=past",
            options
        );

        let json = await response.json();
        lastLive = json[0];
        let lastLiveDate = new Date(lastLive.start_actual);
        let currentDate = new Date();

        diffInDays = diffInDaysFloored(currentDate, lastLiveDate);
    }

    fetchLastLiveData();
</script>

<p>Last stream was: {diffInDays} days ago</p>
