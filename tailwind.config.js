/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F2EB',
        ink: '#111111',
        paper: '#FFFFFF',
        yellow: '#FFC700',
        pink: '#FF4D6D',
        blue: '#2563EB',
        lime: '#4ADE80',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', '"JetBrains Mono"', 'monospace'],
        sans: ['"Space Mono"', '"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        hard: '6px 6px 0px 0px #111111',
        'hard-sm': '3px 3px 0px 0px #111111',
        'hard-lg': '8px 8px 0px 0px #111111',
        'hard-xs': '1px 1px 0px 0px #111111',
      },
      borderRadius: { DEFAULT: '0.25rem' },
    },
  },
  plugins: [],
};
