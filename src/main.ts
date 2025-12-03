import '@/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from '@/i18n'
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
  MdLanguage,
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
  MdLanguage,
)

const app = createApp(App)

app.component('v-icon', OhVueIcon)
app.use(i18n)
app.mount('#app')
