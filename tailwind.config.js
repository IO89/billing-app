/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontfamily: {
      sansSerif: ["Source Sans 3", "sans-serif"],
      mono: ['Source Code Pro', "monospace"],
      handWritting: ["Kalam", "cursive"],

},
    extend: {
      colors:{
        lavenderIndigo: "#8657E1",
        daisyBush: "#4714a5",
        goldenFizz: "#feff40",
        whisper: "#f9f4f9",
        pastelPurple: "#b2a1bb",
        purple: "#7209b7",
        robinEggBlue: "#00E9c0",
        bluegem: "#3813a0",
        carribeanGreen: "#1CC6A0",
        scarlet: "#f72f45",
        monsoon: "#777878",
        silver: "#c0c0c0",
        gallery: "#efeaf2",
        fog: "#decaec"
      }
    },
  },
  plugins: [],
}

