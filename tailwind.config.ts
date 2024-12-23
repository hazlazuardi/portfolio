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
      },
      fontFamily: {
        kopken: ["var(--font-poppins)"],
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
