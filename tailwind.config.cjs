/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./**/*.{mdx,tsx}"],
  plugins: [
    "@tailwindcss/aspect-ratio",
    "@tailwindcss/container-queries",
    "@tailwindcss/forms",
    "@tailwindcss/typography",
  ],
  theme: {
    extend: {
      colors: {
        Blue: "#1890FF",
        BlueDark: "#232569",
        Green: "#53DBBB",
        Grey: "#EBEDF0",
        OrangeBG: "#E26C59",
        Purple: "#4C1369",
        PurpleBG: "#A3169F",
      },
    },
  },
};
