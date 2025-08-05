<template>
  <!-- 
    Div principal que cobre toda a tela.
    A classe ':class' controla a opacidade para a transição de fade-out.
  -->
  <div
    :class="{ 'opacity-0': isFading, 'opacity-100': !isFading }"
    class="flex flex-col items-center justify-center fixed inset-0 z-50 bg-deepBlue text-gray-100 transition-opacity duration-500"
  >
    <div class="flex gap-3 mb-4">
      <!-- 
        Ícone de ampulheta (Hourglass) em SVG. 
        As classes Tailwind, incluindo a animação 'animate-calmSpin', são aplicadas diretamente.
      -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="54"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="animate-calmSpin stroke-4 text-white"
      >
        <path d="M5 22h14" />
        <path d="M5 2h14" />
        <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
        <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
      </svg>
    </div>

    <!-- Barra de progresso do carregamento -->
    <div class="w-[200px] h-[2px] border-gray-800 rounded relative overflow-hidden">
      <div class="w-[40%] h-full bg-mainTheme shadow-[0_0_15px_#3b82f6] animate-loading"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Importa as funções 'ref' e 'onMounted' do Vue para gerenciar o estado e o ciclo de vida.
import { ref, onMounted } from 'vue'

// Define os 'props' que o componente espera receber do componente pai.
// O 'onComplete' é uma função que será chamada ao final da animação.
const props = defineProps<{
  onComplete: () => void
}>()

// Estado reativo para controlar se o componente deve começar a desaparecer (fade out).
const isFading = ref(false)

// O hook 'onMounted' é chamado quando o componente é montado no DOM.
// É o local ideal para iniciar as lógicas de temporizador.
onMounted(() => {
  // Primeiro temporizador: define o tempo de carregamento da tela.
  // Após 1700ms, 'isFading' se torna 'true', iniciando a animação de fade-out.
  setTimeout(() => {
    isFading.value = true

    // Segundo temporizador: define o tempo da animação de fade-out.
    // Após 500ms (duração da transição), a função 'onComplete' é chamada.
    setTimeout(() => {
      props.onComplete()
    }, 500)
  }, 1700)
})
</script>
