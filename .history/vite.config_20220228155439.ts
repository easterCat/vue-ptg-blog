import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

// https://vitejs.dev/config/
export default ({ mode, command }: ConfigEnv): UserConfigExport => {
    const isBuild = command === 'build'
    return defineConfig({
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
        ],
        server: {
            host: '0.0.0.0',
            proxy: {
              // 字符串简写写法
              '/foo': 'http://localhost:4567',
              // 选项写法
              '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
              },
              // 正则表达式写法
              '^/fallback/.*': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/fallback/, '')
              }
              // 使用 proxy 实例
              // "/api": {
              //   target: "http://jsonplaceholder.typicode.com",
              //   changeOrigin: true,
              //   configure: (proxy, options) => {
              //     // proxy 是 'http-proxy' 的实例
              //   },
              // },
            }
          },
          
          作者：张雨凡
          链接：https://juejin.cn/post/7054163548221472799
          来源：稀土掘金
          著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
    })
}
