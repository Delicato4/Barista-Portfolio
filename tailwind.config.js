<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    boxShadow: {
      'ax-hover': '0 0 25px 0 rgba(245, 234, 182, 0.5)',
      'ax': '0 0 25px 0 rgba(245, 234, 182, 0.5)',
    },
    
    fontFamily: {
      'amiri': ['Amiri', 'serif'],
    },
   
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: { 
      colors: {
        'f5eab6': '#f5eab6',
        'black': '#000000',
        'white': '#ffffff', 
      },
     
     
      


      
    },
  },
  plugins: [],
=======
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}"
  ],
  theme: {
    boxShadow: {
      'ax-hover': '0 0 25px 0 rgba(245, 234, 182, 0.5)',
      'ax': '0 0 25px 0 rgba(245, 234, 182, 0.5)',
    },
    
    fontFamily: {
      'amiri': ['Amiri', 'serif'],
    },
   
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: { 
      colors: {
        'f5eab6': '#f5eab6',
        'black': '#000000',
        'white': '#ffffff', 
      },
     
     
      


      
    },
  },
  plugins: [],
>>>>>>> 23047fcc468975b3c147c22ca034a41fdde26e1d
} 