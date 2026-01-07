<template>
  <section
    id="home"
    class="min-h-screen flex flex-col items-center justify-center relative z-20 overflow-hidden pt-[7%] px-4 sm:px-6 md:px-8"
  >
    <!-- Background do Home -->
    <BackgroundVideo />

    <!-- Container principal com mais espaçamento -->
    <div class="text-center z-10 w-full max-w-4xl mx-auto relative py-12 md:py-20">
      <!-- Nome sem gradiente, cor clara do tema -->
      <motion.h1
        :initial="scaleIn.hidden"
        :while-in-view="scaleIn.visible"
        class="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 text-mainTheme px-4"
      >
        Jairo Lopes
      </motion.h1>

      <!-- Container da animação crossfade isolada -->
      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8 }"
        class="mb-2 md:mb-7 px-4"
      >
        <CrossfadeTech
          :textos="[
            'Vue.js',
            'Pinia',
            'Tailwind CSS',
            'DaisyUI',
            'Typescript',
            'JavaScript',
            'Node.js',
          ]"
          classesTw="text-2xl md:text-3xl lg:text-4xl font-bold text-secondaryTheme"
        />
      </motion.div>

      <!-- Descrição -->
      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.2 }"
        class="max-w-2xl mx-auto mb-6 md:mb-10 px-6 relative"
      >
        <p
          v-html="$t('home.descricao')"
          class="text-md md:text-lg text-left text-myWhite leading-relaxed p-3"
        ></p>
      </motion.div>

      <!-- Botões templates e projetos-->
      <motion.div
        :initial="slideUp.hidden"
        :while-in-view="slideUp.visible"
        class="flex max-smm:flex-col flex-row justify-center items-center gap-4 md:gap-6 mb-4 px-4"
      >
        <!-- Botão Templates -->
        <a
          href="#templates"
          class="group relative px-6 py-3 rounded-xl gradient-btn min-w-[169px] overflow-hidden transition-all duration-100 hover:scale-105"
        >
          <!-- SPAN QUE ENGLOBA ICONE E TEXTO DO BOTÃO -->
          <span
            class="text-navBlack font-bold text-[16px] tracking-wide flex items-center gap-3 relative z-10"
          >
            <v-icon
              name="ri-layout-2-fill"
              scale="1.2"
              class="transition-transform duration-400 group-hover:animate-"
            />
            {{ $t('home.templates') }}
          </span>
        </a>

        <!-- Botão Projetos -->
        <a
          href="#projects"
          class="group relative px-6 py-3 min-w-[169px] rounded-xl gradient-btn overflow-hidden transition-all duration-100 hover:scale-105"
        >
          <!-- SPAN QUE ENGLOBA ICONE E TEXTO DO BOTÃO -->
          <span
            class="text-navBlack font-bold text-[16px] tracking-wide flex items-center gap-3 relative z-10"
          >
            <v-icon
              name="fa-code"
              scale="1.2"
              class="transition-transform duration-400 group-hover:-rotate-20"
            />
            {{ $t('home.projetos') }}
          </span>
        </a>
      </motion.div>

      <!-- Container que engloba botao contatos EN e PT -->
      <div class="flex justify-center mb-17">
        <!-- Botão Contato EN(TELEGRAM)-->
        <a
          v-if="locale === 'en'"
          :href="link.en"
          class="group relative bg-deepBlue min-w-[169px] border border-thirdTheme px-6 py-3 rounded-xl transition-all duration-500 hover:scale-105"
        >
          <!-- SPAN QUE ENGLOBA ICONE E TEXTO DO BOTÃO -->
          <span class="text-thirdTheme font-bold text-[16px] tracking-wide flex items-center gap-3">
            <v-icon name="co-telegram-plane" scale="1.2" class="" />
            {{ $t('home.contato') }}
          </span>
        </a>

        <!-- Botão Contato PT(WHATSAPP)-->
        <a
          v-if="locale === 'pt'"
          :href="link.pt"
          class="group relative min-w-[169px] bg-deepBlue border border-thirdTheme px-6 py-3 rounded-xl transition-all duration-500 hover:scale-105"
        >
          <!-- SPAN QUE ENGLOBA ICONE E TEXTO DO BOTÃO -->
          <span class="text-thirdTheme font-bold text-[16px] tracking-wide flex items-center gap-3">
            <v-icon name="ri-whatsapp-fill" scale="1.2" class="" />
            {{ $t('home.contato') }}
          </span>
        </a>
      </div>

      <!-- Container que engloba subcontainer de icones do linkedin e  github -->
      <motion.div
        :initial="flipY.hidden"
        :while-in-view="flipY.visible"
        class="flex flex-col justify-center items-center gap-6 relative"
      >
        <p class="text-myWhite/90 text-[16px] mb-3 font-medium tracking-wider hidden sm:block">
          {{ $t('home.social') }}
        </p>

        <!-- CONTAINER DE LINKEDIN E GITHUB PARA MOBILE-->
        <div class="flex gap-3 md:hidden">
          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/jairo-lopes-filho/"
            target="_blank"
            aria-label="LinkedIn"
            class="hover:scale-110 transition-all duration-300"
          >
            <v-icon name="io-logo-linkedin" scale="1.9" class="text-fourthTheme" />
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/JairoLopes"
            target="_blank"
            aria-label="GitHub"
            class="hover:scale-110 transition-all duration-300"
          >
            <v-icon name="io-logo-github" scale="1.9" class="text-fourthTheme" />
          </a>
        </div>

        <!-- CONTAINER DE LINKEDIN E GITHUB PARA DESKTOP-->
        <div class="hidden gap-4 md:flex">
          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/jairo-lopes-filho/"
            target="_blank"
            aria-label="LinkedIn"
            class="hover:scale-110 transition-all duration-300"
          >
            <v-icon name="io-logo-linkedin" scale="2" class="text-fourthTheme" />
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/JairoLopes"
            target="_blank"
            aria-label="GitHub"
            class="hover:scale-110 transition-all duration-300"
          >
            <v-icon name="io-logo-github" scale="2" class="text-fourthTheme" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CrossfadeTech from './CrossfadeTech.vue'
import BackgroundVideo from './BackgroundVideo.vue'
import { motion } from 'motion-v'
import { scaleIn, slideUp, flipY } from '@/animation'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const msgPt = encodeURIComponent('Olá, gostaria de fazer um site com você.')
const msgEn = encodeURIComponent('Hello, I would like to make a website with you.')
const link = {
  pt: `https://wa.me/5581997052877?text=${msgPt}`,
  en: `https://t.me/Lopes_93?text=${msgEn}`,
}

import { addIcons } from 'oh-vue-icons'
import {
  RiLayout2Fill,
  FaCode,
  RiWhatsappFill,
  IoLogoGithub,
  IoLogoLinkedin,
  CoTelegramPlane,
} from 'oh-vue-icons/icons'

addIcons(RiLayout2Fill, FaCode, RiWhatsappFill, IoLogoGithub, IoLogoLinkedin, CoTelegramPlane)
</script>
