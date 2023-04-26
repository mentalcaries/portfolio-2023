/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        light: `linear-gradient(315deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 90%),url('/assets/backgrounds/bg-light.png')`,
        dark: `url('/assets/backgrounds/bg-dark.png')`,
        footerLight: `url('/assets/backgrounds/bg-light-fade.png')`,
      },
      colors: {
        evenRed: '#b92b27',
        evenBlue: '#1565C0',
        celestialPink: '#C33764',
        celestialBlue: '#1D2671',
        digitalAqua: '#74ebd5',
        digitalBlue: '#ACB6E5',
      },
    },

    fontFamily: {
      sans: ['Inter', 'Arial', 'ui-sans-serif'],
      serif: ['Quattrocento', 'Georgia'],
      body: ['Hind', 'ui-sans-serif'],
    },
  },
  plugins: [],
};
