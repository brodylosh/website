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
    extend: {
      colors: {
        primary: '#2E2E2E',
        secondary: '#2689cd',
        tertiary: '#F05757',
        quaternary: '#ABABAB',
        quinary: '#636363',
        senary: '#f5f5f5',
      },
    },
    backgroundImage: {
      background: "url('../img/background.png')",
    },
  },
  plugins: [],
};
