/** @type {import('tailwindcss').Config}*/
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Assure-toi que ton code React est bien pris en compte
    ],
    theme: {
      extend: {
        fontFamily: {
          handwriting1: ['"Dancing Script"', 'cursive'],
          handwriting2: ['"Pacifico"', 'cursive'], // ou autre police manuscrite
        sophisticated: ['"Playfair Display"', 'serif'], // ou "Lora"
        elegant: ['"Open Sans"', 'sans-serif'], // ou 'Lora', 'Merriweather'

        },
        colors: {
          vitacareBlue: '#cbeafc',
          vitacareGreen: '#d1f5ea',
          vitacareTeal: '#20c997',
        },
      },
    },
    plugins: [],
  };
  