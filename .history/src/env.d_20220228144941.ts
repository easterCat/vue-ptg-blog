/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly VITE_ENV: string; // 环境
    readonly VITE_OUTPUT_DIR: string; // 打包目录
}
interface ImportMeta {
    readonly env: ImportMetaEnv;
}

作者：张雨凡
链接：https://juejin.cn/post/7054163548221472799
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
