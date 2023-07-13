/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-light': '#2c2c32',
        'dark-dark': '#25252b',
        'light-light': '#ffffff',
        'light-dark': '#f5f5f5',
        'accent-blue': '#0066b8',
        'text-dark': '#ccccc2',
        'link-highlight': '#0586de',
      },
    },
  },
  plugins: [],
}

