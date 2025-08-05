<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

// Array de dados dos depoimentos
const depoimentos = ref([
  {
    dep: 'Altamente profissional e cumpre o prazo, superou minhas expectativas',
    user: 'Talles Furtado',
  },
  {
    dep: 'Desde a faculdade que ele tinha desenvoltura pra código, e posso dizer que ele se aprimorou',
    user: 'Emerson Rocha',
  },
  {
    dep: 'Como colega de trabalho posso falar, Jairo tem uma mente extremamente criativa na hora de codificar',
    user: 'Ana Beatriz',
  },
  {
    dep: 'Contrataria novamente, prazo cumprido e trabalho de qualidade',
    user: 'Vinicius Chagas',
  },
  {
    dep: 'Atencioso e sempre perguntando a opnião do cliente, amei o resultado final',
    user: 'Mariana Souza',
  },
  {
    dep: 'Muito criativo, mentalidade de codificador',
    user: 'Pedro Almeida',
  },
])

// Configurações do carrossel
const carouselSettings = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 3500,
  pauseAutoplayOnHover: true,
  breakpoints: {
    // 768px e acima
    768: {
      itemsToShow: 1,
    },
  },
}
</script>

<template>
  <section
    id="depoimentos"
    class="min-h-fit flex flex-col items-center justify-start pt-[10%] pb-15 sm:pb-25"
  >
    <!-- Container dos depoimentos -->
    <div class="max-w-4xl mx-auto px-4 w-full">
      <!-- Título -->
      <h2 class="text-2xl sm:text-4xl font-bold mb-8 text-mainTheme text-center">Depoimentos</h2>

      <p class="text-center font-semibold sm:text-lg mb-6 sm:mb-14">
        Segue abaixo a opnião de alguns clientes e/ou colegas de trabalho.
      </p>

      <!-- Uso do Carousel para renderizar os depoimentos -->
      <Carousel v-bind="carouselSettings">
        <Slide v-for="(item, index) in depoimentos" :key="index">
          <!-- Container individual de cada depoimento -->
          <div
            class="flex flex-col items-center justify-center gap-4 text-sm sm:text-base min-h-[200px] p-6 bg-mainTheme/6 rounded-lg shadow-md transition-all duration-300"
          >
            <!-- Parte superior do card (IMAGEM E DEPOIMENTO) -->
            <div class="flex flex-col items-center justify-center gap-4 px-3 py-3">
              <v-icon name="fa-user" scale="2" class="text-thirdTheme" />
              <p class="text-center font-semibold text-myWhite leading-relaxed mt-5">
                &ldquo;{{ item.dep }}&rdquo;
              </p>
            </div>

            <!-- Parte inferior do card (NOME USUARIO) -->
            <div class="flex flex-col items-center">
              <p class="sm:text-lg font-semibold text-secondaryTheme mt-6">
                {{ item.user }}
              </p>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>
