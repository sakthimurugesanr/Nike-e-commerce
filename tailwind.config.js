/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      
      'sm' : '640px',
      'md' :	'768px',	
      'lg' :	'1024px',	
      'xl'	: '1280px',	
      '2xl'	: '1536px',
            'xl': '1280px',
            '2xl': '1536px',
            // Add custom breakpoints if needed
            '3xl': '1920px',  // Custom screen size for large screens
          },
  },
  plugins: [],
}