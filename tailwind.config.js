/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        skillsphere: {
          primary: "#8B949E", // Soft Slate for primary buttons or highlights
          secondary: "#4D5562", // Muted Steel for secondary elements
          accent: "#93A4B1", // Subtle Cool Gray for interactive accents
          neutral: "#24292F", // Dark Graphite for card surfaces or backgrounds
          "base-100": "#161B22", // Deep Onyx for the main background
          "base-200": "#1C2128", // Slightly lighter Onyx for contrast in components
          "text-primary": "#E6EDF3", // Cool White for primary text
          "text-secondary": "#A1A7AF", // Soft Gray for secondary text
          info: "#58A6FF", // Muted Sky Blue for informational elements
          success: "#3FB950", // Calm Green for success messages
          warning: "#F0883E", // Subtle Orange for warnings
          error: "#FF6A69", // Soft Coral Red for errors
        },
        primary: {
          light: "#f5f5f7",
          dark: "#0f0f0f",
        },
        accent: {
          light: "#8685ef",
          dark: "#a594f9",
          purple: "#8685ef",
          blue: "#60a5fa",
          green: "#10b981",
          orange: "#f59e0b",
          pink: "#ec4899",
        },
        neutral: {
          50: "#f8f7ff",
          100: "#eeeef0",
          200: "#d1d1d6",
          800: "#1c1c1e",
          900: "#151516",
        },
        text: {
          light: "#2c2c2e",
          dark: "#e5e5e7",
        },
        section: {
          light: "#ececee",
          dark: "#161618",
        },
        footer: {
          light: "#e5e5e7",
          dark: "#161618",
        },
      },
      fontFamily: {
        display: ["Cabinet Grotesk", "sans-serif"],
        sans: ["Satoshi", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        widest: ".25em",
        "super-wide": ".5em",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in": "slideIn 0.7s ease-out forwards",
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "float-fast": "float 2s ease-in-out infinite",
        "laser-rotate": "laser-rotate 10s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "laser-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
