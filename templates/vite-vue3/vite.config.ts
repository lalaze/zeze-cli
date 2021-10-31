import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from "path"

// 跟rollup引插件差不多
export default defineConfig({
  //定义别名
  alias: {
    "@": path.resolve(__dirname, "src"),
    coms: path.resolve(__dirname, "src/components"),
  },
  plugins: [vue(),vueJsx()]
})
