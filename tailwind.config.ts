import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        container: "calc(100% - 200px)",
      },
      padding: {
        container: "50px",
      },
      boxShadow: {
        full: "0 4px 8px rgba(0, 0, 0, 0.25), 0 -4px 8px rgba(0, 0, 0, 0.2), 4px 0 8px rgba(0, 0, 0, 0.2), -4px 0 8px rgba(0, 0, 0, 0.2)",
        light:
          "0 1px 3px rgba(0, 0, 0, 0.1), 0 -1px 3px rgba(0, 0, 0, 0.05), 1px 0 3px rgba(0, 0, 0, 0.05), -1px 0 3px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
export default config;
