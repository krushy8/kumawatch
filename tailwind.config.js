/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest:'#3F4739',
        bark:  '#6C5A49',
        amber: '#EF8A17',
        cream: '#f5f0e8',
        sage: '#BACBA9',
        mint: '#E1F4CB',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
