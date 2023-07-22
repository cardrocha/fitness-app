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
        background: '#A03333'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'marquee-infinite': 'marquee 20s linear infinite',
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
