/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        Popi: ['Poppins'],
        DM : ['DM Sans']
      },
      backgroundImage: {
        'my-gradient': 'linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%)',
      },
      colors :{
        "my-gray" : '#A7A7A7',
        "my-white" : '#CCC',
        "my-black" : "#191919",
        "my-darkGray" : "#363636"
      }
    },
  },
  plugins: [],
}

