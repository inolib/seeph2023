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
    extend: {},
  },
};
