/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        ink: '#070b12',
        panel: '#0d1420',
        neon: '#a3ff6f',
        cyan: '#58e6ff',
      },
      boxShadow: {
        glow: '0 0 45px rgba(163,255,111,.16)',
      },
    },
  },
  plugins: [],
}