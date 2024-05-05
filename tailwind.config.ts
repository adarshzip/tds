import { Source_Sans_3 } from "next/font/google";
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
        'campus1': "url('/static/images/Campus1111.png')",
        'newAnnenberg': "url('/static/images/newAnnenberg.jpg')",
      },
      fontFamily: {
        Caslon: ['Caslon'],
        Source_Sans_3: ['Source Sans 3'],
      },
      colors: {
        'usc-red': '#990000',
        'usc-yellow': '#FFCC00',
      },
    },
  },
  plugins: [
    require('tailwind-fontawesome'),
  ],
};
export default config;
