import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        preto: "var(--black)",
        branco: "var(--white)"
      },
      fontSize: {
        large: "36px",
        medium: "24px",
        default: "16px"
      },
      fontFamily: {
        karla: "var(--karla)"
      },
      backgroundImage: {
        'radial-custom': 'radial-gradient(circle, rgba(80, 80, 80, 1) 0%, rgba(0, 0, 0, 1) 100%)',
      },
      // Media
      // screens: {
      //   "2lg": "1920px"
      // },
    },
  },
  plugins: [],
};
export default config;
