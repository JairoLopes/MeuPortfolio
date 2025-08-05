<template>
  <nav
    :class="[
      isScrolling ? 'bg-navBlack' : 'bg-transparent',
      'fixed top-0 w-full z-40 border-white/10',
    ]"
  >
    <div class="max-w-5xl mx-auto px-4 p-3">
      <div class="flex justify-between items-center h-16">
        <!-- LOGO NOME -->
        <a id="logo" href="#home" class="flex gap-2 font-mono text-xl font-bold text-white">
          <span class="block text-mainTheme animate-bounce text-2xl"><</span>
          <p class="animate-pulse">Portfólio</p>
          <span
            class="block text-secondaryTheme text-2xl animate-bounce"
            style="animation-delay: 500ms"
          >
            />
          </span>
        </a>

        <!-- CONTAINER DO ICONE HAMBURGUER (aparece apenas em telas pequenas) -->
        <div id="burger-zip" class="w-7 h-5 cursor-pointer z-40 md:hidden" @click="toggleMenu">
          <!-- Ícone do menu (hamburger) em SVG -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-2"
          >
            <line x1="3" x2="21" y1="12" y2="12"></line>
            <line x1="3" x2="21" y1="6" y2="6"></line>
            <line x1="3" x2="21" y1="18" y2="18"></line>
          </svg>
        </div>

        <!-- CONTAINER DO MENU (aparece apenas em telas grandes) -->
        <div class="hidden md:flex items-center space-x-8 font-extrabold">
          <!-- HOME -->
          <a
            href="#home"
            class="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
          >
            Home
            <span
              class="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-mainTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"
            ></span>
          </a>

          <!-- ABOUT -->
          <a
            href="#about"
            class="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
          >
            Sobre
            <span
              class="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-mainTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"
            ></span>
          </a>

          <!-- EXPERIENCIA -->
          <a
            href="#experiencia"
            class="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
          >
            Experiência
            <span
              class="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-mainTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"
            ></span>
          </a>

          <!-- PROJETOS -->
          <a
            href="#projects"
            class="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
          >
            Projetos
            <span
              class="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-mainTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"
            ></span>
          </a>

          <!-- DEPOIMENTOS -->
          <a
            href="#depoimentos"
            class="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
          >
            Depoimentos
            <span
              class="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-mainTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"
            ></span>
          </a>

          <!-- CONTATO -->
          <a
            href="#contact"
            class="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
          >
            Contato
            <span
              class="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-mainTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"
            ></span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Importa 'watch' para observar mudanças em propriedades reativas e 'ref' para estado.
import { watch, onUnmounted, onMounted, ref } from 'vue'
import { throttle } from 'lodash'

const isScrolling = ref(false)

function handleScroll() {
  isScrolling.value = window.scrollY > 0
}

const myThrottle = throttle(handleScroll, 300)

onMounted(() => {
  window.addEventListener('scroll', myThrottle)
})

// Define as propriedades (props) que este componente pode receber.
// 'menuOpen' é um booleano que indica se o menu mobile está aberto.
const props = defineProps<{
  menuOpen: boolean
}>()

// Define os eventos que este componente pode emitir.
// O evento 'update:menuOpen' é a convenção para uso com 'v-model' no componente pai.
const emit = defineEmits(['update:menuOpen'])

// O watcher observa a mudança na prop 'menuOpen'.
// Se 'menuOpen' for 'true', ele define o overflow do body para 'hidden',
// evitando que o usuário role a página enquanto o menu está aberto.
// Quando 'menuOpen' se torna 'false', ele reseta o estilo.
watch(
  () => props.menuOpen,
  (newValue) => {
    document.body.style.overflow = newValue ? 'hidden' : ''
  },
)

// Garante que o overflow seja resetado se o componente for desmontado,
// o que é uma boa prática para evitar bugs inesperados.
onUnmounted(() => {
  document.body.style.overflow = ''
})

// Função para alternar o estado do menu mobile.
// Emite o evento 'update:menuOpen' com o valor oposto de 'menuOpen'.
const toggleMenu = () => {
  emit('update:menuOpen', !props.menuOpen)
}
</script>
