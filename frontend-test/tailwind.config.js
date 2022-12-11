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
        'gray-color': '#777777'
      }
    },
    fontSize: {
      'base': '12px',
      'sm': '10px',
      'xsm': '14px',
      'md': '16px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '22px',
      '3xl': '25px'
    },
    backgroundImage: {
      'achievement-rate': "url('/static/images/d01.png')",
      'MyRecommend-1': "url('/static/images/MyRecommend-1.jpg')",
      'MyRecommend-2': "url('/static/images/MyRecommend-2.jpg')",
      'MyRecommend-3': "url('/static/images/MyRecommend-3.jpg')",
    },
    fontFamily: {
      'hiragino': ['Hiragino']
    }
  },
  plugins: [],
}
