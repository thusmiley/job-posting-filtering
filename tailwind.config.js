/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        darkCyan: "hsl(180, 29%, 50%)",
        lightGrayishCyan: "hsl(180, 52%, 96%)",
        darkGrayishCyan: "hsl(180, 8%, 52%)",
        veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      },
      fontFamily: {
        leagueSpartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
