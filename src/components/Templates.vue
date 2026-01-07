<template>
  <section
    id="templates"
    class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-20"
  >
    <!-- Fundo similar às outras seções -->
    <div class="absolute inset-0 -z-10 bg-navBlack"></div>

    <!-- Container principal -->
    <div class="text-center z-10 w-full max-w-6xl mx-auto relative">
      <!-- Título da seção -->
      <motion.h2
        :initial="scaleIn.hidden"
        :while-in-view="scaleIn.visible"
        class="text-center text-2xl sm:text-3xl font-bold mb-16 gradient-text"
      >
        {{ $t('templates.tituloSecao') }}
      </motion.h2>

      <!-- Descrição da seção -->
      <motion.p
        :initial="popUp.hidden"
        :while-in-view="popUp.visible"
        class="text-center font-semibold sm:text-lg mb-6 sm:mb-14 text-thirdTheme max-w-3xl mx-auto"
      >
        {{ $t('templates.subtituloSecao') }}
      </motion.p>

      <!-- Container Grid que engloba todos os cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        <!-- CARD INDIVIDUAL -->
        <motion.div
          v-for="template in templates"
          :key="template.id"
          :initial="{ opacity: 0, scale: 0.95 }"
          :while-in-view="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.5, delay: template.id * 0.1 }"
          class="group p-2 relative"
        >
          <!-- Card minimalista -->
          <div
            class="relative h-full bg-gradient-to-b from-white/3 to-white/1 rounded-xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-thirdTheme/30 hover:shadow-2xl hover:shadow-thirdTheme/10"
          >
            <!-- Badge de destaque Mais vendido(opcional) -->
            <div
              v-if="template.destaque"
              class="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-thirdTheme to-secondaryTheme text-navBlack text-xs font-bold uppercase tracking-wider"
            >
              {{ $t('templates.destaque') }}
            </div>

            <!-- Conteúdo do card -->
            <div class="flex flex-col h-full p-6">
              <!-- Título e descrição -->
              <div class="mb-6 grow flex flex-col">
                <h3 class="text-xl font-bold text-myWhite mb-3">
                  {{ template.nome }}
                </h3>

                <p class="text-sm text-left text-myWhite/70 leading-relaxed mb-4">
                  {{ template.desc }}
                </p>

                <!-- Container Recursos principais -->
                <div class="mt-2 space-y-1">
                  <!-- container que engloba o icone e o texto do recurso -->
                  <div
                    v-for="(recurso, i) in template.recursos"
                    :key="i"
                    class="flex items-start gap-2"
                  >
                    <v-icon name="fa-check-circle" scale="0.9" class="text-thirdTheme mt-0.5" />
                    <span class="text-xs text-myWhite/60">{{ recurso }}</span>
                  </div>
                </div>
              </div>

              <!-- Tecnologias usadas -->
              <div class="mb-6">
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(tech, techIndex) in template.tech_usadas"
                    :key="techIndex"
                    class="px-2 py-1 text-xs font-medium rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-white/1 text-myWhite/80 hover:bg-thirdTheme/10 hover:text-thirdTheme hover:border-thirdTheme/30 transition-all duration-300"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Preço (se aplicável) -->
              <div v-if="template.preco" class="mb-6 text-center">
                <div class="inline-flex items-baseline gap-2">
                  <span class="text-2xl font-bold text-thirdTheme">{{ template.preco }}</span>
                  <span v-if="template.preco_original" class="text-sm text-myWhite/50 line-through">
                    {{ template.preco_original }}
                  </span>
                </div>
                <p v-if="template.licenca" class="text-xs text-myWhite/40">
                  {{ template.licenca }}
                </p>
              </div>

              <!-- CONTAINER de Botões de ação -->
              <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/5">
                <!-- Botão de visualização -->
                <a
                  :href="template.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-thirdTheme/30 text-thirdTheme hover:bg-thirdTheme/10 transition-all duration-300 group/demo"
                >
                  <v-icon
                    name="hi-eye"
                    scale="1.1"
                    class="group-hover/demo:scale-110 transition-transform duration-300"
                  />
                  <span class="font-medium text-sm">{{ $t('templates.verDemo') }}</span>
                </a>

                <!-- Botão de compra -->
                <a
                  :href="template.comprar"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg gradient-btn text-navBlack font-bold hover:shadow-lg hover:shadow-thirdTheme/30 transition-all duration-300 group/buy"
                >
                  <v-icon
                    name="fa-shopping-cart"
                    scale="1.1"
                    class="group-hover/buy:scale-110 transition-transform duration-300"
                  />
                  <span class="text-sm">{{ $t('templates.comprarAgora') }}</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <!-- Mensagem adicional para entrar em contato personalizado -->
      <motion.div
        :initial="popUp.hidden"
        :while-in-view="popUp.visible"
        class="mt-16 flex flex-col items-center gap-6"
      >
        <!-- Texto principal -->
        <p class="text-thirdTheme text-center text-lg font-medium max-w-2xl mx-auto">
          {{ $t('templates.personalizacao') }}
        </p>

        <!-- Container do botão -->
        <div class="flex max-smm:flex-col flex-row justify-center items-center gap-4 md:gap-6">
          <!-- Botão de contato para PT (WhatsApp) -->
          <a
            v-if="locale === 'pt'"
            :href="linkPt"
            class="group relative px-6 py-3 rounded-xl gradient-btn transition-all duration-500 hover:scale-105"
          >
            <span class="text-navBlack font-bold text-[16px] tracking-wide flex items-center gap-3">
              <v-icon name="ri-whatsapp-fill" scale="1.2" class="group-hover:animate-bounce" />
              {{ $t('templates.entreEmContato') }}
            </span>
          </a>

          <!-- Botão de contato para EN (Telegram) -->
          <a
            v-if="locale === 'en'"
            :href="linkEn"
            class="group relative px-6 py-3 rounded-xl gradient-btn transition-all duration-500 hover:scale-105"
          >
            <span class="text-navBlack font-bold text-[16px] tracking-wide flex items-center gap-3">
              <v-icon name="co-telegram-plane" scale="1.2" class="group-hover:animate-bounce" />
              {{ $t('templates.entreEmContato') }}
            </span>
          </a>
        </div>
      </motion.div>

      <!-- Separador -->
      <div
        class="w-[80%] h-[2px] bg-gradient-to-r from-transparent via-thirdTheme/60 to-transparent mx-auto mt-16"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { motion } from 'motion-v'
import { scaleIn, popUp } from '@/animation'
import { useI18n } from 'vue-i18n'
import { addIcons } from 'oh-vue-icons'
import {
  HiEye,
  FaCheckCircle,
  FaShoppingCart,
  RiWhatsappFill,
  CoTelegramPlane,
  FaEye,
} from 'oh-vue-icons/icons'

addIcons(HiEye, FaCheckCircle, FaShoppingCart, RiWhatsappFill, CoTelegramPlane, FaEye)

const { locale, tm } = useI18n()

// Links de contato específicos para templates
const msgPt = encodeURIComponent('Olá, gostaria de personalizar um template para meu projeto.')
const msgEn = encodeURIComponent('Hello, I would like to customize a template for my project.')
const linkPt = `https://wa.me/5581997052877?text=${msgPt}`
const linkEn = `https://t.me/Lopes_93?text=${msgEn}`

const templates = computed(() => {
  return tm('templates.lista') as Array<{
    id: number
    nome: string
    desc: string
    tech_usadas: string[]
    recursos: string[]
    demo: string
    comprar: string
    preco?: string
    preco_original?: string
    licenca?: string
    destaque?: boolean
  }>
})
</script>
