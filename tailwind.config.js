const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
    },
    colors: {
      'light-cyan': 'hsl(193, 38%, 86%)',
      'neon-green': 'hsl(150, 100%, 66%)',
      'grayish-blue': 'hsl(217, 19%, 38%)',
      'dark-grayish-blue': 'hsl(217, 19%, 24%)',
      'very-dark-blue': 'hsl(220, 22%, 16%)'
    },
    extend: {
      fontFamily: {
        sans: [
          'Manrope',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      boxShadow: {
        'button': '0 0 50px -12px rgb(0 0 0 / 0.25)'
      },
    },
  },
  plugins: [],
}
