/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'innerShadow': 'inset 0 2px 16px -8px black',
      },
      
    },
  },
  plugins: [],
}

