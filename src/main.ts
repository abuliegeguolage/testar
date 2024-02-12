import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import vueI18n from './lang'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import '@/assets/global.less'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(vueI18n)

app.mount('#app')
