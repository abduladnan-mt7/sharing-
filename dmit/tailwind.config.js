/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        accent: '#4f46e5',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'spin-slow': 'spin-rotate 25s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'scan': 'scan 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'spin-rotate': {
          '0%': { transform: 'rotateX(20deg) rotateY(0deg)' },
          '25%': { transform: 'rotateX(22deg) rotateY(110deg)' },
          '50%': { transform: 'rotateX(18deg) rotateY(180deg)' },
          '75%': { transform: 'rotateX(22deg) rotateY(250deg)' },
          '100%': { transform: 'rotateX(20deg) rotateY(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            color: 'rgb(229 231 235)',
            textShadow: '0 0 0px rgba(79, 70, 229, 0)'
          },
          '50%': { 
            color: 'rgb(129 140 248)',
            textShadow: '0 0 15px rgba(79, 70, 229, 0.4)'
          }
        },
        scan: {
          '0%': { top: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}