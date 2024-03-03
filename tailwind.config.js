/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "background-body": "var(--background-body)",
        "text-main": "var(--text-main)",
        "text-secondary": "var(--text-secondary)",
        "primary-color": "var(--primary-color)",
        "dark-background-body": "var(--dark-background-body)",
      },
      backgroundColor: {
        "background-body": "var(--background-body)",
        "text-main": "var(--text-main)",
        "text-secondary": "var(--text-secondary)",
        "primary-color": "var(--primary-color)",
        "dark-background-body": "var(--dark-background-body)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
