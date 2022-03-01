import { defineStore } from 'pinia'

export const useAppStore = defineStore({
    id: 'app',
    state: () => {
        return {
            config: 'app'
        }
    },
    actions: {
        setData(data: any) {
            console.log(data)
            this.config = data
        }
    }
})

作者：张雨凡
链接：https://juejin.cn/post/7054163548221472799
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
