/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/views/**/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat-Bold'],
        hindMaduraiBold: ['HindMadurai-Bold'],
        hindMaduraiRegular: ['HindMadurai-Regular'],
      }
    },
  },
  plugins: [],
};
