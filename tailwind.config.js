/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      margin: '30px',
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#fbbf24',
        seccondary: '#64748b',
        dark: '#0f172a',
      },
    },
  },
  plugins: [],
};
