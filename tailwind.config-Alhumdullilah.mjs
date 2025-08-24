/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // looks inside src
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#e60012',
        'brand-gray': '#2e2e2e',
        'brand-gold': '#c9a227',
      },
    },
  },
  plugins: [],
};
