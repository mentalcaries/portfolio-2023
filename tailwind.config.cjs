/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        light: `url('/assets/backgrounds/bg-light.png')`,
        dark: `url('/assets/backgrounds/bg-dark.png')`,
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
