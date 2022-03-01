export interface IConfig {
    env: string // 开发环境
    mock?: string // mock数据
    title: string // 项目title
    baseUrl?: string // 项目地址
    baseApi?: string // api请求地址
    APPID?: string // 公众号appId  一般放在服务器端
    APPSECRET?: string // 公众号appScript 一般放在服务器端
    $cdn: string // cdn公共资源路径
}
const envMap = {}
const globalModules = import.meta.globEager('./*.ts')
Object.entries(globalModules).forEach(([key, value]) => {
    // key.match(/\.\/env\.(\S*)\.ts/)
    const name = key.replace(/\.\/env\.(.*)\.ts$/, '$1')
    envMap[name] = value
})

// 根据环境引入不同配置
export const config = envMap[import.meta.env.VITE_ENV].default
console.log('根据环境引入不同配置', config)

作者：张雨凡
链接：https://juejin.cn/post/7054163548221472799
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
