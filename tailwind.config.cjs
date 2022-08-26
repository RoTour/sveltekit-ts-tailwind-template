/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'primary-text': 'var(--color-text-primary)',
        'secondary-text': 'var(--color-text-secondary)',
      },
      height: {
        'screen-minus-topbar': 'calc(100vh - 3rem)'
      },
      fontFamily: {
        'ubuntu': ['ubuntu'],
        'ubuntu-bold': ['ubuntu-bold'],
      }
    },
  },
  plugins: [],
}
