import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  base: '/QPick/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/fonts";
          @import "./src/scss/global";
          @import "./src/scss/colors";
        `,
      },
      
    },
  },

  base: '/QPick/',
  build: {
    outDir: './docs',
  },

   resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
