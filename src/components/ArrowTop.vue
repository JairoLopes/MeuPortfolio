<template>
  <!-- Seta que aparece apenas em mobile e rola para o topo -->
  <button
    v-if="showArrow"
    @click="scrollToTop"
    class="fixed md:hidden p-2 bottom-6 right-3 z-50 rounded-full bg-gradient-to-r from-thirdTheme via-thirdTheme/70 to-secondaryTheme shadow-lg shadow-thirdTheme/30 hover:shadow-thirdTheme/50 transition-all duration-300 active:scale-95"
    aria-label="Voltar ao topo"
  >
    <v-icon name="fa-arrow-alt-circle-up" scale="2" class="text-white" />
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { addIcons } from 'oh-vue-icons'
import { FaArrowAltCircleUp } from 'oh-vue-icons/icons'

addIcons(FaArrowAltCircleUp)

const showArrow = ref(false)

// Função para verificar scroll e mostrar/ocultar seta
const handleScroll = () => {
  showArrow.value = window.scrollY > 150 // Aparece após 150px de scroll vertical
}

// Função para rolar suavemente até o topo
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Verifica posição inicial
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
