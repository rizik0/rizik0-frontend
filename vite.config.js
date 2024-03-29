import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
const __dirname = '.'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        gamepage: path.resolve(__dirname, 'src/pages/gamepage.html'),
        lobbypage: path.resolve(__dirname, 'src/pages/lobbypage.html'),
        techpage: path.resolve(__dirname, 'src/pages/techpage.html')
      }
    }
  }
})
