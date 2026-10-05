/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/preline/dist/*.js" // এটি যোগ করুন
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'), // এটি যোগ করুন
  ],
}