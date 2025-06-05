import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: false,
    minify: 'esbuild', 
    chunkSizeWarningLimit: 1000, 
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            if (id.includes('@react-pdf/renderer')) {
              return 'pdf-vendor'
            }
            if (id.includes('react-markdown')) {
              return 'markdown-vendor'
            }
            if (id.includes('react-pdf-tailwind')) {
              return 'pdf-tailwind-vendor'
            }
            return 'vendor'
          }
        }
      }
    }
  },
  plugins: [
    react(), 
    tailwindcss()
  ],
})
