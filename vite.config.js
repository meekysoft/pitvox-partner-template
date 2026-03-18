import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Ensure linked packages resolve peer deps from this project's node_modules
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query'],
  },
})
