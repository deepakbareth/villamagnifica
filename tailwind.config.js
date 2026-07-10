/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover: 'var(--color-secondary-hover)',
        },
        bg: {
          ivory: 'var(--color-bg-ivory)',
          dark: 'var(--color-bg-dark)',
        },
        text: {
          main: 'var(--color-text-main)',
          muted: 'var(--color-text-muted)',
        },
        accent: {
          green: 'var(--color-accent-green)',
          viber: 'var(--color-accent-viber)',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
    },
  },
  plugins: [],
}
