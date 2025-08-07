import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Add this import

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This helps Vite resolve Bootstrap's CSS
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  }
})