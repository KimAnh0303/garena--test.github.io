module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        blue: {
          111: "#ebf8ff",
          112: '#3182ce'
        },
        gray:{
          111: '#4a5568',
          112: '#2d3748',
          113: '#718096',
          114: '#a0aec0',
        }
      },
      screens:{
        'down_lg': {'max':'1025px'},
        'down_md': {'max':'769px'},
        'down_sm': {'max':'480px'},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
