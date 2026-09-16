/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: '#162327',
          dark: '#203338',
          DEFAULT: '#284047',
          muted: '#3b555e',
          light: '#eff6f7',
        },
        vitality: {
          DEFAULT: '#80b93b',
          dark: '#285e1b',
          text: '#235817',
          hover: '#73ab33',
          light: '#f2f9eb',
          soft: '#e4f3d4',
        },
        ocean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
        },
        copper: {
          DEFAULT: '#b45309',
          light: '#fef3c7',
          warm: '#d97706',
        }
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(32, 51, 56, 0.08)',
        'card': '0 10px 30px -4px rgba(32, 51, 56, 0.07)',
        'elevated': '0 20px 40px -10px rgba(32, 51, 56, 0.12)',
      },
      borderRadius: {
        'xl': '0.875rem',
        '2xl': '1.25rem',
      }
    },
  },
  plugins: [],
};
