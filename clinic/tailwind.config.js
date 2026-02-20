/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff4ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa',
          500: '#3b82f6', 600: '#4f46e5', 700: '#4338ca', 800: '#3730a3', 900: '#312e81'
        }
      },
      animation: { 'fade-in-up': 'fadeInUp 0.8s ease-out forwards', 'bounce-slow': 'bounce 3s infinite' },
      keyframes: { fadeInUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } } }
    }
  },
  plugins: [],
}