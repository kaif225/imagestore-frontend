import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: ['*']
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  // Add this resolve configuration
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  // Add this esbuild configuration
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  }
})