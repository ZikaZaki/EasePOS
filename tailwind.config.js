/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include HTML files
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/TS files
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: "700",
              color: "#1a202c", // Gray-900
            },
            p: {
              color: "#4a5568", // Gray-600
            },
          },
        },
      },
      spacing: {
        "screen-dvh": "100dvh",
      },
      minHeight: {
        "screen-dvh": "100dvh",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
