/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FAFAF8',
          subtle: '#F4F4F1',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F6F6F3',
          inset: '#F0F1ED',
        },
        primary: {
          DEFAULT: '#20231F',
          soft: '#333731',
        },
        secondary: '#5C6159',
        muted: '#858A81',
        border: {
          DEFAULT: '#E4E5DF',
          subtle: '#EFEFEA',
          strong: '#C8CAC2',
        },
        accent: {
          DEFAULT: '#1F6E56',
          hover: '#175442',
          light: '#EBF5F1',
          text: '#0E3B2E',
        },
      },
      fontFamily: {
        sans: ['var(--font-mali)', 'Mali', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mali: ['var(--font-mali)', 'Mali', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        DEFAULT: '8px',
        'md': '10px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'subtle': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.02)',
        'elevated': '0 4px 20px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
};
