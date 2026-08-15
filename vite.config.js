import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/aluminum_structures_static/',
  server: {
    port: 3002,
    host: true,
    allowedHosts: [
      'thisistest.ru',
      'localhost',
    ],
    proxy: {
      '/api': {
        target: 'https://thisistest.ru/',
        changeOrigin: true,
        secure: false,
      },
    }
  }
})