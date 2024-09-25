module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        pink: {
          500: '#e174bb', // Usa el color rosa que tenías en el archivo CSS
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Agrega la fuente 'Poppins'
      },
    },
  },
  plugins: [],
}
