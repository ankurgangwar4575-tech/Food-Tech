export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'slate-900': '#f8fafc', 
          'slate-800': '#ffffff', 
          'slate-700': '#e2e8f0', 
          'slate-400': '#64748b', 
          'slate-300': '#475569', 
          'slate-50': '#0f172a',  
          'indigo-500': '#2563eb', 
          'indigo-400': '#3b82f6', 
          'emerald-400': '#10b981', 
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
