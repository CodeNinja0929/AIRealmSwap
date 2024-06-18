/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        blue1: "#0a1837",
        mobilemenu: "rgba(243, 244, 245, .8)",
        pink1: "rgba(240, 86, 185, .11)",
        grey1: "rgba(10, 24, 55, .15)",
      },
      borderColor: {
        blue1: "#0a1837",
        grey1: "rgba(10, 24, 55, .15)",
      },
      color: {
        blue1: "#0a1837",
      },
      textColor: {
        pink1: "#f056b9",
        blue1: "#0a1837",
      },
      backgroundImage: {
        mainback:
          "url('https://assets-global.website-files.com/658c445d5294877bbd5ab894/65968e313a1700f0c53e849c_bg-gradient.jpg')",
        luxury:
          "conic-gradient(from 0deg at 50% 50%, #00FFFF21 92%, #f056b9 92%, #073AFFFF 100%)",
      },
      boxShadow: {
        pink: "0 2px 5px #f056b9",
      },
      fontFamily: {
        Jakarta: '"Plus Jakarta Sans", sans-serif',
      },
    },
  },
  plugins: [],
};

