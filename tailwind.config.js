/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#0a1628',
        'navy': '#0f2847',
        'blue-bright': '#00a8ff',
        primary: {
          DEFAULT: '#0EA5E9',
          dark: '#0284C7',
        },
        dark: {
          DEFAULT: '#0A0F1E',
          secondary: '#0F1729',
          tertiary: '#1A2332',
        },
       'cyan': {
          400: '#0EA5E9',
          500: '#0891C7',
        },
        'dark-blue': {
          800: '#0C2637',
          900: '#0A1F2E',
        },

      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



