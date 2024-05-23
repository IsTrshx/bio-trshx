module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        banner: "#c5a78b", // también para las etiquetas siguientes (tenga en cuenta la relación de contraste)
        primary: "#121212", // No cambies este
        'custom-blue': '#4F7AEB',
        'custom-cream': '#EBE4D2',
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        sen: ["Sen", "sans-serif"],
      },
      screens: {
        custom: "400px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
