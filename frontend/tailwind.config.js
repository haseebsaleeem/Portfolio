/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#06070F',
          soft: '#0A0C1B',
          deep: '#030308'
        },
        signal: {
          violet: '#6C63FF',
          cyan: '#00E5FF',
          alert: '#FF3D57',
          amber: '#FFB800'
        },
        ink: {
          DEFAULT: '#F1F2F8',
          muted: '#8890B5',
          faint: '#4B5178'
        }
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(rgba(108,99,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.06) 1px, transparent 1px)'
      },
      boxShadow: {
        glow: '0 0 40px rgba(108,99,255,0.25)',
        'glow-cyan': '0 0 40px rgba(0,229,255,0.2)',
        'glow-alert': '0 0 30px rgba(255,61,87,0.35)'
      },
      animation: {
        scan: 'scan 3s linear infinite',
        blink: 'blink 1.6s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 26s linear infinite'
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.25 }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    }
  },
  plugins: []
}
