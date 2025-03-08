import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        gloria: ["Gloria Hallelujah", "cursive"],
      },
    },
  },
}
export default config;
