/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#aa192a",
          secondary: "#b25629",
          accent: "#21ff67",
          neutral: "#201826",
          "base-100": "#E8EBED",
          info: "#F5F7FA",
          success: "#17A698",
          warning: "#F1BF41",
          error: "#F03B38",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
