/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      'primary': '#4A90E2',
      'secondary': '#50E3C2',
      'background': '#F4F7FC',
      'sidebar-bg': '#FFFFFF',
      'text-primary': '#2D3748',
      'text-secondary': '#718096',
      'accent-red': '#E57373',
      'accent-orange': '#FFB74D',
      'accent-green': '#81C784',
      'accent-blue': '#64B5F6',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
};
export const plugins = [];