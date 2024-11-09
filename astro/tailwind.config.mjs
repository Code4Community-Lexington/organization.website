/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  //TODO: Alternate theme for dark mode?
  theme: {
    extend: {
      colors: {
        "bg-primary": "#e5e1da",
        "bg-secondary-1": "#37928d",
        "bg-secondary-2": "#e07a5f",
        "bg-secondary-3": "#8fbb98",
        text: "#272d2a",
      },
      //TODO: Solidify font choice
      fontFamily: {
        "source-sans-pro": ["Source Sans Pro", "sans"],
        inter: ["Inter Variable", "sans"],
      },
      keyframes: {
        "slide-l-r": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-r-l": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-l-r-1": "slide-l-r 1.25s ease-in-out",
        "slide-l-r-2": "slide-l-r 1s ease-in-out",
        "slide-l-r-3": "slide-l-r 0.75s ease-in-out",
        "slide-r-l-1": "slide-r-l 1.50s ease-in-out",
      },
    },
  },
  plugins: [],
};
