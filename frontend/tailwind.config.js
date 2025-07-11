/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          400: '#FF7A18',
          500: '#FF9800',
          600: '#FFB347',
        },
      },
    },
  },
  plugins: [],
} 