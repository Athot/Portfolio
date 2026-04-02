/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0F172A",
        foreground: "#E5E7EB",
        // give me pink
        primary: "#FF007F",
        secondary: "#22C55E",
        muted: "#94A3B8",
        // give me yellow
        buttonColor: "#FFD700",
        paragraphColor: "#E5E7EB",
      },
      fontSize: {
        hero: "3.5rem",
      },
    },
  },
  plugins: [],
};
