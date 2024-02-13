/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BackgroundColor: "#010C15",
        MainBackgroundColor: "#011627",
        BorderColor: "#1E2D3D",
        TextColor: "#E5E9F0",
        CustomBlueColor: "#4D5BCE",
        CustomGreenColor: "#43D9AD",
        LinkColor: "#E99287",
        BorderBottomColor: "#FEA55F",
        CommentaryColor: "#607B96",
      },
      fontFamily: {
        'sans': ['Fira Code, sans-serif'],
        'serif': ['Alex Brush, sans-serif']
      }
    },
  },
  plugins: [],
}