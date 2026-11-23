/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        /* Crimson family sampled from the reference dashboard (#B00428 primary,
           #51010E sidebar). Kept as the brand "chaskaa" scale. */
        chaskaa: {
          50: '#fde6ea',
          100: '#fbcfd8',
          200: '#f7aebd',
          300: '#f0859b',
          400: '#e2526e',
          500: '#cb1c3c',
          600: '#b00528',
          700: '#94031f',
          800: '#760219',
          900: '#51010e',
          950: '#350108',
        },
        /* Deep wine family for the sidebar / dark panels. */
        wine: {
          50: '#fdf4f5',
          100: '#f9e3e6',
          200: '#f0c3ca',
          300: '#e095a2',
          400: '#c95d72',
          500: '#a8324c',
          600: '#8c1f38',
          700: '#730216',
          800: '#5b0111',
          900: '#51010e',
          950: '#3a010a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(81, 1, 14, 0.04), 0 8px 24px rgba(81, 1, 14, 0.06)',
        float: '0 12px 32px rgba(81, 1, 14, 0.18)',
      },
      backgroundImage: {
        /* Reference sidebar: #730216 at the very top fading into #51010E. */
        'sidebar-wine': 'linear-gradient(180deg, #730216 0%, #5c0110 26%, #51010e 62%, #4d010d 100%)',
        /* Reference primary button: flat crimson. */
        'brand-gradient': 'linear-gradient(95deg, #c8102e 0%, #b00528 60%, #a80423 100%)',
        /* Reference active nav pill: orange -> crimson, left to right. */
        'active-nav': 'linear-gradient(90deg, #fc5e1d 0%, #e0432b 45%, #c2223a 100%)',
        /* Deep wine promo / hero panels. */
        'hero-wine': 'linear-gradient(135deg, #5b0111 0%, #730216 48%, #a80423 100%)',
      },
    },
  },
  plugins: [],
};
