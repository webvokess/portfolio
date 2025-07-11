/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "72p": "72px",
      "32p": "32px",
      "24p": "24px",
      "16p": "16px",
      "14p": "14px",
    },
    fontFamily: {
      main: "JetBrains Mono",
      secondary: "monospace",
    },
    fontWeight: {
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
    },
    lineHeight: {
      "72p": "80px",
      "40p": "40px",
      "24p": "24px",
      "22p": "22px",
    },
    colors: {
      "grey-1000": "#121212",
      "grey-900": "#1E1E1E",
      "grey-700": "#EBE4CC",
      "grey-500": "#89826B",
      "grey-300": "#8c8c8c",
      "white-1000": "#ffffff",
      "white-0": "rgba(255, 255, 255, 0)",
      "blue-900": "#56B6C2",
      "blue-600": "#5FAAE8",
      "yellow-900": "#EFC018",
      "yellow-700": "#e3d9b7",
      "green-900": "#099652",
      "pink-900": "#DA26D3",
      "red-900": "#D0666F",
    },

    extend: {
      backgroundImage: {
        hero_bg: "url('/bg/bg_1.jpg')",
        dark_glass: "linear-gradient(170.26deg, #303030 0%, rgba(48, 48, 48, 0) 100%)",
      },
      boxShadow: {
        dark_glass_shadow: "0px 12px 35px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
