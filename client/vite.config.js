import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
    proxy: {
        '/api': {
          target: 'http://localhost:3000/',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, "")
      },
    },
  },
  plugins: [react()]
})