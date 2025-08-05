<script setup lang="ts">
// Define o tamanho padrão dos ícones.
const sizeIcons = 45

// Array de objetos com as tecnologias e seus respectivos ícones em SVG.
// Os ícones foram extraídos do 'react-icons' e convertidos para SVG in-line.
const skillsFront = [
  {
    tech: 'Vue.js',
    icon: 'vi-file-type-vue',
  },
  {
    tech: 'React',
    icon: 'vi-file-type-reactjs',
  },
  {
    tech: 'Typescript',
    icon: 'vi-file-type-typescript-official',
  },
  {
    tech: 'Tailwind',
    icon: 'vi-file-type-tailwind',
  },
  {
    tech: 'JavaScript',
    icon: 'co-javascript',
  },
  {
    tech: 'Node.js',
    icon: 'vi-file-type-node',
  },
]
</script>

<template>
  <section
    id="about"
    class="min-h-screen flex flex-col items-center justify-start pt-[10%] sm:pb-20"
  >
    <!-- Conateiner que engloba todo o about -->
    <div class="max-w-3xl mx-auto px-4">
      <!-- Titulo -->
      <h2 class="text-2xl sm:text-4xl font-bold mb-8 gradient-text text-center">Sobre mim</h2>

      <!-- FOTO VAI FICAR AQUI!!! -->
      <div class="flex justify-center mb-10">
        <img
          src="/img/perfil.jpeg"
          alt="Foto Perfil"
          class="w-28 h-28 md:w-35 md:h-35 -rotate-35 border-2 border-mainTheme/40 rounded-full object-cover shadow-2xl shadow-mainTheme"
        />
      </div>

      <!-- CONTAINER DE FORMAÇÃO -->
      <div class="text-center mb-9 space-y-6 sm:px-7">
        <h3 class="text-xl sm:text-2xl font-bold mb-4 text-secondaryTheme">
          Formação e Habilidades
        </h3>
        <p class="text-sm sm:text-[16px] text-start sm:text-center">
          <strong class="strong2">Graduado</strong> em
          <strong class="strong2">redes de computadores</strong>,
          <strong class="strong2">especializado</strong> em
          <strong class="strong2">desenvolvimento web</strong>, com foco em
          <strong class="strong2">Vue.js</strong>, <strong class="strong2">Tailwind</strong>,
          <strong class="strong2">TypeScript</strong>, e também
          <strong class="strong2">React</strong>, criando interfaces elegantes, responsivas e de
          alto desempenho, desenvolvendo componentes reutilizáveis e aplicando animações envolventes
          para experiências dinâmicas.
        </p>

        <!-- Skills container -->
        <div class="flex flex-col gap-4">
          <!-- Subcontainer que engloba as skills -->
          <div
            class="flex flex-col justify-center items-center rounded-xl p-6 transition-all duration-300"
          >
            <h3 class="text-xl font-bold mb-4 text-myWhite">Tecnologias</h3>

            <!-- Container que engloba todas as skills-->
            <div class="grid max-ssm:grid-cols-2 grid-cols-3 sm:grid-cols-6 gap-10 pt-7">
              <!-- Irá iterar o array de skills e estiliza-las cada uma nessa span -->
              <div
                v-for="(skill, index) in skillsFront"
                :key="index"
                class="flex flex-col items-center justify-center gap-2 hover:scale-95 active:scale-95 transition-all duration-500"
              >
                <!-- Usando v-html para renderizar o SVG do objeto -->
                <v-icon
                  :name="skill.icon"
                  scale="2.5"
                  :fill="skill.tech === 'JavaScript' ? '#ffcc00' : ''"
                />
                <span class="font-semibold text-myWhite">
                  {{ skill.tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
