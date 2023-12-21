import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Adjusting to a cooler, more Nordic palette
        primary: {
          "50": "#eef2ff",
          "100": "#e0e7ff",
          "200": "#c7d2fe",
          "300": "#a5b4fc",
          "400": "#818cf8",
          "500": "#6366f1",  // Adjusted primary color
          "600": "#4f46e5",
          "700": "#4338ca",
          "800": "#3730a3",
          "900": "#312e81",
          "950": "#23215b"
        },
        // Adding additional color shades typical in Nordic designs
        secondary: {
          "100": "#f0f9ff",
          "200": "#e0f2fe",
          "300": "#bae6fd",
          "400": "#7dd3fc",
          "500": "#38bdf8",
          "600": "#0ea5e9",
          "700": "#0284c7",
          "800": "#0369a1",
          "900": "#075985",
          "950": "#0c4a6e"
        },
      },
      fontFamily: {
        'body': ['Nunito', 'sans-serif'],
        'sans': ['Nunito', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // Adding any additional theme-specific extensions
      // ...
    },
  },
  plugins: [],
}

export default config;
