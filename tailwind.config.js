/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        172: '32rem',
        192: '36rem',
        240: '42.45rem',
      },
      translate:{
        
        44: '8.04rem'
      },
      fontFamily:{
        papyrus: 'Papyrus',
        aveny: ["Aveny T", "Papyrus"],
        alphaEcho: ["Alpha Echo", "Papyrus"]
      }
    },
  },
  plugins: [
    
  ],
}
