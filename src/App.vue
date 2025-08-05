<template>
  <div>
    <!-- Renderiza o LoadingScreen apenas se isLoaded for 'false' -->
    <LoadingScreen v-if="!isLoaded" @complete="handleLoadingComplete" />

    <div
      class="overflow-x-hidden min-h-screen transition-opacity duration-700 bg-deepBlue text-myWhite"
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
      <Exp />

      <!-- Componente Projects -->
      <Projects />

      <!-- Componente Testimonial -->
      <Testimonial />

      <!-- Componente Contact -->
      <Contact />

      <!-- Componente Footer -->
      <Footer />
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
import Projects from '@/components/Projects.vue'
import Testimonial from '@/components/Testimonial.vue'
import Contact from '@/components/Contact.vue'
import Footer from './components/Footer.vue'

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
