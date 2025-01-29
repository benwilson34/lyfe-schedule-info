import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background-rgb) / <alpha-value>)",
        general: {
          500: "rgb(var(--general-500-rgb) / <alpha-value>)",
          DEFAULT: "rgb(var(--general-500-rgb) / <alpha-value>)",
          200: "rgb(var(--general-200-rgb) / <alpha-value>)",
          100: "rgb(var(--general-100-rgb) / <alpha-value>)",
        },
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
        warning: "rgb(var(--warning-rgb) / <alpha-value>)",
        attention: "rgb(var(--attention-rgb) / <alpha-value>)",
        onlight: "rgb(var(--on-light-rgb) / <alpha-value>)",
        ondark: "rgb(var(--on-dark-rgb) / <alpha-value>)",
        onwarning: "rgb(var(--on-warning-rgb) / <alpha-value>)",
        // onattention: "rgb(var(--on-attention-rgb) / <alpha-value>)",
        disabled: {
          100: "rgb(var(--disabled-100-rgb) / <alpha-value>)",
          DEFAULT: "rgb(var(--disabled-200-rgb) / <alpha-value>)",
          200: "rgb(var(--disabled-200-rgb) / <alpha-value>)",
        },
        ondisabled: "rgb(var(--on-disabled-rgb) / <alpha-value>)",
      },
      fontFamily: {
        sans: [
          "Geologica",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        serif: ["serif"],
        // TODO FiraCode for monospace?
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
  // The list of class names/patterns that should be exempt from tree-shaking, like those
  //   dynamically added by rehype plugins (see ./vite.config.ts)
  safelist: ["heading-link"],
} satisfies Config;
