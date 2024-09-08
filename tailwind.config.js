/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '390px',
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        instrumentSerif: ['Instrument', 'serif'],
      },
      colors: {
        primaryPurple: '#7941D1',
        primaryDarkPurple: '#6938B9',
      },
      borderColor: {
        primaryPurple: '#7941D1',
        primaryDarkPurple: '#6938B9',
      },
    },
  },
  plugins: [],
};
