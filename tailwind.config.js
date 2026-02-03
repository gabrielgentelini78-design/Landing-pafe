/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          200: '#f6d27a',
          300: '#f2c14f',
          400: '#e8b341',
          500: '#d9a12b'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(242, 193, 79, 0.3), 0 0 25px rgba(242, 193, 79, 0.15)'
      },
      keyframes: {
        'fade-slide': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-slide': 'fade-slide 0.8s ease-out forwards'
      }
    }
  },
  plugins: []
}
