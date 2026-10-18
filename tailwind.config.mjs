import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        sans: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
      },
      colors: {
        geoBeige: '#F5F2EB',
        geoNavy: '#0A192F',
        geoNavyDark: '#112236',
        geoSage: '#A8C3A6',
        geoRed: '#C8102E',
        // Aliases semânticos
        geoBg: '#F5F2EB',
        geoCard: '#FFFFFF',
        geoPrimary: '#0A192F',
        geoSecondary: '#A8C3A6',
        geoAccent: '#C8102E',
      },
    },
  },
  plugins: [typography],
};
