<template>
  <section id="projects" class="min-h-screen flex justify-center pt-[10%] pb-20">
    <!-- Container que engloba todo o projeto -->
    <div class="max-w-5xl mx-auto px-4">
      <!-- TITULO -->
      <motion.h2
        :initial="scaleIn.hidden"
        :while-in-view="scaleIn.visible"
        class="text-center text-2xl sm:text-3xl font-bold mb-16 gradient-text"
      >
        Meus Projetos
      </motion.h2>

      <!-- Container que engloba os cards do projeto -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Iteração do objeto que da valor ao card para renderiza-lo -->
        <motion.div
          :initial="popUp.hidden"
          :while-in-view="popUp.visible"
          v-for="(item, index) in data_projects"
          :key="index"
          id="cardUniq"
          class="relative flex flex-col gap-3 p-9 rounded-xl bg-mainTheme/6 border-2 border-mainTheme/10 hover:-translate-y-3 hover:border-b-mainTheme/30 hover:shadow-2xl hover:shadow-mainTheme transition-all duration-500"
        >
          <!-- CONTAINER PARA TITULO DO PROJETO + ICONE INFO -->
          <div class="flex justify-between items-center">
            <h3 class="text-xl font-bold mb-2 text-secondaryTheme">
              {{ item.nome }}
            </h3>
            <div class="relative cursor-pointer" @click="handleTooltipToggle(index)">
              <!-- Tooltip "Projeto Real" ou "Simulado" -->
              <v-icon name="io-information-circle" scale="1.5" class="-translate-y-5" />

              <span
                v-if="activeTooltipIndex === index"
                class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-white font-semibold text-sm rounded py-2 px-3 transition-opacity duration-300 whitespace-nowrap z-10"
                :class="{ 'bg-emerald-600': item.real, 'bg-thirdTheme': !item.real }"
              >
                {{ item.real ? 'Projeto Real' : 'Projeto Simulado' }}
              </span>
            </div>
          </div>

          <!-- DESCRIÇÃO DO PROJETO -->
          <p class="mb-4 min-h-[168px] flex items-center">{{ item.desc }}</p>

          <!-- Container onde ficam as techs utilizadas no projeto -->
          <div class="min-h-[88px]">
            <!-- Titulo tecnologias usadas -->
            <h2 class="text-mainTheme text-lg font-bold mb-3">Tecnologias usadas:</h2>

            <!-- Aqui são as tecnologias usadas que serão renderizadas dentro de uma span -->
            <div class="flex flex-wrap gap-2 min-h-[64px]">
              <span
                v-for="(tech, techIndex) in item.tech_usadas"
                :key="techIndex"
                class="bg-thirdTheme/10 text-thirdTheme py-1 px-3 rounded-full h-fit text-sm hover:bg-thirdTheme/20 hover:shadow-2xl hover:shadow-thirdTheme/60"
                :class="{ 'blur-sm opacity-40': !item.finish }"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!--Container para ver projeto e Github-->
          <div class="flex justify-between items-center mt-6">
            <!-- Link para ver projeto -->
            <a
              :href="item.link_projeto"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 font-semibold border-b-2 pb-1 border-secondaryTheme text-mainTheme hover:text-mainTheme/80 transition-colors duration-500"
              :class="{ 'opacity-30 pointer-events-none': !item.finish }"
            >
              Ver Projeto
              <i class="bx bx-right-arrow-circle text-2xl text-myWhite"></i>
            </a>

            <!-- Link para o Github -->
            <a
              v-if="item.github"
              :href="item.github"
              target="_blank"
              rel="noopener noreferrer"
              class="flex flex-col gap-2 items-center"
              :class="{ hidden: !item.finish }"
            >
              <v-icon name="io-logo-github" scale="1.8" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { popUp, scaleIn } from '@/animation'
import { motion } from 'motion-v'

// Array de dados dos projetos
const data_projects = [
  {
    nome: 'Tidetrack',
    desc: 'Plataforma web para monitoramento marítimo global. Ele exibe dados em tempo real sobre a altura, temperatura e direção das ondas, além do nível do mar. Conecta-se à API Marine Weather da Open-Meteo para os dados marítimos e à API Nominatim da OpenStreetMap para informações de localização e busca no mapa.',
    tech_usadas: ['React', 'Tailwind CSS', 'Typescript', 'Framer Motion', 'API Rest'],
    link_projeto: 'https://tidetrack-sea.vercel.app/',
    github: 'https://github.com/JairoLopes/Tidetrack',
    real: true,
    finish: true,
  },
  {
    nome: 'Cardápio Digital',
    desc: 'Projeto de cardápio online totalmente customizável e reutilizável, onde as rotas são criadas de forma dinâmica e automática a partir das categorias do menu. A sua estrutura otimizada facilita a customização e a manutenção, sendo uma solução elegante e profissional para qualquer restaurante ou lanchonete.',
    tech_usadas: ['Vue.js', 'Vue router', 'Tailwind CSS', 'TypeScript'],
    link_projeto: 'https://cardapio-exemplo.vercel.app/',
    github: 'https://github.com/JairoLopes/cardapio',
    real: true,
    finish: true,
  },
  {
    nome: 'Astrolobby',
    desc: 'Plataforma web para exploração astronômica, atuando como um hub de notícias e conteúdo educativo. Integra informações oficiais da NASA conectando a API APOD, e oferece tradução instantânea para o português conectando uma segunda API(DeepL).',
    tech_usadas: [
      'React',
      'Tailwind CSS',
      'Typescript',
      'Framer Motion',
      'API Rest',
      'React router',
    ],
    link_projeto: 'https://astrolobby.vercel.app/',
    github: 'https://github.com/JairoLopes/Astrolobby',
    real: true,
    finish: true,
  },
  {
    nome: 'E-commerce - Nuphar',
    desc: 'Front-end de uma plataforma de e-commerce para venda de algas marinhas para aquarismo',
    tech_usadas: ['React', 'Tailwind CSS', 'Typescript', 'Framer Motion'],
    link_projeto: 'https://nuphar.vercel.app/',
    github: 'https://github.com/JairoLopes/Ecommerce',
    real: false,
    finish: true,
  },
  {
    nome: 'Site Personal',
    desc: 'Landing page de portfólio e contratação de personal trainer',
    tech_usadas: ['React', 'Tailwind CSS', 'Typescript', 'Framer Motion'],
    link_projeto: 'https://talles-personal.vercel.app/',
    github: 'https://github.com/JairoLopes/personal_trainer',
    real: true,
    finish: true,
  },
  {
    nome: 'E-commerce',
    desc: '(EM DESENVOLVIMENTO)',
    tech_usadas: ['React', 'Tailwind CSS', 'Typescript', 'Framer Motion'],
    link_projeto: '#',
    github: '',
    real: true,
    finish: false,
  },
]

// Estado reativo para o index do tooltip ativo
const activeTooltipIndex = ref<number | null>(null)

// Função para alternar a exibição do tooltip
const handleTooltipToggle = (index: number) => {
  activeTooltipIndex.value = activeTooltipIndex.value === index ? null : index
}
</script>
