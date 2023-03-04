/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "p-blue": "#9ADCFF",
      "p-yellow": "#FFF89A",
      "p-orange": "#FFB2A6",
      "p-pink": "#FF8AAE",
      text: "#414141",
      bg: "#F8F4F3",
    },
  },
  plugins: [],
};
