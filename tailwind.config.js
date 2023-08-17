/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'border-color': 'red !important',
      },
    },
  },
plugins: [require("daisyui")],
}

 