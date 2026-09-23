/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'slate-900': '#f8fafc', /* Main Background (Light) */
          'slate-800': '#ffffff', /* Surface Background (White) */
          'slate-700': '#e2e8f0', /* Borders */
          'slate-400': '#64748b', /* Muted Text */
          'slate-300': '#475569', /* Secondary Text */
          'slate-50': '#0f172a',  /* Primary Text (Dark) */
          'indigo-500': '#2563eb', /* Royal Blue */
          'indigo-400': '#3b82f6', /* Light Blue */
          'emerald-400': '#10b981', /* Emerald Green */
        }
      },
      fontFamily: {
        'heading': ['Outfit', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
