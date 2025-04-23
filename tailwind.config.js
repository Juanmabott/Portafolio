/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'iridescent': {
          50: 'rgba(200, 240, 255, 0.1)',
          100: 'rgba(180, 230, 255, 0.2)',
          200: 'rgba(150, 215, 255, 0.3)',
          300: 'rgba(100, 200, 255, 0.4)',
          400: 'rgba(50, 180, 255, 0.5)',
          500: 'rgba(0, 150, 250, 0.6)',
          600: 'rgba(0, 120, 220, 0.7)',
          700: 'rgba(0, 90, 200, 0.8)',
          800: 'rgba(0, 60, 180, 0.9)',
          900: 'rgba(0, 30, 150, 1.0)',
        },
        'glass': {
          DEFAULT: 'rgba(0, 60, 100, 0.5)',
          light: 'rgba(100, 160, 200, 0.3)',
          dark: 'rgba(0, 30, 80, 0.7)',
        }
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0, 200, 255, 0.5), 0 0 20px rgba(0, 150, 255, 0.3)',
        'glass': '0 8px 32px 0 rgba(21, 31, 171, 0.37)',
      },
    },
  },
  plugins: [],
}