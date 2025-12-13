<template>
  <section
    id="projects"
    class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-20"
  >
    <!-- Fundo extremamente clean -->
    <div class="absolute inset-0 -z-10 bg-navBlack"></div>

    <!-- Gradiente sutil apenas nas bordas -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0 border border-white/5 rounded-none"></div>
    </div>

    <!-- Container principal -->
    <div class="text-center z-10 w-full max-w-5xl mx-auto relative">
      <!-- Título da seção -->
      <motion.h2
        :initial="scaleIn.hidden"
        :while-in-view="scaleIn.visible"
        class="text-center text-2xl sm:text-3xl font-bold mb-16 gradient-text"
      >
        {{ $t('projetos.tituloSecao') }}
      </motion.h2>

      <!-- Container Grid que engloba todos os cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <!-- CARD INDIVIDUAL -->
        <motion.div
          v-for="(item, index) in data_projects"
          :key="index"
          :initial="{ opacity: 0, scale: 0.95 }"
          :while-in-view="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.5, delay: index * 0.1 }"
          class="group p-2 relative"
        >
          <!-- Card extremamente minimalista -->
          <div
            class="relative h-full bg-gradient-to-b from-white/3 to-white/1 rounded-none border-t border-white/10 overflow-hidden transition-all duration-500 hover:border-t-thirdTheme/30"
          >
            <!-- Número do projeto sutil -->
            <div class="absolute top-2 left-3 text-2xl font-thin text-white">0{{ index + 1 }}</div>

            <!-- Conteúdo principal -->
            <div class="flex flex-col h-full p-8 pt-12">
              <!-- Título e descrição -->
              <div class="mb-8 grow flex flex-col">
                <h3 class="text-lg font-medium text-myWhite">
                  {{ item.nome }}
                </h3>

                <p
                  class="text-sm blu text-left text-myWhite/60 leading-relaxed mb-2 mt-5 flex items-end grow"
                >
                  {{ item.desc }}
                </p>
              </div>

              <!-- Tecnologias -->
              <div :class="item.finish ? 'mb-10 grow flex flex-col justify-end' : 'blur-sm'">
                <!-- titulo tecnologias usadas -->
                <p class="mb-3 text-xs text-thirdTheme/70 font-medium uppercase tracking-wider">
                  {{ $t('projetos.tecnologiasUsadas') }}
                </p>

                <!-- Container das tecnologias -->
                <div class="flex flex-wrap gap-2 mt-3">
                  <span
                    v-for="(tech, techIndex) in item.tech_usadas"
                    :key="techIndex"
                    class="px-3 py-1.5 text-xs font-medium rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-white/1 text-myWhite/80 hover:bg-secondaryTheme/10 hover:text-secondaryTheme hover:border-secondaryTheme/30 transition-all duration-300 group/tech relative overflow-hidden"
                  >
                    <!-- Efeito de brilho sutil no hover -->
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-secondaryTheme/0 via-secondaryTheme/10 to-secondaryTheme/0 translate-x-[-100%] group-hover/tech:translate-x-[100%] transition-transform duration-700"
                    ></div>

                    <!-- Texto com z-index para ficar acima do efeito -->
                    <span class="relative z-10">{{ tech }}</span>
                  </span>
                </div>
              </div>

              <!-- Rodapé com ações com cores -->
              <div class="flex items-center justify-between border-t border-white/5 pt-6">
                <!-- Links -->
                <div class="flex items-center gap-4">
                  <a
                    :href="item.link_projeto"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-[15px] flex items-center gap-1.5 p-2 group/link"
                    :class="
                      item.finish
                        ? 'text-slate-900 gradient-btn rounded'
                        : 'text-white/30 pointer-events-none'
                    "
                  >
                    <svg
                      class="w-3 h-3 transform group-hover/link:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span class="font-medium">{{ $t('projetos.verProjeto') }}</span>
                  </a>
                </div>

                <!-- Ano ou status sutil com cor -->
                <div
                  class="text-xs font-medium px-2 py-1 rounded"
                  :class="
                    item.real
                      ? 'bg-emerald-500/10 text-emerald-400/70'
                      : 'bg-amber-500/10 text-amber-400/70'
                  "
                >
                  {{ item.real_string }}
                </div>
              </div>
            </div>

            <!-- Linha decorativa lateral do card com cor no hover -->
            <div
              class="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent group-hover:via-thirdTheme/30 transition-all duration-500"
            ></div>
          </div>

          <!-- LINK PARA O GITHUB EM POSITION ABSOLUTE -->
          <a :href="item.github" target="_blank" class="absolute top-7 right-7">
            <v-icon name="io-logo-github" scale="1.4" />
          </a>
        </motion.div>
      </div>

      <!-- TRAÇO VERDE AO NO FINAL DA SEÇÃO-->
      <div
        class="w-[80%] h-[3px] bg-gradient-to-r from-transparent via-thirdTheme/30 to-transparent mx-auto mt-16"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { motion } from 'motion-v'
import { scaleIn } from '@/animation'
import { useI18n } from 'vue-i18n'
import { addIcons } from 'oh-vue-icons'
import { IoLogoGithub } from 'oh-vue-icons/icons'

addIcons(IoLogoGithub)

const { tm } = useI18n()

const data_projects = computed(() => {
  return tm('projetos.lista') as Array<{
    nome: string
    desc: string
    tech_usadas: string[]
    link_projeto: string
    github: string
    real: boolean
    real_string: string
    finish: boolean
  }>
})
</script>
