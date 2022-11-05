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
        'desktop-back': "url('./src/assets/desktop_bg.png')",
        'phone-back': "url('./src/assets/phone_bg.png')",
        'test': "url('./src/assets/test.png')",
        'hero-back': "url('./src/assets/hero-back.png')",

      },
      colors: {
        'red-custom': "#FF5D58",
        'green-custom': "#49B752",
      }
    },
  },
  plugins: [],
};
