/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      // screens: {
      //   md: 835px;
      // }
      // // fontFamily: {

      // // }
    },
  },
  plugins: [],
}

module.exports = {

  plugins: [
      require('flowbite/plugin')
  ]

}

module.exports = {

  content: [
      "./node_modules/flowbite/**/*.js"
  ]

}