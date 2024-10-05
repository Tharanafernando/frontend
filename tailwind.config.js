/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        topic: ["Merriweather", "serif"],
        facts:["Montserrat", "sans-serif"]
      },
    },
  },
  plugins: [],
}

