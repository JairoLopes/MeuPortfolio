<template>
  <section
    id="experiencia"
    class="min-h-screen flex flex-col items-center justify-start pt-[10%] sm:pb-20"
  >
    <!-- Container que engloba experiência -->
    <div class="max-w-4xl mx-auto px-4">
      <motion.h3
        :initial="scaleIn.hidden"
        :while-in-view="scaleIn.visible"
        class="text-2xl sm:text-4xl font-bold mb-8 text-center text-mainTheme"
      >
        {{ $t('experiencia.tituloSecao') }}
      </motion.h3>

      <motion.p
        :initial="slideUp.hidden"
        :while-in-view="slideUp.visible"
        class="text-center font-semibold text-thirdTheme mb-12"
      >
        {{ $t('experiencia.subtituloSecao') }}
      </motion.p>

      <!-- Container da timeline -->
      <div class="mt-12">
        <div class="w-full my-4">
          <!-- Versão Mobile/Tablet: exibe os eventos centralizados em uma única coluna -->
          <div class="md:hidden flex flex-col gap-y-8">
            <div v-for="(item, index) in exp" :key="index">
              <!-- Card do evento - MOBILE -->
              <motion.div
                :initial="{ opacity: 0, y: 20 }"
                :while-in-view="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.5, delay: index * 0.1 }"
                class="group relative"
              >
                <!-- Marcador do ano -->
                <div class="flex justify-center mb-6">
                  <div class="relative">
                    <span
                      class="relative px-4 py-2 text-sm font-bold bg-gradient-to-r from-thirdTheme to-secondaryTheme bg-clip-text text-transparent border border-white/10 rounded-full backdrop-blur-sm"
                    >
                      {{ item.ano }}
                    </span>
                  </div>
                </div>

                <!-- Card principal -->
                <div
                  class="relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-thirdTheme/30 group-hover:-translate-y-1"
                >
                  <!-- Conteúdo -->
                  <div class="space-y-7">
                    <div>
                      <h3 class="text-xl text-center font-bold text-myWhite mb-4">
                        {{ item.titulo }}
                      </h3>
                      <div class="flex items-center justify-center gap-2">
                        <div
                          class="w-8 h-px bg-gradient-to-r from-thirdTheme to-secondaryTheme"
                        ></div>
                        <h4 class="text-lg font-semibold text-thirdTheme">
                          {{ item.empresa }}
                        </h4>
                        <div
                          class="w-8 h-px bg-gradient-to-l from-thirdTheme to-secondaryTheme"
                        ></div>
                      </div>
                    </div>

                    <p class="text-myWhite/80 leading-relaxed">{{ item.desc }}</p>

                    <!-- Tags de habilidades -->
                    <div class="pt-4 border-t border-white/10">
                      <div class="flex flex-wrap gap-2">
                        <span
                          v-for="tag in getTechTags(item.titulo)"
                          :key="tag"
                          class="px-3 py-1 text-xs font-medium rounded-full border border-white/10 bg-white/5 text-myWhite/70 hover:bg-thirdTheme/10 hover:text-thirdTheme hover:border-thirdTheme/30 transition-colors duration-200"
                        >
                          {{ tag }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Linha conectora (exceto após o último evento e após 2020) -->
                <div
                  v-if="index < exp.length - 1 && item.ano > 2017"
                  class="flex justify-center mt-8"
                >
                  <div
                    class="w-0.5 h-8 bg-gradient-to-b from-thirdTheme/50 to-secondaryTheme/50"
                  ></div>
                </div>
              </motion.div>
            </div>
          </div>

          <!-- Versão Desktop: utiliza grid para posicionar o evento à esquerda ou direita -->
          <div class="hidden md:flex flex-col">
            <!-- Linha central elegante -->
            <div class="relative h-full">
              <!-- Linha principal com gradiente refinado -->
              <div
                class="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-[calc(100%-100px)] top-12"
                :style="{
                  background:
                    'linear-gradient(to bottom, rgba(0, 204, 153, 0.4) 0%, rgba(51, 173, 255, 0.6) 50%, rgba(0, 204, 153, 0.2) 100%)',
                  maskImage:
                    'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
                }"
              ></div>
            </div>

            <!-- Cards do evento -->
            <div class="relative">
              <motion.div
                v-for="(item, index) in exp"
                :key="index"
                :initial="{ opacity: 0, x: item.direction === 'left' ? -50 : 50 }"
                :while-in-view="{ opacity: 1, x: 0 }"
                :transition="{ duration: 0.6, delay: index * 0.1 }"
                :class="[
                  'relative flex items-center mb-20 last:mb-0',
                  item.direction === 'left' ? 'justify-start' : 'justify-end',
                ]"
              >
                <!-- Marcador do ano na linha central -->
                <div
                  class="absolute left-1/2 transform -translate-x-1/2"
                  :style="{ top: `${index * 25 + 12.5}%` }"
                >
                  <div class="relative">
                    <div
                      class="relative w-3 h-3 rounded-full bg-gradient-to-br from-thirdTheme to-secondaryTheme border border-white/20 shadow-lg"
                    ></div>
                    <div
                      class="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-bold bg-gradient-to-r from-thirdTheme to-secondaryTheme bg-clip-text text-transparent"
                    >
                      {{ item.ano }}
                    </div>
                  </div>
                </div>

                <!-- Card principal -->
                <div :class="['relative w-[45%]', item.direction === 'left' ? 'pr-12' : 'pl-12']">
                  <!-- Card -->
                  <div
                    class="relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-thirdTheme/30 group-hover:-translate-y-1"
                  >
                    <!-- Conteúdo -->
                    <div class="space-y-4">
                      <div>
                        <h3 class="text-xl text-center font-bold text-myWhite mb-2">
                          {{ item.titulo }}
                        </h3>
                        <div class="flex items-center gap-3 mb-4">
                          <div
                            class="flex-1 h-px bg-gradient-to-r from-thirdTheme/50 to-transparent"
                            :class="item.direction === 'left' ? '' : 'flex-row-reverse'"
                          ></div>
                          <h4 class="text-lg font-semibold text-thirdTheme whitespace-nowrap">
                            {{ item.empresa }}
                          </h4>
                          <div
                            class="flex-1 h-px bg-gradient-to-l from-thirdTheme/50 to-transparent"
                            :class="item.direction === 'left' ? '' : 'flex-row-reverse'"
                          ></div>
                        </div>
                      </div>

                      <p class="text-myWhite/80 leading-relaxed">{{ item.desc }}</p>

                      <!-- Tags de habilidades -->
                      <div class="pt-4 border-t border-white/10">
                        <div class="flex flex-wrap gap-2">
                          <span
                            v-for="tag in getTechTags(item.titulo)"
                            :key="tag"
                            class="px-3 py-1 text-xs font-medium rounded-full border border-white/10 bg-white/5 text-myWhite/70 hover:bg-thirdTheme/10 hover:text-thirdTheme hover:border-thirdTheme/30 transition-colors duration-200"
                          >
                            {{ tag }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { slideUp, scaleIn } from '@/animation'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { tm } = useI18n()

const exp = computed(() => {
  return tm('experiencia.experiencias') as Array<{
    titulo: string
    empresa: string
    desc: string
    ano: number
    direction: string
  }>
})

// Função para obter tags de tecnologia baseadas no título
const getTechTags = (titulo: string) => {
  const tagsMap: Record<string, string[]> = {
    'Front-end Developer': ['Vue.js', 'TypeScript', 'Tailwind'],
    'Desenvolvedor Front-end': ['Vue.js', 'TypeScript', 'Tailwind'],
    'Front-end Programmer': ['JavaScript', 'HTML/CSS', 'Responsive'],
    'Programador Front-end': ['JavaScript', 'HTML/CSS', 'Responsivo'],
    'Information Security Technician': ['Python', 'Security'],
    'Técnico em segurança da informação': ['Python', 'Segurança'],
    'Help Desk': ['Support', 'Troubleshooting', 'Customer Service'],
    'Suport Técnico': ['Suporte', 'Resolução de Problemas', 'Atendimento'],
  }

  return tagsMap[titulo] || ['Web Development', 'Technology']
}
</script>
