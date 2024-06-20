/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        claro: '#101010',
        escuro: '#0B0B0B',
        verde: '#97EDAA',
      },

      screens: {
        'sm': {'max': '1px'},
        'md': {'max': '767px'},
        'lg': {'max': '867px'},
        'xl': {'max': '562px'},
        'xls': {'max': '980px'}, // Super grande
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
