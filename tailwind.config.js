/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      
        teko: ['Teko','Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

