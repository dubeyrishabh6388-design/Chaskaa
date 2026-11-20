/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        chaskaa: {
          50: '#fff4f3',
          100: '#ffe5e3',
          200: '#ffcdc8',
          300: '#ffa79e',
          400: '#fb7568',
          500: '#ec4b3f',
          600: '#d93025',
          700: '#b52119',
          800: '#8f1d19',
          900: '#5c0f18',
          950: '#3a0811',
        },
        wine: {
          50: '#fdf4f5',
          100: '#f9e6e8',
          200: '#f0cbd0',
          300: '#e2a3ad',
          400: '#cd7081',
          500: '#b44a61',
          600: '#9a344e',
          700: '#7e2640',
          800: '#612036',
          900: '#4c1024',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(58, 8, 17, 0.04), 0 8px 24px rgba(58, 8, 17, 0.06)',
        float: '0 12px 32px rgba(58, 8, 17, 0.16)',
      },
      backgroundImage: {
        'sidebar-wine': 'linear-gradient(175deg, #6a1222 0%, #7c1b28 42%, #8d232a 100%)',
      },
    },
  },
  plugins: [],
};
