import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/', // 默认为根路径，部署到GitHub Pages时可能需要修改为仓库名
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