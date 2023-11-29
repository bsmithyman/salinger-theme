module.exports = {
  content: ["./hugo_stats.json"],
  darkMode: ['class'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Fira Sans", "sans-serif"],
      serif: ["Caveat", "serif"],
      mono: ["Fira Mono", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    logs: false,
    themes: [
      {
        lit: {
          ...require("daisyui/src/theming/themes")["[data-theme=corporate]"],
        },
      },
      {
        dim: {
          ...require("daisyui/src/theming/themes")["[data-theme=business]"],
        },
      },
    ],
    darkTheme: "dim",
  },
};
