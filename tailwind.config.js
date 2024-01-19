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
          "primary": "#000000", // Black
          "primary-content": "#ffffff", // White
          "neutral-content": "#f2f2f2", // Light Gray
          "secondary": "#4d4d4d", // Medium Gray
          "accent": "#a6a6a6", // Dark Gray
          "neutral": "#000000", // Black
          "base-content": "#000000", // Black
          "base-100": "#ffffff", // White
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

