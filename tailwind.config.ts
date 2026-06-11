import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        noir: 'var(--noir)',
        anthracite: 'var(--anthracite)',
        gold: 'var(--gold)',
        'gold-soft': 'var(--gold-soft)',
        platinum: 'var(--platinum)',
        paper: 'var(--paper)',
        'paper-dim': 'var(--paper-dim)',
      },
      borderColor: {
        line: 'var(--line)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      keyframes: {
        'satin-sweep': {
          '0%': { transform: 'translateX(-60%) rotate(8deg)', opacity: '0' },
          '20%': { opacity: '0.6' },
          '50%': { opacity: '0.9' },
          '80%': { opacity: '0.6' },
          '100%': { transform: 'translateX(160%) rotate(8deg)', opacity: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'satin-sweep': 'satin-sweep 9s ease-in-out infinite',
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};

export default config;
