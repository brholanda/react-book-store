/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      height: {
        '22/25': '88%'
      },
      maxWidth: {
        '530-px': '530px'
      }
    },
  },
  plugins: [],
}
