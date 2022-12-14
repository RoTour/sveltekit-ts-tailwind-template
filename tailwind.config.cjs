/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{svelte,js,ts,html}'],
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
        'poppins-bold': ['poppins-bold'],
        'poppins-medium': ['poppins-medium'],
        'poppins-regular': ['poppins-regular'],
        'poppins-light': ['poppins-light'],
        'popins-thin': ['poppins-thin'],
      }
    },
  },
  plugins: [],
}
