<script>
    import "../app.css";
</script>

<slot />

<footer class="flex flex-col mt-auto text-ame-dark-brown">
    <div class="flex">
        <a
            class="text-center mx-auto underline text-2xl"
            href="https://www.youtube.com/channel/UCyl1z3jo3XHR1riLFKG5UAg"
            >Amelia Watson's channel</a
        >
    </div>
    <div class="flex flex-row mx-auto py-5">
        <p class="mx-1">Copyright © Watson Industries Inc.</p>
        <p class="mx-1">Not affiliated with Hololive Corp in any way.</p>
    </div>
    <div class="flex">
        <a
            class="text-center mx-auto underline"
            href="https://github.com/watsonindustries/amedoko">Source Code</a
        >
    </div>
</footer>
