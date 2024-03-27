/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/images/background.png')",
        'box-bg': "url('/images/boxbg.png')",
        logo: "url('/images/assets/zlogo.png')",
      },
    },
  },
  plugins: [],
}

