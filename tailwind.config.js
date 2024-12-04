/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js" // Include Flowbite's components
  ],
  theme: {
    extend: {      fontFamily: {
      minion: ['Minion Pro', 'serif'], 
      graphik: ['Graphik', 'sans-serif'], // Use the font name you defined in @font-face
    },
  },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
