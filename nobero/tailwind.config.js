
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add paths to other files if needed
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 20s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      }
    },
  },
  plugins: [],
}
