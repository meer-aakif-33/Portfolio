import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    host: 'localhost',
    hmr: {
      protocol: 'ws',         // Force WebSocket protocol
      host: 'localhost',      // Match the host
      port: 5173,             // Match your dev port
      overlay: false          // Disable red error overlay
    }
  }
})
