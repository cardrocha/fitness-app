/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
        bebas: ['var(--font-bebas)'],
        bungee: ['var(--font-bungee)'],
      },
      colors: {
        primary: '#fff',
        secondary: '#222',
        background: '#A03333',
        secondaryBackground: '#FF0202',
        secondaryVariation: '#FF2020',
        secondaryDark: '#660101',
        button: '#FF3939',
        secondaryGray: '#B4B4B4',
        secondaryText: '#787878'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeInOut: {
          '0%': {opacity: '1'},
          '100%': { opacity: '0'},
        }
      },
      animation: {
        'marquee-infinite': 'marquee 20s linear infinite',
        'fade-in-out': 'fadeInOut 5s ease-in-out', 
      },
      clipPath: {
        mypolygon: "polygon(85% 0, 100% 53%, 100% 100%, 0 100%, 0 0)",
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}
