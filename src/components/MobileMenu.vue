<script setup lang="ts">
// Define as propriedades (props) que este componente pode receber.
const props = defineProps<{
  menuOpen: boolean
}>()

// Define os eventos que este componente pode emitir.
// O evento 'update:menuOpen' é a convenção para uso com 'v-model'.
const emit = defineEmits(['update:menuOpen'])

// Função para fechar o menu mobile.
// Emite o evento 'update:menuOpen' com o valor 'false'.
const closeMenu = () => {
  emit('update:menuOpen', false)
}
</script>

<template>
  <div
    :class="{
      'opacity-100 pointer-events-auto h-screen': props.menuOpen,
      'opacity-0 pointer-events-none h-0': !props.menuOpen,
    }"
    class="flex flex-col items-center justify-center gap-3 fixed top-0 left-0 w-full h-full bg-navBlack backdrop-blur-lg z-40 transition-all duration-300 ease-in-out"
  >
    <!-- BOTÃO X para fechar o menu -->
    <button
      @click="closeMenu"
      class="absolute top-8 right-4 text-white focus:outline-none cursor-pointer"
      aria-label="Close menu"
    >
      <!-- Ícone 'X' em SVG -->
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
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    </button>

    <!-- LINKS DO MENU MOBILE -->
    <a
      href="#home"
      @click="closeMenu"
      :class="{
        'opacity-100 translate-y-0': props.menuOpen,
        'opacity-0 -translate-y-32': !props.menuOpen,
      }"
      class="text-2xl font-semibold text-white mt-4 transform transition-transform duration-700"
    >
      Home
    </a>

    <a
      href="#about"
      @click="closeMenu"
      :class="{
        'opacity-100 translate-y-0': props.menuOpen,
        'opacity-0 -translate-y-32': !props.menuOpen,
      }"
      class="text-2xl font-semibold text-white mt-4 transform transition-transform duration-400"
    >
      Sobre
    </a>

    <a
      href="#experiencia"
      @click="closeMenu"
      :class="{
        'opacity-100 translate-y-0': props.menuOpen,
        'opacity-0 -translate-y-32': !props.menuOpen,
      }"
      class="text-2xl font-semibold text-white mt-4 transform transition-transform duration-400"
    >
      Experiência
    </a>

    <a
      href="#projects"
      @click="closeMenu"
      :class="{
        'opacity-100 translate-y-0': props.menuOpen,
        'opacity-0 -translate-y-32': !props.menuOpen,
      }"
      class="text-2xl font-semibold text-white mt-4 transform transition-transform duration-600"
    >
      Projetos
    </a>

    <a
      href="#depoimentos"
      @click="closeMenu"
      :class="{
        'opacity-100 translate-y-0': props.menuOpen,
        'opacity-0 -translate-y-32': !props.menuOpen,
      }"
      class="text-2xl font-semibold text-white mt-4 transform transition-transform duration-600"
    >
      Depoimentos
    </a>

    <a
      href="#contact"
      @click="closeMenu"
      :class="{
        'opacity-100 translate-y-0': props.menuOpen,
        'opacity-0 -translate-y-32': !props.menuOpen,
      }"
      class="text-2xl font-semibold text-white mt-4 transform transition-transform duration-800"
    >
      Contato
    </a>
  </div>
</template>
