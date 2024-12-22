const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/kopken/**/*.{js,ts,jsx,tsx}",
    "./app/kopken/design-system/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a73e8", // KopKen Primary Color
        background: "#ffffff",
        text: "#333333",
      },
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
        mono: ["IBM Plex Mono", ...fontFamily.mono],
      },
      fontSize: {
        heading: ["32px", "auto"],
        title: ["16px", "150%"],
        body: ["16px", "150%"],
        caption: ["12px", "150%"],
        code: ["14px", "150%"],
      },
    },
  },
};
