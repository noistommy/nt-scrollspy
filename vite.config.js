import { defineConfig } from 'vite'
import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'

const commonConfig = {
  plugins: [vue()],
}

const libConfig = {
  ...commonConfig,
  build: {
    lib: {
      entry: resolve(__dirname, './src'),
      name: 'nt-scrollspy',
      fileName: (format) => `nt-scrollspy.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        // Use `index.css` for css
        assetFileNames: assetInfo => {
          if (assetInfo.name == "style.css") return "nt-scrollspy.css"
          return assetInfo.name
        }
      }
    }
  }
}

const demoConfig = defineConfig({
  ...commonConfig,
  root: "./demo",
  base: process.env.NODE_ENV === 'production' ? '/nt-scrollspy/' : '/',
  server: {
    port: 5905
  }
})

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const executionMode = process.env.MODE || "lib";

  const mode = command === 'build' ? "production" : "development";

  if(executionMode === 'demo') {
    return { ...demoConfig, mode }
  } else {
    return { ...libConfig, mode }
  }
})

