import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint2'

export default defineConfig({
  server: {
    //port: 4000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist'
  },
  plugins: [
    react(),
    eslint({
      include: ['src/**/*.ts', 'src/**/*.tsx']
    })
  ]
})