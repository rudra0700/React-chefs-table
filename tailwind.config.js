/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/cover.png')",
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}

