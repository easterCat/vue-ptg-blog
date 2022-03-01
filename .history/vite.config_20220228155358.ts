import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

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


export default ({ mode, command }: ConfigEnv): UserConfigExport => {
    const isBuild = command === 'build'
    return defineConfig({
        plugins: [
            viteMockServe({
                ignore: /^_/, // 正则匹配忽略的文件
                mockPath: 'mock', // 设置mock.ts 文件的存储文件夹
                localEnabled: true, // 设置是否启用本地 xxx.ts 文件，不要在生产环境中打开它.设置为 false 将禁用 mock 功能
                prodEnabled: true, // 设置生产环境是否启用 mock 功能
                watchFiles: true, // 设置是否监视mockPath对应的文件夹内文件中的更改
                // 代码注入
                injectCode: ` 
            import { setupProdMockServer } from '../mock/_createProductionServer';
            setupProdMockServer();
          `
            })
        ]
    })
}
