<template>
  <section
    id="home"
    class="min-h-screen flex flex-col items-center justify-center relative z-20 overflow-hidden pt-[7%] px-4 sm:px-6 md:px-8"
  >
    <!-- --------- VIDEOS PARA BACKGROUND COM OVERLAY MELHORADO --------------------- -->
    <!-- Video para desktop -->
    <video
      class="hidden sm:block absolute inset-0 w-full h-full object-cover -z-10"
      autoplay
      loop
      muted
      playsinline
      src="/video/bgDesktop.mp4"
    />

    <!-- Video para mobile -->
    <video
      class="block sm:hidden absolute inset-0 w-full h-full object-cover -z-10"
      autoplay
      loop
      muted
      playsinline
      src="/video/bgM2.mp4"
    />

    <!-- Overlay gradiente rico com cores do tema -->
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-br from-deepBlue/95 via-navBlack/85 to-thirdTheme/20"
    ></div>

    <!-- Container de efeitos visuais para o background -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <!-- Partículas animadas -->
      <div
        class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-thirdTheme/20 blur-3xl animate-p"
      ></div>
      <div
        class="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-secondaryTheme/15 blur-3xl animate-pulse"
        style="animation-delay: 1s"
      ></div>
      <div
        class="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-mainTheme/10 blur-3xl animate-pulse"
        style="animation-delay: 0.5s"
      ></div>
    </div>
    <!-- -------- FIM DO BLOCO DE VIDEOS PARA BACKGROUND ------- -->

    <!-- Container principal com mais espaçamento -->
    <div class="text-center z-10 w-full max-w-4xl mx-auto relative py-12 md:py-20">
      <!-- Nome sem gradiente, cor clara do tema -->
      <motion.h1
        :initial="scaleIn.hidden"
        :while-in-view="scaleIn.visible"
        class="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 text-myWhite px-4"
      >
        Jairo Lopes
      </motion.h1>

      <!-- Container da animação crossfade isolada -->
      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8 }"
        class="mb-10 md:mb-14 px-4"
      >
        <CrossfadeTech
          :textos="['Vue.js', 'React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Node.js']"
          classesTw="text-2xl md:text-3xl lg:text-4xl font-bold text-thirdTheme"
        />
      </motion.div>

      <!-- Descrição -->
      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.2 }"
        class="max-w-2xl mx-auto mb-12 md:mb-16 px-6 relative"
      >
        <p
          v-html="$t('home.descricao')"
          class="text-lg md:text-xl text-myWhite leading-relaxed p-3"
        ></p>

        <!-- sombra e blur no texto -->
        <span class="absolute inset-0 bg-black/30 -z-10 rounded-xl"></span>
      </motion.div>

      <!-- Botões ver projetos e contato-->
      <motion.div
        :initial="slideUp.hidden"
        :while-in-view="slideUp.visible"
        class="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mb-16 md:mb-20 px-4"
      >
        <!-- Botão Projetos -->
        <a
          href="#projects"
          class="group relative px-8 py-4 rounded-xl gradient-btn overflow-hidden transition-all duration-100 hover:scale-105"
        >
          <!-- SPAN QUE ENGLOBA ICONE E TEXTO DO BOTÃO -->
          <span
            class="text-navBlack font-bold text-lg tracking-wide flex items-center gap-3 relative z-10"
          >
            <v-icon
              name="fa-plus"
              scale="1.2"
              class="transition-transform duration-400 group-hover:-rotate-20"
            />
            {{ $t('home.projetos') }}
          </span>
        </a>

        <!-- Botão Contato -->
        <a
          href="#contact"
          class="group relative px-8 py-4 rounded-xl gradient-btn transition-all duration-500 hover:scale-105"
        >
          <!-- SPAN QUE ENGLOBA ICONE E TEXTO DO BOTÃO -->
          <span class="text-navBlack font-bold text-lg tracking-wide flex items-center gap-3">
            <v-icon name="ri-whatsapp-fill" scale="1.2" class="group-hover:animate-bounce" />
            {{ $t('home.contato') }}
          </span>
        </a>
      </motion.div>

      <!-- Container que engloba titulo CONECTE-SE, E subcontainer de icones do linkedine  github -->
      <motion.div
        :initial="flipY.hidden"
        :while-in-view="flipY.visible"
        class="flex flex-col justify-center items-center gap-6 relative px-4"
      >
        <p class="text-myWhite/90 text-[16px] mb-3 font-medium tracking-wider hidden sm:block">
          {{ $t('home.social') }}
        </p>

        <!-- CONTAINER DE LINKEDIN E GITHUB -->
        <div class="flex gap-7">
          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/jairo-lopes-filho/"
            target="_blank"
            aria-label="LinkedIn"
            class="hover:scale-110 transition-all duration-300"
          >
            <v-icon name="io-logo-linkedin" scale="2.2" class="text-thirdTheme" />
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/JairoLopes"
            target="_blank"
            aria-label="GitHub"
            class="hover:scale-110 transition-all duration-300"
          >
            <v-icon name="io-logo-github" scale="2.2" class="text-thirdTheme" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CrossfadeTech from './CrossfadeTech.vue'
import { motion } from 'motion-v'
import { scaleIn, slideUp, flipY } from '@/animation'

import { addIcons } from 'oh-vue-icons'
import { FaPlus, RiWhatsappFill, IoLogoGithub, IoLogoLinkedin } from 'oh-vue-icons/icons'

addIcons(FaPlus, RiWhatsappFill, IoLogoGithub, IoLogoLinkedin)
</script>
