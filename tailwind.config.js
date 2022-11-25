module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-blue": "#2A2C41",
        "theme-white": "#F4F4f8",
        "theme-yellow": "#FDBF50",
        "theme-orange": "#FF724C",
      },
    },
  },
  plugins: [],
};
