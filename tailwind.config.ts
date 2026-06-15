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
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#63a6ff",
          500: "#63a6ff",
          600: "#4f90e6",
          700: "#3b7fd4",
          800: "#2563eb",
          900: "#1e40af",
        },
        secondary: {
          50: "#f3faf0",
          100: "#e5f5cf",
          200: "#c8e6b0",
          300: "#a3d484",
          400: "#7cbc58",
          500: "#5a9e3a",
          600: "#4a8530",
          700: "#3d6b28",
          800: "#335523",
          900: "#2a4620",
        },
        brand: {
          blue: "#63a6ff",
          green: "#5a9e3a",
          dark: "#303843",
          sky: "#d9f1ff",
          minth: "#e5f5cf",
        },
        dark: {
          DEFAULT: "#303843",
          50: "#f5f5f5",
          100: "#e0e0e0",
          200: "#bdbdbd",
          300: "#9e9e9e",
          400: "#757575",
          500: "#616161",
          600: "#424242",
          700: "#303843",
          800: "#212121",
          900: "#121212",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Plus Jakarta Sans", "Arial", "sans-serif"],
        heading: ["Poppins", "Plus Jakarta Sans", "Arial", "sans-serif"],
      },
      maxWidth: {
        container: "82.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
