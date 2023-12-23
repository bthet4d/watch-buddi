/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './*.html'],
  theme: {
    extend: {
      fontFamily: {
        "qs": ['Quicksand', 'sans-serif'],
        "grotesk": ['Familjen+Grotesk', 'sans-serif']
        
      },
      colors: {
        'accent-a': '#DF4A27',
        'accent-b': '#FBB042',
        'background-a': '#FFEB87',
        'background-b': '#F2D8B3',
        'accent-c': '#724F41'
      },
      backgroundImage: {
        'hero': "url('../images/landscape/fourPuppies_landscape.jpg')",
        'cta_a': "url('../images/landscape/basketKittens_landscape.jpg')",
        'cta_b': "url('../images/landscape/coupleHoldingDogs_landscape.jpg')",
        'cta_c': "url('../images/landscape/washbowlKittens_landscape.jpg')",
        'cta_d': "url('../images/landscape/manPlayingWithDog.jpg')"

      }
    },
  },
  variants: {},
  plugins: [],
}