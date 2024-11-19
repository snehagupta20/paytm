/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {
        'webkit-fill': '-webkit-fill-available',
      }
    },
  },
  plugins: [],
}

