import { Source_Sans_3 } from "next/font/google";
import { Petrona } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'campus1': "url('/static/images/Campus1111-optimized.jpg')",
        'newAnnenberg': "url('/static/images/newAnnenberg.jpg')",
      },
      fontFamily: {
        caslon: ['var(--font-caslon)'],
        source_sans: ['var(--font-source_sans)'],
        petrona: ['var(--font-petrona)'],
      },
      colors: {
        'usc-red': '#990000',
        'usc-yellow': '#FFCC00',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('tailwind-fontawesome'),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
