/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "55%, 45%", // Custom grid width, where the first column is 200px and the second column takes the remaining space
      },
    },
  },
  plugins: [],
};
