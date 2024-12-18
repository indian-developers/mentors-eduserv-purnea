/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'btnbg': '#F26B0F',
        'btnaction': '#3995e5',
        'success': '#d6ffe8',
        'secbg': 'rgb(245, 245, 245)',
        'sec1': "#e9f5f9",
        'sec2': '#fff5da',
        'sec3': "#FFE5F4",
        'sec4': "#E8E2F7",
        'cardbg': '#f7f7f8'
      },
      colors: {
        'txtcol': '#F26B0F',
        'navcol': "#656b70",
        'headcol': "#F94F4F",
        'textscs': "#00e676",
      },
    },
  },
  plugins: [],
}

