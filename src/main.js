import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import { routers } from './routers'

const app = createApp(App)
app.use(routers)
app.mount('#app')
