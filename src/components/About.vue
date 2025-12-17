<template>
  <section
    id="about"
    class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-20"
  >
    <!-- Container principal -->
    <div class="text-center z-10 w-full max-w-5xl mx-auto relative">
      <!-- Título minimalista -->
      <motion.h2
        :initial="scaleIn.hidden"
        :while-in-view="scaleIn.visible"
        class="text-3xl md:text-4xl font-bold mb-12 text-myWhite"
      >
        {{ $t('sobre.titulo') }}
      </motion.h2>

      <!-- Container da foto -->
      <motion.div
        :initial="flipY.hidden"
        :while-in-view="flipY.visible"
        class="flex justify-center mb-12"
      >
        <img
          src="/img/perfil.jpeg"
          alt="Foto Perfil"
          class="w-28 h-28 md:w-35 md:h-35 -rotate-35 border-2 border-mainTheme/40 rounded-full object-cover shadow-lg"
        />
      </motion.div>

      <!-- Container de formação -->
      <div class="text-center mb-16 px-4">
        <motion.h3
          :initial="slideUp.hidden"
          :while-in-view="slideUp.visible"
          class="text-xl sm:text-2xl font-bold mb-6 text-thirdTheme"
        >
          {{ $t('sobre.formacao') }}
        </motion.h3>

        <motion.div
          :initial="slideUp.hidden"
          :while-in-view="slideUp.visible"
          class="max-w-3xl mx-auto"
        >
          <p
            v-html="$t('sobre.descricao')"
            class="text-sm sm:text-[16px] text-myWhite/90 leading-relaxed"
          ></p>
        </motion.div>
      </div>

      <!-- Container de tecnologias - Versão enxuta -->
      <div class="mt-4">
        <!-- Título minimalista -->
        <motion.div :initial="scaleIn.hidden" :while-in-view="scaleIn.visible" class="mb-12">
          <h3 class="text-xl sm:text-2xl font-bold text-mainTheme">
            {{ $t('sobre.tecnologias') }}
          </h3>
          <div
            class="w-16 h-px bg-gradient-to-r from-thirdTheme to-secondaryTheme mx-auto mt-2"
          ></div>
        </motion.div>

        <!-- Grid de skills enxuto -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          <motion.div
            v-for="(skill, index) in skills"
            :key="index"
            :initial="{ opacity: 0, scale: 0.9 }"
            :while-in-view="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.4, delay: index * 0.05 }"
            class="group"
          >
            <div
              class="flex flex-col items-center p-4 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 transition-all duration-300 hover:border-thirdTheme/30 hover:shadow-lg"
            >
              <!-- Ícone -->
              <div class="mb-3 relative">
                <v-icon
                  :name="skill.icon"
                  scale="2"
                  class="text-amber-500 transition-colors duration-300"
                  :fill="skill.tech === 'JavaScript' ? '#ffcc00' : ''"
                />
              </div>

              <!-- Nome da tecnologia -->
              <div class="text-center mb-2">
                <span class="text-sm font-medium text-myWhite">
                  {{ skill.tech }}
                </span>
              </div>

              <!-- Nível simplificado - apenas pontos coloridos -->
              <div class="flex justify-center gap-1 mt-1">
                <div
                  v-for="n in 5"
                  :key="n"
                  class="w-1.5 h-1.5 rounded-full transition-colors duration-300"
                  :class="{
                    'bg-thirdTheme': n <= skill.level,
                    'bg-white/20': n > skill.level,
                  }"
                ></div>
              </div>

              <!-- Badge de nível (só aparece no hover) -->
              <div class="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="text-xs px-2 py-1 rounded-full" :class="getLevelClass(skill.level)">
                  {{ getLevelText(skill.level) }}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <!-- Separador minimalista -->
      <div
        class="h-px bg-gradient-to-r from-transparent via-thirdTheme/20 to-transparent mx-auto mt-16 w-32"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { scaleIn, flipY, slideUp } from '@/animation'
import { motion } from 'motion-v'
import { useI18n } from 'vue-i18n'
import { addIcons } from 'oh-vue-icons'
import {
  ViFileTypeVue,
  ViFileTypeReactjs,
  ViFileTypeTypescriptOfficial,
  ViFileTypeTailwind,
  CoJavascript,
  ViFileTypeNode,
  IoFlower,
} from 'oh-vue-icons/icons'

addIcons(
  ViFileTypeVue,
  ViFileTypeReactjs,
  ViFileTypeTypescriptOfficial,
  ViFileTypeTailwind,
  CoJavascript,
  ViFileTypeNode,
  IoFlower,
)

const { t } = useI18n()

// Array de skills simplificado SiVuetify
const skills = [
  { tech: 'Vue.js', icon: 'vi-file-type-vue', level: 5 },
  { tech: 'Tailwind', icon: 'vi-file-type-tailwind', level: 5 },
  { tech: 'DaisyUI', icon: 'io-flower', level: 5 },
  { tech: 'Typescript', icon: 'vi-file-type-typescript-official', level: 4 },
  { tech: 'React', icon: 'vi-file-type-reactjs', level: 3 },
  { tech: 'JavaScript', icon: 'co-javascript', level: 4 },
  { tech: 'Node.js', icon: 'vi-file-type-node', level: 3 },
]

// Funções auxiliares
const getLevelText = (level: number) => {
  if (level === 5) return t('sobre.niveis.especialista')
  if (level === 4) return t('sobre.niveis.intermediario')
  if (level <= 3) return t('sobre.niveis.basico')
  return 'Básico'
}

/* Define a cor do nível(especialista, intermediario, básico) dependendo do valor do level */
const getLevelClass = (level: number) => {
  if (level === 5) return 'bg-thirdTheme/20 text-thirdTheme border border-thirdTheme/30'
  if (level === 4) return 'bg-secondaryTheme/20 text-secondaryTheme border border-secondaryTheme/30'
  return 'bg-mainTheme/20 text-mainTheme border border-mainTheme/30'
}
</script>
