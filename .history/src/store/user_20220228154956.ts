import { defineStore } from 'pinia'
import { useAppStore } from './app'

export const useUserStore = defineStore({
    id: 'user',
    state: () => {
        return {
            name: '张三',
            age: 18
        }
    },
    getters: {
        fullName: (state) => {
            return state.name + '丰'
        }
    },
    actions: {
        updateState(data: any) {
            this.$state = data
            this.updateAppConfig()
        },
        updateAppConfig() {
            const appStore = useAppStore()
            appStore.setData('app-update')
        }
    },
    // 开启数据缓存
    persist: {
        key: 'user',
        storage: sessionStorage, // 数据存储位置，默认为 localStorage
        paths: ['name'], // 用于部分持久化状态的点表示法路径数组，表示不会持久化任何状态（默认为并保留整个状态）
        overwrite: true
    }

作者：张雨凡
链接：https://juejin.cn/post/7054163548221472799
        来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
})
