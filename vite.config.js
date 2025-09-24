import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/lks/', // 设置为GitHub仓库名称，用于GitHub Pages部署
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})