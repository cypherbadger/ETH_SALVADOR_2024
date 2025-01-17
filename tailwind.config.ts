import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        ball: "url(/ball.svg)",
        "sunrise-upper": "url(/bg-sunrise-upper.png)",
        "sunrise-lower": "url(/bg_sunrise_lower.png)",
        "three-wise-summoners": "url(/three_wise_summoners.png)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        pixelized: [`var(--font-pixelized)`],
      },
    },
  },
  plugins: [require("tailwindcss-fluid-type")],
};
export default config;
