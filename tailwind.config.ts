import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          25: '#FFFDF9',
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F4EFE3',
          300: '#E8DFCE',
          400: '#D5C7B0',
          500: '#BEAD90',
          600: '#9E8D70',
        },
        ink: {
          950: '#0B090A',
          900: '#141113',
          850: '#1A1619',
          800: '#1F1B1E',
          700: '#2E282C',
          600: '#453E43',
          500: '#635B61',
          400: '#8A8288',
          300: '#B8B1B6',
        },
        terracotta: {
          50: '#FDF5F3',
          100: '#FCEBE8',
          200: '#F8D2CB',
          300: '#F0ABA0',
          400: '#E27666',
          500: '#D34934',
          600: '#B92815',
          700: '#941E10',
          800: '#751A10',
          900: '#5A1610',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E4ECE5',
          200: '#C7DAC9',
          300: '#A4C0A7',
          400: '#7BA080',
          500: '#537C59',
          600: '#3D6142',
          700: '#2F4B34',
          800: '#253B29',
        },
        ochre: {
          50: '#FCFAF2',
          100: '#F7F2DF',
          200: '#EFE1BC',
          300: '#E3CB91',
          400: '#D4B160',
          500: '#BF9533',
          600: '#9B7423',
          700: '#78561B',
        },
        accent: {
          flame: '#FF4D2E',
          cyan: '#25C9D0',
          gold: '#E5A93C',
          violet: '#7A49A5',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'Cinzel', 'Cormorant Garamond', 'serif'],
        mono: ['var(--font-mono)', 'Space Mono', 'JetBrains Mono', 'monospace'],
        modern: ['var(--font-modern)', 'Syne', 'Plus Jakarta Sans', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.35em',
        'super-wide': '0.5em',
        'monumental': '0.65em',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'spin-slow': 'spin 30s linear infinite',
        'float-gentle': 'floatGentle 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'breathe': 'breathe 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(0.8deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.82', transform: 'scale(0.985)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.4' },
          '50%': { transform: 'scale(1.08)', opacity: '0.75' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'brutalist': '4px 4px 0px 0px #141113',
        'brutalist-sm': '2px 2px 0px 0px #141113',
        'brutalist-lg': '6px 6px 0px 0px #141113',
        'brutalist-terracotta': '4px 4px 0px 0px #B92815',
        'brutalist-sage': '4px 4px 0px 0px #2F4B34',
        'glow-terracotta': '0 0 50px -10px rgba(185, 40, 21, 0.4)',
        'glow-ambient': '0 20px 80px -20px rgba(20, 17, 19, 0.15)',
        'postcard-hover': '0 30px 70px -15px rgba(20, 17, 19, 0.22)',
        'dossier': '0 10px 40px -10px rgba(11, 9, 10, 0.25), 0 0 0 1px rgba(11, 9, 10, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
