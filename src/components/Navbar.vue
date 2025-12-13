<template>
  <!-- border-t border-mainTheme/20 shadow-2xl shadow-mainTheme -->
  <nav :class="[isScrolling ? 'bg-navBlack' : 'bg-transparent', 'fixed top-0 w-full z-40']">
    <!-- CONTAINER QUE ENGLOBA TODA NAVBAR -->
    <div class="max-w-5xl mx-auto px-4 py-1">
      <div class="flex justify-between items-center h-16">
        <!-- Botão para mudar idioma -->
        <span
          class="px-5 flex flex-col items-center cursor-pointer active:scale-80 transition-all text-primaryTheme"
          @click="toggleLanguage"
        >
          <v-icon name="md-language" scale="1.4" />
          <span class="text-white">{{ locale === 'pt' ? 'en' : 'pt-br' }}</span>
        </span>

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
            {{ $t('navbar.menu.home') }}
            <span
              class="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-thirdTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"
            ></span>
          </a>

          <!-- ABOUT -->
          <a
            href="#about"
            class="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
          >
            {{ $t('navbar.menu.sobre') }}
            <span
              class="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-thirdTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"
            ></span>
          </a>

          <!-- EXPERIENCIA -->
          <a
            href="#experiencia"
            class="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
          >
            {{ $t('navbar.menu.experiencia') }}
            <span
              class="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-thirdTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"
            ></span>
          </a>

          <!-- PROJETOS -->
          <a
            href="#projects"
            class="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
          >
            {{ $t('navbar.menu.projetos') }}
            <span
              class="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-thirdTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"
            ></span>
          </a>

          <!-- DEPOIMENTOS -->
          <a
            href="#depoimentos"
            class="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
          >
            {{ $t('navbar.menu.depoimentos') }}
            <span
              class="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-thirdTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"
            ></span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { watch, onUnmounted, onMounted, ref } from 'vue'
import { throttle } from 'lodash'
import { useI18n } from 'vue-i18n'
import { addIcons } from 'oh-vue-icons'
import { MdLanguage } from 'oh-vue-icons/icons'
addIcons(MdLanguage)

const { locale } = useI18n()

function toggleLanguage() {
  locale.value = locale.value === 'pt' ? 'en' : 'pt'
}

const isScrolling = ref(false)

// Define uma função para atualizar a variável isScrolling.
const updateScrollingState = () => {
  isScrolling.value = window.scrollY > 0
  /* console.log("Ativando função que atualiza o 'isScrolling'") */
}

// Crie a função que será 'throttled', mas só chame updateScrollingState se for tela grande.
const handleScroll = throttle(() => {
  // Use matchMedia para verificar se a tela é maior que 768px (o mesmo que md: do Tailwind).
  if (window.matchMedia('(min-width: 768px)').matches) {
    updateScrollingState()
  } else {
    // Para telas pequenas, garanta que o estado de rolagem seja sempre falso para evitar a estilização.
    isScrolling.value = false
  }
}, 500)

onMounted(() => {
  // Adicione o 'event listener' com a função 'throttled'.
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  // Remova o 'event listener' no 'unmounted'.
  window.removeEventListener('scroll', handleScroll)
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
