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
        Blue: "#1890ff",
        BlueDark: "#232569",
        Green: "#53dbbb",
        Grey: "#EBEDF0",
      },
    },
  },
};
