const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    autoprefixer({
      add: true,
      grid: true
    }),
    //Only add purgecss in production
    process.env.NODE_ENV === "production"
      ? purgecss({
          content: ["./public/*.html", "./src/**/*.html", "./src/**/*.vue"]
        })
      : ""
  ]
};
