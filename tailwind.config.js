/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#24232C',
        'almost-white': '#E6E5EA',
        'very-dark-gray': '#18171F',
        'neon-green': '#A4FFAF',
        line: '#D8D8D8',
        gray: '#817D92',
        red: '#F64A4A',
        orange: '#FB7C58',
        yellow: '#F8CD65'
      },
      fontSize: {
        l: '2rem', // 32px
        m: '1.5rem', // 24px
        'body-m': '1.125rem', // 18px
        'body-s': '1rem' // 16px
      },
      lineHeight: {
        l: '2.5rem', // 40px
        m: '2rem', // 32px
        'body-m': '1.4375rem', // 23px
        'body-s': '1.3125rem' // 21px
      }
    },
    fontFamily: {
      mono: ['JetBrains Mono', 'monospace']
    },
    backgroundImage: {
      check: 'url("/icon-check.svg")'
    }
  },
  plugins: []
}
