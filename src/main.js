import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'

const app = createApp(App).use(router)
app.mount('#app')
