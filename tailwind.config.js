/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    colors: {
      'darkBlue': 'hsl(233, 26%, 24%)',
      'limeGreen': 'hsl(136, 65%, 51%)',
      'brightCyan': 'hsl(192, 70%, 51%)',
      'grayishBlue': 'hsl(233, 8%, 62%)',
      'lightGrayishBlue': 'hsl(220, 16%, 96%)',
      'veryLightGray': 'hsl(0, 0%, 98%)',
      'mixGradient': 'linear-gradient(to right, #2bb7da, #31d35c)',
      'White': 'hsl(0, 0%, 100%)',
       transparent: 'transparent',
    },

    fontFamily: {
      sans: ['Public San', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      
    },
  },
  plugins: [],
}

