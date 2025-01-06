import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1a73e8",
        kopken: {
          primary: {
            DEFAULT: "#9747FF",
            '50': '#f7f2ff',
            '100': '#efe8ff',
            '200': '#e1d4ff',
            '300': '#ccb1ff',
            '400': '#b485ff',
            '500': '#9747ff',
            '600': '#9330f7',
            '700': '#851ee3',
            '800': '#6f18bf',
            '900': '#5b169c',
            '950': '#1B003D',
          }
        }
      },
      fontFamily: {
        kopken: ["var(--font-poppins)"],
        playpen: ["var(--font-playpen)"],
        philosopher: ["var(--font-philosopher)"],
        montserrat: ["var(--font-montserrat)"]        
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
  plugins: [],
} satisfies Config;
