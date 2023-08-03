/** @type {import('tailwindcss').Config} */
module.exports = {
    // paths to all component files
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {},
    daisyui: {
      themes: ["light", "dark", "corporate", "business"]
    },
    plugins: [require('daisyui')],
  };