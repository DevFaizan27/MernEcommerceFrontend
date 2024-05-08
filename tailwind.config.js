/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nightBlue: '#1e1b4b',
        charcoalGray: '#06b6d4',
        midnightPurple: '#5E2CA5',
        deepOcean: '#1A202C',
        slateGray: '#596A73',
      },
    },
  },
  plugins: [],
}