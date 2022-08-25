/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#425664",
          secondary: "#C6AD8F",
          // ***********
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};

// ================= Color Code ===========
// 1. White:  #F6F4F2
// 2. black:  #425664
// 3. Orange: #C6AD8F
