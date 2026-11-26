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
          50: '#FDFBF7',
          100: '#FAF7F2',
          200: '#F4EFEA',
          300: '#EAE1D7',
          400: '#D9CBBB',
          500: '#C2AE9A',
        },
        ink: {
          900: '#140E10',
          800: '#1D1619',
          700: '#2A2125',
          600: '#3D3338',
          500: '#5C5056',
          400: '#7E7178',
        },
        terracotta: {
          50: '#FDF5F3',
          100: '#FBE8E5',
          200: '#F5CDC6',
          300: '#EAA599',
          400: '#DC7868',
          500: '#CB5141',
          600: '#BE1D16',
          700: '#9E1812',
          800: '#82130E',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E6EFE6',
          200: '#CEDBCE',
          300: '#B0C4B0',
          400: '#7D9E7E',
          500: '#4A6B53',
          600: '#3B5742',
          700: '#2E4737',
        },
        ochre: {
          50: '#FCF9F1',
          100: '#F8F1DD',
          200: '#EFE0B6',
          300: '#E3C885',
          400: '#D7AE54',
          500: '#C48B36',
          600: '#A47029',
        },
        border: '#E8DFD3',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Montserrat', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(20, 14, 16, 0.05)',
        postcard: '0 10px 30px -4px rgba(20, 14, 16, 0.08), 0 2px 8px -2px rgba(20, 14, 16, 0.04)',
        glow: '0 0 25px rgba(203, 81, 65, 0.15)',
      },
      borderRadius: {
        'organic': '24px 8px 24px 8px',
        'organic-reverse': '8px 24px 8px 24px',
      },
    },
  },
  plugins: [],
};

export default config;
