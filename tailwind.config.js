module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        gray_400: "#c6bfbf",
        gray_401: "#cab3ca",
        red_900: "#b90b0b",
        bluegray_100: "#d9d9d9",
        red_300: "#d97373",
        amber_400_a0: "#eaca21a0",
        black_900_3f: "#0000003f",
        gray_50: "#fff9f9",
        white_A700_93: "#fefefe93",
        light_green_A700_47: "#7dec2647",
        black_900: "#000000",
        white_A701: "#ffffff",
        white_A700: "#fffcfc",
      },
      borderRadius: {
        radius12: "12px",
        radius20: "20px",
        radius35: "35px",
        radius43: "43px",
        radius57: "57px",
      },
      fontFamily: { inder: "Inder", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
