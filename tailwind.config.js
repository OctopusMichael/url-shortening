/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
      heroBg : '#ffffff',
      cyan: 'hsl(180, 66%, 49%)',
      darkViolet: 'hsl(257, 27%, 26%)',   
      errorRed:'hsl(0, 87%, 67%)',
      newGray:' hsl(0, 0%, 75%)',
      grayViolet:' hsl(257, 7%, 63%)',
      veryDarkBlue: 'hsl(255, 11%, 22%)',
      veryDarkViolet:' hsl(260, 8%, 14%)',
      contentBg: '#F0F1F6'
      }
    },
  },
  plugins: [],
}
