import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you already have a vite.config.js, merge the server.proxy section below into it.
export default defineConfig({
  plugins: [react()],
  server: {
    // listen on all interfaces so --host works and container friendly
    host: true,
    port: 5173,
    proxy: {
      // forward /api/* to the mock API on port 4000
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
