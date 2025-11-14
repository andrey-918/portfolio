import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from '@nabla/vite-plugin-eslint'

export default defineConfig({
  plugins: [
    react(),
    eslint() // простой вызов без конфигурации
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist'
  }
})