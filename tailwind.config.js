/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gray-1': '#C6C6C6',
        'gray-2': '#7D929E',
        'gray-3': '#97A0A6',
        'brown-1': '#969187',
        'brown-bg': '#D3CBBE',
        'inner-brown-1': '#E5DECF',
        'inner-brown-2': '#403E39'
      }
    },
  },
  plugins: [],
  safelist: [
    'hover:bg-[blue]'
  ]
}
