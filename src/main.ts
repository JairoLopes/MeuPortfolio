import '@/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  ViFileTypeVue,
  ViFileTypeReactjs,
  ViFileTypeTypescriptOfficial,
  ViFileTypeTailwind,
  CoJavascript,
  ViFileTypeNode,
  IoLogoGithub,
  IoInformationCircle,
  FaUser,
  IoLogoLinkedin,
} from 'oh-vue-icons/icons'

addIcons(
  ViFileTypeVue,
  ViFileTypeReactjs,
  ViFileTypeTypescriptOfficial,
  ViFileTypeTailwind,
  CoJavascript,
  ViFileTypeNode,
  IoLogoGithub,
  IoInformationCircle,
  FaUser,
  IoLogoLinkedin,
)

const app = createApp(App)

app.use(MotionPlugin)

app.component('v-icon', OhVueIcon)

app.mount('#app')
