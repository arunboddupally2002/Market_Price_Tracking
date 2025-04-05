/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'subtle-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' }
        }
      },
      animation: {
        'slide-up': 'slide-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
        'subtle-zoom': 'subtle-zoom 20s ease-out forwards'
      }
    }
  },
  plugins: []
}