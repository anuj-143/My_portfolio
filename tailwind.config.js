/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1a1b26',
          200: '#24283b',
          300: '#414868',
        },
        accent: {
          100: '#7aa2f7',
          200: '#bb9af7',
        }
      }
    },
  },
  plugins: [],
}