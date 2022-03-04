import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

console.log(import.meta.env)

const app = createApp(App)
app.use(store)
app.mount('#app')
