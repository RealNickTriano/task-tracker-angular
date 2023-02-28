/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'caret-down': "url('../src/app/common/svg/caret-down.svg')"
      }
    },
  },
  plugins: [],
}