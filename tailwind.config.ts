import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#D89A17",
          "primary-content": "#ffffff",
          secondary: "#ffedd5",
          accent: "#393939",
          "accent-content": "#ffffff",
          neutral: "#ffffff",
          "base-100": "#ffffff",
          info: "#06b6d4",
          "info-content": "#ffffff",
          success: "#84cc16",
          warning: "#ffffff",
          error: "#D95959",
          "error-content": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
