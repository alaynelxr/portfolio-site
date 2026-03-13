/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        parchment: '#FFFBF5',
        espresso: '#2C2418',
        terracotta: '#C4622A',
        fern: '#2B7A5F',
        stone: '#6B5F4E',
        umber: '#1E1A14',
        cream: '#F2EDE4',
        clay: '#D87A4A',
        sage: '#3DAE82',
        driftwood: '#8C8070',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['Lora', 'serif'],
        mono: ['"Source Code Pro"', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}
