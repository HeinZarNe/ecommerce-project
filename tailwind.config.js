/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'dark_blue': 'hsl(220, 13%, 13%)',
      'dark_gray_blue': 'hsl(219, 9%, 45%)',
      'light_gray_blue': 'hsl(223, 64%, 98%)',
      'orange': 'hsl(26, 100%, 55%)',
      'pale_orange': 'hsl(25, 100%, 94%)',
      'gray_blue': 'hsl(220, 14%, 75%)',
      'white': '#fff',
      'black': '#000',
    },
  },
  plugins: [],
}
