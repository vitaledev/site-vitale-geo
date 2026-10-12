import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Plus Jakarta Sans', 'serif'],
        mono: ['Space Mono', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        geoBg: '#090a0f',
        geoCard: '#11131a',
        geoGold: '#f59e0b',
        geoBlue: '#38bdf8',
        geoSand: '#d4a373',
        geoCyan: '#06b6d4',
        geoRed: '#ef4444',
        geoNavy: '#020617',
        geoSlate: '#1e293b',
      },
    },
  },
  plugins: [typography],
};

