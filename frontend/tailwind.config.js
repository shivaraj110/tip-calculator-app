/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.35em',
    },
    colors:{
'bg-cyan' : '#c5e4e7',
'gray-500' : '#6b7280',
'grayish-cyan' : '#5e7a7d',
'white' : '#ffffff',
'amt-cyan' : '#26c0ab',
'dark-cyan' : '#00494d',
'very-lightCyan' : '#f4fafa',
'btn-cyan' : '#0f766e',
'inp' : '	#f4fafa'
    },
    extend: {},
  },
  plugins: [],
}