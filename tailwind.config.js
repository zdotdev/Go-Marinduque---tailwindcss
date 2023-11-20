/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    fontWeight: {
      100: ['100'],
      200: ['200'],
      300: ['300'],
      400: ['400'],
      500: ['500'],
      600: ['600'],
      700: ['700'],
      800: ['800'],
      900: ['900']
    },
    fontSize: {
      0: ['0rem'],
      .8: ['0.8rem'],
      1: ['1rem'],
      1.2: ['1.2rem'],
      1.4: ['1.4re'],
      1.8: ['1.8rem'],
      2.4: ['2.4rem'],
      2.8: ['2.8rem'],
      4: ['4rem']
    },
    colors: {
      'neutral-900': ['hsl(0, 0%, 10%)'],
      'neutral-850': ['hsl(0, 0%, 15%)'],
      'neutral-800': ['hsl(0, 0%, 20%)'],
      'neutral-700': ['hsl(0, 0%, 30%)'],
      'neutral-500': ['hsl(0, 0%, 50%)'],
      'neutral-300': ['hsl(0, 0%, 70%)'],
      'neutral-100': ['hsl(0, 0%, 90%)'],
      'primary-900': ['hsl(210, 100%, 50%)'],
      'primary-800': ['hsl(210, 100%, 55%)'],
      'primary-700': ['hsl(210, 100%, 60%)'],
      'primary-600': ['hsl(210, 100%, 65%)'],
      'primary-500': ['hsl(210, 100%, 70%)'],
      'primary-400': ['hsl(210, 100%, 75%)'],
      'primary-300': ['hsl(210, 100%, 80%)'],
      'primary-200': ['hsl(210, 100%, 85%)'],
      'primary-100': ['hsl(210, 100%, 90%)'],
      'secondary-900': ['hsl(41, 100%, 40%)'],
      'secondary-800': ['hsl(41, 100%, 45%)'],
      'secondary-700': ['hsl(41, 100%, 50%)'],
      'secondary-600': ['hsl(41, 100%, 55%)'],
      'secondary-500': ['hsl(41, 100%, 60%)'],
      'secondary-400': ['hsl(41, 100%, 65%)'],
      'secondary-300': ['hsl(41, 100%, 70%)'],
      'secondary-200': ['hsl(41, 100%, 75%)'],
      'secondary-100': ['hsl(41, 100%, 80%)']
    },
    height: {
      40: ['40rem'],
      42: ['42rem'],
      44: ['44rem'],
      46: ['46rem'],
      48: ['48rem'],
      50: ['50rem'],
      100: ['100%']
    },
    width: {
      44: ['44%'],
      56: ['56%'],
      100: ['100%']
    },
    media: {
      500: ['500px'],
      550: ['550px'],
      600: ['600px']
    },
    inset: {
      '-n120': ['-120rem']
    }
  },
  },
  plugins: [],
}