<template>
  <div class="relative">
    <!-- Renderiza o LoadingScreen apenas se isLoaded for 'false' -->
    <LoadingScreen v-if="!isLoaded" @complete="handleLoadingComplete" />

    <!-- CONTAINER ONDE ESTÃO TODOS OS COMPONENTES -->
    <div
      class="overflow-x-hidden min-h-screen transition-opacity duration-700 text-myWhite"
      :class="{ 'opacity-100': isLoaded, 'opacity-0': !isLoaded }"
    >
      <!-- NavBar e MobileMenu - serão renderizados sempre, mas a visibilidade interna é controlada por 'menuOpen' -->
      <NavBar :menu-open="menuOpen" @update:menu-open="menuOpen = $event" />
      <MobileMenu :menu-open="menuOpen" @update:menu-open="menuOpen = $event" />

      <!-- Componente Home -->
      <Home v-if="isLoaded" />

      <!-- Componente About -->
      <About />

      <!-- Componente Exp -->
      <Templates />

      <!-- Componente Projects -->
      <Projects />

      <!-- Componente Exp -->
      <Exp />

      <!-- Componente Testimonial -->
      <Testimonial />

      <!-- Componente Footer -->
      <Footer />

      <!-- Componente da seta que leva ao topo -->
      <ArrowTop />
    </div>
  </div>
</template>

<script setup lang="ts">
// Importa as funções 'ref' e 'onMounted' do Vue para criar variáveis reativas.
import { ref } from 'vue'
import LoadingScreen from '@/components/LoadingScreen.vue'
import NavBar from '@/components/Navbar.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Exp from '@/components/Exp.vue'
import Templates from './components/Templates.vue'
import Projects from '@/components/Projects.vue'
import Testimonial from '@/components/Testimonial.vue'
import Footer from './components/Footer.vue'
import ArrowTop from './components/ArrowTop.vue'

// Define o estado reativo para controlar se a tela de carregamento já finalizou.
// Começa como 'false' para exibir a tela de carregamento inicialmente.
const isLoaded = ref(false)

// Define o estado reativo para controlar a abertura/fechamento do menu mobile.
// Começa como 'false' (fechado).
const menuOpen = ref(false)

// Função que será passada para o LoadingScreen para atualizar 'isLoaded'
const handleLoadingComplete = () => {
  isLoaded.value = true
}
</script>
