<svelte:options tag="last-stream" />

<script>
    let lastLiveTime = "some time ago";

    async function fetchLastLiveData() {
        const headers = new Headers();
        headers.set("X-APIKEY", "37416592-50cc-437c-83a5-2ab3d08d96d0");

        const options = { method: "GET", headers: headers };
        let response = await fetch(
            "https://holodex.net/api/v2/videos?channel_id=UCyl1z3jo3XHR1riLFKG5UAg&include=live_info&limit=1&type=stream&status=past",
            options
        );

        let json = await response.json();
        lastLiveTime = json[0].start_actual;
    }

    fetchLastLiveData();
</script>

<p>Last stream was: {lastLiveTime}</p>
