/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '350px',
        // => @media (min-width: 640px) { ... }
  
        'md': '834px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      left:{
        '55': '95%'
      },
      width:{
        '45': '47%'
      },
      animation:{
        'slide-in-down': 'slideInDown 0.5s ease-out',
      },
    },
  },
  plugins: [],
}

