/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red_hd: "#e73f36",
        green_hd: "#71c7d4",
        yellow_hd: "#fbb91d",
        gray_hd: "#3c3c3a"
      }
    },
    fontFamily: {
      mulish: ['Mulish', 'sans-serif'],
    },
  },
  plugins: [],
}

