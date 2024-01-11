/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './*.html'],
  theme: {
    extend: {
      fontFamily: {
        "grotesk": ['"Familjen+Grotesk"', 'sans-serif'],
        "qs": ['Quicksand', 'sans-serif'],
        "poppins": ['Poppins', 'sans-serif']
      },
      colors: {
        'accent-a': '#DF4A27',
        'accent-b': '#FBB042',
        'background-a': '#FFEB87',
        'background-b': '#F2D8B3',
        'accent-c': '#724F41',
      },
      // Remove unused backgroundImage if not needed in styles
      'backgroundImage': {
        
      },
    },
  },
  variants: {},
  plugins: [],
};
