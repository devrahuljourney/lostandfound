module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        'nav-color': '#ACAAFF',
        'button': '#6156E0',
        // Add more custom colors as needed
      },
      backgroundGradient: {
        'my-gradient': 'radial-gradient(188.78% 94.89% at 0.87% 7.36%, #C3C6FF 0%, rgba(182, 184, 241, 0.46) 78.95%, rgba(255, 255, 255, 0.12) 100%)',
        // Add more custom gradient colors as needed
      },
    },
  },
  plugins: [],
}