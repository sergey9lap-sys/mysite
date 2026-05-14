import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0D0D11",
        panel: "#17171D",
        line: "#2A2A35",
        cherry: "#5A1E36",
        rose: "#7B2848",
        sakura: "#D88FA3",
        glow: "#E6B8C4",
        bone: "#F5F1EB",
        muted: "#A8A3A0",
        violet: "#6D5BA6",
        linen: "#E7DDD4",
        taupe: "#C6B7A6",
        mauve: "#8A6A72",
        ashrose: "#B8A398",
        warmink: "#2A2528",
      },
      fontFamily: {
        display: ['"Times New Roman"', "Times", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        rose: "0 24px 90px rgba(123, 40, 72, 0.28)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      backgroundImage: {
        "soft-grid":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
