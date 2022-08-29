/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bau-red': '#BE1E2D',
        'bau-blue': '#21409A',
        'bau-yellow': '#FFDE17',
        'bright-bau-red': '#e83c28',
        'bright-bau-blue': '#091c44',
        'bright-bau-yellow': '#f4b800',
        'timberwolf': '#DBD4D3'
      },
      borderRadius: ['hover']
    },
    borderRadius: {
      full: '200px'
    }
  },
  plugins: [],
}
