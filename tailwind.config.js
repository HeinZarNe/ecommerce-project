/** @type {import('tailwindcss').Config} */
module.exports = {
  separator: "_",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      darkblue: "hsl(220, 13%, 13%)",
      darkgrayblue: "hsl(219, 9%, 45%)",
      lightgrayblue: "hsl(223, 64%, 98%)",
      orange: "hsl(26, 100%, 55%)",
      paleorange: "hsl(25, 100%, 94%)",
      grayblue: "hsl(20, 14%, 75%)",
      white: "#fff",
      black: "#000",
    },
  },
  plugins: [],
};
