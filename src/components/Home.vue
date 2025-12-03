<template>
  <section
    id="home"
    class="min-h-screen flex flex-col items-center justify-center relative z-20 pt-15"
  >
    <!-- --------- VIDEOS PARA BACKGROUND --------------------- -->
    <!-- Video para desktop -->
    <video
      class="hidden sm:block absolute inset-0 w-full h-full object-cover -z-10"
      autoplay
      loop
      muted
      src="/video/bgDesktop.mp4"
    />

    <!-- Video para mobile -->
    <video
      class="block sm:hidden absolute inset-0 w-full h-full object-cover -z-10"
      autoplay
      loop
      muted
      src="/video/bgM2.mp4"
    />

    <!-- Criando camada overlay para melhorar a legibilidade do texto -->
    <div class="absolute inset-0 bg-deepBlue opacity-85 sm:opacity-80 -z-10"></div>
    <!-- -------- FIM DO BLOCO DE VIDEOS PARA BACKGROUND ------- -->

    <!-- Sub-container que engloba toda a home -->
    <div class="text-center z-10 px-4">
      <!-- Titulo Meu Nome -->
      <motion.h1
        :initial="scaleIn.hidden"
        :while-in-view="scaleIn.visible"
        class="max-ssm:text-4xl text-5xl md:text-7xl font-bold mb-6 text-mainTheme"
      >
        Jairo Lopes
      </motion.h1>

      <!-- Container de descrição e digitando -->
      <div id="description" class="mb-8">
        <!-- Utilizando o componente Digitando com as props corretas -->
        <CrossfadeTech
          :textos="[
            $t('Digitando.cargo'),
            'Vue.js',
            'Vuex',
            'Pinia',
            'Vuetify',
            'Tailwind CSS',
            'TypeScript',
            'React',
            'JavaScript',
            'Node.js',
          ]"
          classesTw="text-myWhite text-secondaryTheme font-semibold text-2xl sm:text-3xl  mb-8 max-w-lg mx-auto"
        />

        <motion.p
          :initial="slideUp.hidden"
          :while-in-view="slideUp.visible"
          class="text-gray-300 text-center sm:text-lg max-w-2xl mx-auto"
        >
          <!-- Span sendo usado para renderizar o texto, por que v-html nao nao funciona em tags motion -->
          <span v-html="$t('home.descricao')"></span>
        </motion.p>
      </div>

      <!-- CONTAINER ONDE FICA OS LINKS DE VER PROJETOS E CONTATO -->
      <div class="flex justify-center items-center space-x-4">
        <!-- PROJETOS LINK -->
        <motion.a
          :initial="slideInLeft.hidden"
          :while-in-view="slideInLeft.visible"
          href="#projects"
          class="btn-hover2"
        >
          <span class="relative z-10">
            <span class="max-ssm:hidden">{{ $t('home.ver') }}</span>
            {{ $t('home.projetos') }}
          </span>
        </motion.a>

        <!-- CONTATO LINK -->
        <motion.a
          :initial="slideInRight.hidden"
          :while-in-view="slideInRight.visible"
          href="#contact"
          class="btn-hover"
        >
          <span class="relative z-10">{{ $t('home.contato') }}</span>
        </motion.a>
      </div>
    </div>

    <!-- CONTAINER DO Linkedin e GITHUB LINK -->
    <div class="flex justify-center items-center mt-15 gap-4">
      <!-- LINK DO LINKEDIN -->
      <motion.a
        :initial="flipY.hidden"
        :while-in-view="flipY.visible"
        href="https://www.linkedin.com/in/jairo-lopes-filho/"
        target="_blank"
        class="flex flex-col hover:-translate-y-2 transition-all duration-700"
      >
        <!-- Ícone do Linkedin -->
        <v-icon
          name="io-logo-linkedin"
          scale="2"
          class="text-thirdTheme/70 hover:text-thirdTheme transition-colors duration-1000"
        />
      </motion.a>

      <!-- LINK DO GITHUB -->
      <motion.a
        :initial="flipY.hidden"
        :while-in-view="flipY.visible"
        href="https://github.com/JairoLopes"
        target="_blank"
        class="flex flex-col hover:-translate-y-2 transition-all duration-700"
      >
        <!-- Ícone do Github -->
        <v-icon
          name="io-logo-github"
          scale="2"
          class="text-thirdTheme/70 hover:text-thirdTheme transition-colors duration-1000"
        />
      </motion.a>
    </div>
  </section>
</template>

<script setup lang="ts">
import CrossfadeTech from './CrossfadeTech.vue'
import { motion } from 'motion-v'
import { scaleIn, slideUp, slideInLeft, slideInRight, flipY } from '@/animation'
</script>
