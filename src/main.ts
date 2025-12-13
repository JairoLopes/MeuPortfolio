import '@/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from '@/i18n'
import { OhVueIcon } from 'oh-vue-icons'

const app = createApp(App)

app.component('v-icon', OhVueIcon)
app.use(i18n)
app.mount('#app')
