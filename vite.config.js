import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/intro-js-vue/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@":  fileURLToPath(new URL('./src', import.meta.url)),
      vue: '@vue/compat',
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
})

