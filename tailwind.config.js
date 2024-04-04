/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red_hd: "#D3331E",
        green_hd: "#00B3B7",
        yellow_hd: "#FFB000",
        gray_hd: "#444444"
      }
    },
    fontFamily: {
      mulish: ['Mulish', 'sans-serif'],
    },
  },
  plugins: [],
}

