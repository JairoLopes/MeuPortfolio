import { createI18n } from 'vue-i18n'

// importa os arquivos de tradução que criamos acima
import pt from '@/locales/pt.json'
import en from '@/locales/en.json'

// pega os tipos dos arquivos json, e cria um novo tipo chamado MessageSchema
type MessageSchema = typeof pt | typeof en

// criando a instancia do i18n
export const i18n = createI18n<[MessageSchema], 'pt' | 'en'>({
  legacy: false, // permite Composition API
  locale: 'en', // Define qual idioma o site vai carregar quando abrir.
  messages: {
    pt, // `pt` é o conteúdo do arquivo `pt.json`
    en, // `en` é o conteúdo do arquivo `en.json`
  },
  warnHtmlMessage: false, // Desativa avisos de HTML
})
