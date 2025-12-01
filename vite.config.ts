import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/38bdc31d-5b80-424e-9f72-74c15260c92b/preview',
  plugins: [react()],
  server: {
    port: 5174,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      port: 5174,
    },
  },
})
