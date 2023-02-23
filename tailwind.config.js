module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      header: ["Raleway", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        transparent: "transparent",
        primary: "rgb(45 212 191)",
        secondary: "rgb(153 246 228)",
        background:"rgb(254 242 242)",
        white: "#ffffff",
        black: "#000000",
        yellow: "rgb(4 120 87)",
        lila: "#e6e5ec",
        "grey-10": "#6c6b6d",
        "grey-20": "#7c7c7c",
        "grey-30": "#919091",
        "grey-40": "#929293",
        "grey-50": "#f4f3f8",
        "grey-60": "#edebf6",
        "grey-70": "#d8d8d8",
        "hero-gradient-from": "rgb(254 226 226)",
        // "hero-gradient-to": " rgb(209 250 229)",
        "blog-gradient-from": "#8f9098",
        "blog-gradient-to": "#222222",
      },
      shadows: {
        default: "0 2px 18px rgba(0, 0, 0, 0.06)",
        md: "0 -3px 36px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
