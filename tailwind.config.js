/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg': `url("./images/bg.png")`,
      },
      colors: {
        'main': '#7776BC',
      },
    },
  },
  plugins: [],
}

