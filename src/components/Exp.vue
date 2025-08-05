<template>
  <section
    id="experiencia"
    class="min-h-screen flex flex-col items-center justify-start pt-[10%] sm:pb-20"
  >
    <!-- Container que engloba experiência -->
    <div class="max-w-4xl mx-auto px-4">
      <h3
        v-motion
        :variants="scaleIn"
        class="text-2xl sm:text-4xl font-bold mb-8 text-mainTheme text-center"
      >
        Experiência Profissional
      </h3>

      <p v-motion :variants="slideUp" class="text-center font-semibold">
        Segue abaixo um pouco do meu histórico profissional referente a área de tecnologia.
      </p>

      <!-- Container da timeline -->
      <div class="mt-12 sm:mt-26">
        <div class="w-full my-4">
          <!-- Versão Mobile/Tablet: exibe os eventos centralizados em uma única coluna -->
          <div class="md:hidden flex flex-col gap-y-3">
            <div v-motion :variants="scaleIn" v-for="(item, index) in exp" :key="index">
              <!-- Card do evento -->
              <div
                class="flex flex-col items-center justify-center gap-y-2 rounded-xl mt-4 md:mt-0 md:mx-6 px-6 pt-2 pb-6 md:p-6 bg-mainTheme/6 md:shadow-2xl md:hover:shadow-none shadow-mainTheme hover:-translate-y-2 transition-all duration-700 border-2 border-mainTheme/10"
              >
                <h1
                  class="text-lg text-secondaryTheme font-bold rounded-b-md border-b-2 border-mainTheme pb-1"
                >
                  {{ item.titulo }}
                </h1>
                <h2 class="text-sm sm:text-[16px] text-thirdTheme font-semibold mt-1">
                  {{ item.empresa }}
                </h2>
                <p class="text-sm sm:text-[16px] mt-2 text-start">{{ item.desc }}</p>
                <span class="text-[16px] border-b-2 border-secondaryTheme pb-1 font-extrabold mt-5">
                  {{ item.ano }}
                </span>
              </div>
              <!-- Círculo, exceto após o último evento -->
              <div
                v-if="index < exp.length - 1"
                class="hidden md:block rounded-full w-4 h-4 bg-secondaryTheme mx-auto"
              ></div>
            </div>
          </div>

          <!-- Versão Desktop: utiliza grid para posicionar o evento à esquerda ou direita -->
          <div class="hidden md:flex flex-col gap-y-3">
            <!-- Círculo -->
            <div class="hidden md:block rounded-full w-4 h-4 bg-secondaryTheme mx-auto"></div>
            <div v-for="(item, index) in exp" :key="index">
              <div class="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
                <!-- Se a direção for LEFT -->
                <div
                  v-motion
                  :variants="scaleInRight"
                  v-if="item.direction === 'left'"
                  class="flex flex-col items-center justify-center gap-y-2 rounded-xl mt-4 md:mt-0 md:mx-6 px-6 pt-2 pb-6 md:p-6 bg-mainTheme/6 md:shadow-2xl md:hover:shadow-none shadow-mainTheme hover:-translate-y-2 transition-all duration-700 border-2 border-mainTheme/10"
                >
                  <h1
                    class="text-lg text-secondaryTheme font-bold rounded-b-md border-b-2 border-mainTheme pb-1"
                  >
                    {{ item.titulo }}
                  </h1>
                  <h2 class="text-sm sm:text-[16px] text-thirdTheme font-semibold mt-1">
                    {{ item.empresa }}
                  </h2>
                  <p class="text-sm sm:text-[16px] mt-2 text-start">{{ item.desc }}</p>
                  <span
                    class="text-[16px] border-b-2 border-secondaryTheme pb-1 font-extrabold mt-5"
                  >
                    {{ item.ano }}
                  </span>
                </div>
                <div v-else></div>

                <!-- Barra vertical -->
                <div
                  v-motion
                  :variants="scaleIn"
                  class="rounded-t-full rounded-b-full w-2 h-full bg-mainTheme mx-auto"
                ></div>

                <!-- Se a direção for RIGHT -->
                <div
                  v-motion
                  :variants="scaleInLeft"
                  v-if="item.direction === 'right'"
                  class="flex flex-col items-center justify-center gap-y-2 rounded-xl mt-4 md:mt-0 md:mx-6 px-6 pt-2 pb-6 md:p-6 bg-mainTheme/6 md:shadow-2xl md:hover:shadow-none shadow-mainTheme hover:-translate-y-2 transition-all duration-700 border-2 border-mainTheme/10"
                >
                  <h1
                    class="text-lg text-secondaryTheme font-bold rounded-b-md border-b-2 border-mainTheme pb-1"
                  >
                    {{ item.titulo }}
                  </h1>
                  <h2 class="text-sm sm:text-[16px] text-thirdTheme font-semibold mt-1">
                    {{ item.empresa }}
                  </h2>
                  <p class="text-sm sm:text-[16px] mt-2 text-start">{{ item.desc }}</p>
                  <span
                    class="text-[16px] border-b-2 border-secondaryTheme pb-1 font-extrabold mt-5"
                  >
                    {{ item.ano }}
                  </span>
                </div>
                <div v-else></div>
              </div>
              <!-- Círculo -->
              <div class="hidden md:block rounded-full w-4 h-4 bg-secondaryTheme mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { slideUp, scaleInLeft, scaleInRight, scaleIn } from '@/animation'

// Array de dados da experiência profissional
const exp = [
  {
    titulo: 'Desenvolvedor Front-end',
    empresa: 'Freelancer',
    desc: 'Desenvolvimento de interfaces web responsivas utilizando Vue.js, React e Tailwind para a criação de componentes reutilizáveis para diferentes dispositivos.',
    ano: '2025',
    direction: 'left', // Direção em que o card será exibido (esquerda)
  },
  {
    titulo: 'Programador Front-end',
    empresa: 'Prefeitura de Olinda',
    desc: 'Realização de ajustes e melhorias no front-end de sistemas corporativos.',
    ano: '2022',
    direction: 'right', // Direção em que o card será exibido (direita)
  },
  {
    titulo: 'Técnico em segurança da informação',
    empresa: 'Bidweb Security',
    desc: 'Trabalhando com o desenvolvimento/manutenção de scripts Python em containers, e monitoramento de ameaças.',
    ano: '2020',
    direction: 'left', // Direção em que o card será exibido (esquerda)
  },
  {
    titulo: 'Help Desk',
    empresa: 'Secretaria da fazenda',
    desc: 'Prestação de suporte técnico.',
    ano: '2017',
    direction: 'right', // Direção em que o card será exibido (direita)
  },
]
</script>
