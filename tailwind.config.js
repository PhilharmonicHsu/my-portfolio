/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#7D3C98", // 紫色
          background: "#000000", // 黑色
        },
      },
    },
    plugins: [],
  };
  