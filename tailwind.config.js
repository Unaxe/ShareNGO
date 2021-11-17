module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width:{
        '100': '55rem',
        '140': '140rem',
      },
      height:{
        '100': '60%',
        '140': '140rem',
      },
      colors: {
        accueil : {
          fond: '#D1C8DC',
          images: '#AB2121',
          w: '#1A0840',
          button: '#C10B37',
        }
      },
      backgroundImage:{
        landing: "url('/landig_bg_2.jpg')"
      }
    },
  },
  variants: {
  },
  plugins: [],
}
