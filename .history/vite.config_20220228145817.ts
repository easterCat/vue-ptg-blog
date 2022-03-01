import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    // 在文件中添加以下内容
    server: {
        host: '0.0.0.0'
    },
    css: {
        preprocessorOptions: {
          scss: {
            additionalData: `
              @import "@/styles/mixin.scss";
              @import "@/styles/variables.scss";
              `,
          },
        },
      },
    
    作者：张雨凡
    链接：https://juejin.cn/post/7054163548221472799
    来源：稀土掘金
    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
})
