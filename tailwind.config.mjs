/** @type {import('tailwindcss').Config} */
import data from "./src/content/about/about.json"
let colorArray = (data.aboutBody.colorArray)

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      "paris": ['Parisienne', 'cursive'],
			"poppins": ['Poppins', 'sans-serif']
    },
    backgroundImage: {
      "landing": `url(${data.aboutBody.images.landing})`
    },
    extend: {
      colors: {
        primary: colorArray[0],
        secondary: colorArray[1],
        neutral: colorArray[2],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
