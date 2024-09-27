import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        header: '#D25757',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        ra: ["Raleway"],
        ox: ["Oxanium"]
      },
      backgroundImage: {
        card: "url('./images/cto/card-bg.png')",
        footer: "url('./images/footer/bg.png')",
        'card1': "url('./images/cto/card-1.png')",
        'card2': "url('./images/cto/card-2.png')",
        'card3': "url('./images/cto/card-3.png')",
      },
      
    },
  },
  plugins: [],
};
export default config;
