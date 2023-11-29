module.exports = {
  content: ["./hugo_stats.json"],
  darkMode: ['class'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      serif: ["Cabin Sketch", "serif"],
      mono: ["Anonymous Pro", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    logs: false,
    themes: [
      {
        lit: {
          ...require("daisyui/src/theming/themes")["[data-theme=lofi]"],
        },
      },
      {
        dim: {
          "primary": "#7480ff",
          "secondary": "#ff52d9",
          "accent": "#00cdb7",
          "neutral": "#713f12",
          "base-100": "#292524",
          "info": "#00b5ff",
          "success": "#ffffff",
          "warning": "#ffbe00",
          "error": "#ff5861",
        },
      }
    ],
    darkTheme: "dim",
  },
};
