/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#414141',
        'primary-color': '#EA6C00',
        'light-orange': '#FFCC21',
        'normal-orange': '#FF963C',
      }
    },
    fontSize: {
      'base': '12px',
      'sm': '10px',
      'md': '16px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '22px',
      '3xl': '25px'
    },
    backgroundImage: {
      'achievement-rate': "url('/static/images/d01.png')"
    }
  },
  plugins: [],
}
