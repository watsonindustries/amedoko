# Forking Guide

Please briefly familiarise yourself with the following frameworks before continuing:

- Svelte
- SvelteKit
- TailwindCSS

All component scripts should also be written in TypeScript with the `lang="ts"` attribute set.

## Initial customisation

Customize `package.json` for your project (e.g. rename the `name` field value).

## Styling

All styling should be done through Tailwind. Add your own custom colors if needed in `tailwind.config.cjs`.
Then simply use your custom colors in TailwindCSS classes in your markup.

## Channel ID

Most constants, like the target `CHANNEL_ID` can be found in `const.ts`. Set your own there.
Then, import and use it in the `load()` function in [the page loader module](./src/routes/+page.ts).

## Components

Most of the code has been abstracted into re-usable components in `src/lib`.

Rearrange/add/remove them in the SvelteKit pages/layouts how you see fit.

## DokoImage images

The default `DokoImage` component has a hardcoded set of images to display, which are stored in `src/lib/assets`.
You can replace them with your own set, or add your own logic for fetching the images, or remove this behaviour alltogether.

## Static assets

Put thumbnails and your custom favicon and site manifest in `static`. Custom fonts should go in `static/fonts`.

## Analytics

Make sure to remove `L11` in `app.html` which injects Plausible, and replace the tracking script with your own.

## Deploying

The easiest way to deploy is to use something like Netlify or one of the other SvelteKit supported adapters.
Read more about this [in the official docs](https://kit.svelte.dev/docs/adapters).
