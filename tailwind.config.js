/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'dark': "url('./src/assets/BackGround.png')",
      'glitch': "url('./src/assets/glitch.jpg')"
    },
    extend: {
      fontFamily: {
        'space': ['Space Grotesk'],
        'Geologica': ['Montserrat']
      },

    },
  },
  plugins: [],
}
