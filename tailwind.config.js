module.exports = { 
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], 
  theme: { 
    extend: { 
      colors: { 
        'primary-orange': '#ff9000', 
        'primary-blue': '#2c75ff', 
        'dark-bg': '#0d0d0d', 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    }, 
  }, 
  plugins: [], // Plugin entfernt
}