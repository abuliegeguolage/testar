import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import '@/assets/global.less'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
