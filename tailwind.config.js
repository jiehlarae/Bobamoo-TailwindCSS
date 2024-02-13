/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('../src/images/bg.png')",
      },
      colors: {
        'main': '#7776BC',
      },
    },
  },
  plugins: [],
}

