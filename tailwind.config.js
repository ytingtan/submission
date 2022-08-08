/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{html,js}',
  './src/components/**/*.{html,js}', 
  './index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
