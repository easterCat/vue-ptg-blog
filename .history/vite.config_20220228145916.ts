import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'

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
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
})
