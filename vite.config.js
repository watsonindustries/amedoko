import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

/** @type {import('vite').UserConfig} */
const config = defineConfig({
  plugins: [tailwindcss(), sveltekit()],
});

export default config;
