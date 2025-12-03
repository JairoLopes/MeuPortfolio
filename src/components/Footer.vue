<script setup lang="ts">
// Dados das tecnologias usadas
const skillsFront = [
  {
    tech: 'Vue.js',
    icon: 'vi-file-type-vue',
  },
  {
    tech: 'TypeScript',
    icon: 'vi-file-type-typescript-official',
  },
  {
    tech: 'Tailwind CSS',
    icon: 'vi-file-type-tailwind',
  },
]

// Ícone do GitHub
const githubIcon = 'io-logo-github'
</script>

<template>
  <footer
    class="bg-navBlack py-12 px-4 sm:px-6 lg:px-8 text-white/80 border-t border-mainTheme/20 shadow-2xl shadow-mainTheme"
  >
    <div class="container mx-auto max-w-6xl">
      <!-- Seção principal do footer, alinhada ao centro -->
      <div class="flex flex-col items-center gap-10 md:gap-12 text-center">
        <!-- Tecnologias Usadas -->
        <div class="flex flex-col items-center">
          <h3 class="text-xl md:text-3xl mb-4 text-myWhite/80 font-bold">
            {{ $t('footer.tecnologiasTitulo') }}
          </h3>

          <!-- Container que engloba os Icones -->
          <div class="flex justify-center items-center gap-7 flex-wrap mt-10">
            <!-- Irá iterar o array de skills e estiliza-las cada uma nessa span -->
            <span
              v-for="(skill, index) in skillsFront"
              :key="index"
              class="flex flex-col justify-center items-center text-mainTheme"
            >
              <v-icon :name="skill.icon" scale="2.2" />
              <span class="text-[14px] font-semibold text-myWhite/50 mt-1">
                {{ skill.tech }}
              </span>
            </span>
          </div>
        </div>

        <!-- Seção de Links -->
        <div class="flex flex-col items-center">
          <h3 class="text-xl md:text-2xl mb-4 text-myWhite/80 font-bold">
            {{ $t('footer.codigoTitulo') }}
          </h3>
          <a
            href="https://github.com/JairoLopes/MeuPortfolio"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:scale-110 transition-transform duration-300 animate-pulse"
          >
            <v-icon :name="githubIcon" scale="2" class="text-thirdTheme" />
          </a>
        </div>
      </div>

      <!-- Linha separadora -->
      <hr class="border-gray-700 my-10" />

      <!-- Direitos Autorais e Nome do Desenvolvedor -->
      <div class="text-center text-sm">
        <p class="mt-2 text-base md:text-lg font-semibold text-thirdTheme">Jairo Lopes</p>
      </div>
    </div>
  </footer>
</template>
