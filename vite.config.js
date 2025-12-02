import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

<<<<<<< HEAD
const base = process.env.VITE_BASE_URL || '/rrnagar-frontend/';

=======
>>>>>>> f6b956d (fix: move frontend source to root src and set dev proxy to backend:4000)
export default defineConfig({
  base: '/rrnagar-frontend/', // keep your GitHub Pages base if needed
  plugins: [react()],
  server: {
    host: true,
<<<<<<< HEAD
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
=======
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
        // rewrite not necessary for relative paths; keep if your backend expects no /api prefix
        // rewrite: (path) => path.replace(/^\/api/, ''),
>>>>>>> f6b956d (fix: move frontend source to root src and set dev proxy to backend:4000)
      },
    },
  },
});
