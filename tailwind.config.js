/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        saasstartertheme: {
          "primary": "#4d4d4d", // Medium Gray
          "primary-content": "#000000", // Black
          "neutral-content": "#a6a6a6", // Dark Gray
          "secondary": "#f2f2f2", // Light Gray
          "accent": "#ffffff", // White
          "neutral": "#000000", // Black
          "base-content": "#ffffff", // White
          "base-100": "#000000", // Black
        },
      },
      "black",
      "lofi",
      "luxury",
      "business",
      "wireframe",
      "nord",
      "coffee",
    ],
  }
}

