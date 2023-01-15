/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'ame-light-yellow': '#F2D7B6',
        'ame-dark-brown': '#40302b',
        'ame-red': '#BF545D'
      }
    },
  },
  plugins: [],
}
