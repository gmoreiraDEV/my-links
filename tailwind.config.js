/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      brand: {
        purple: {
          100: '#564595',
          900: '#211C41'
        },
        pink: '#E52254',
        white: {
          50: '#F6F0F7',
          100: '#E3D0E7'
        }
      }
    },
    extend: {}
  },
  plugins: []
}
