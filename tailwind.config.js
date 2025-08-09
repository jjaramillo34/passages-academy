/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f8ff',
          100: '#e0f1fe',
          200: '#bae3fd',
          300: '#7ccffc',
          400: '#36b7f8',
          500: '#0c9ee9',
          600: '#175696',
          700: '#145282',
          800: '#16456b',
          900: '#183a59',
        },
        secondary: {
          50: '#f0fbff',
          100: '#e0f7fe',
          200: '#baeefe',
          300: '#7ddffd',
          400: '#3bb6ea',
          500: '#22a7e0',
          600: '#1488be',
          700: '#176d9a',
          800: '#1b5c7f',
          900: '#1c4d6a',
        },
      },
    },
  },
  plugins: [],
}
