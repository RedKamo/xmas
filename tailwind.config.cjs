/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        alegreya: ['"Alegreya Sans"', 'sans-serif']
      },
      backgroundImage: {
        'footer-back': "url('/footer-back.png')",

      },
      colors: {
        'red-custom': "#FF5D58",
        'green-custom': "#00B373",
        'black-custom': "#212121",
        'blue-custom': "#009CFF",
        'dark-black': "#1A1A1A",
      }
    },
  },
  plugins: [],
};
