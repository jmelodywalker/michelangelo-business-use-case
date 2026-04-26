/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        graphite: '#2c2c2a',
        muted: '#5F6368',
        rule: '#DADCE0',
        card: '#F1F3F4',
        page: '#FFFFFF',
        accent: '#1F3A5F',
      },
      fontFamily: {
        sans: ['"Söhne"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Tiempos Text"', '"Charter"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
        notes: '1100px',
      },
    },
  },
  plugins: [],
};
