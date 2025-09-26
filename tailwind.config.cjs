module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#ff7a00',
          600: '#ff6a00'
        },
        accent: {
          500: '#0077cc',
          600: '#005fa3'
        }
      },
      fontFamily: {
        vazir: ['Vazir', 'sans-serif']
      }
    }
  },
  plugins: []
}

// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'animated-gradient': 'linear-gradient(135deg, #0f172a, #1e293b, #0f766e)',
      },
      colors: {
        gold: '#FFD700',
      },
    },
  },
  plugins: [],
}
