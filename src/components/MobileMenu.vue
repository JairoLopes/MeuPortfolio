<template>
  <!-- Container principal -->
  <div
    :class="{
      'opacity-100 pointer-events-auto': props.menuOpen,
      'opacity-0 pointer-events-none': !props.menuOpen,
    }"
    class="fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out"
  >
    <!-- Overlay com gradiente sutil -->
    <div
      @click="closeMenu"
      class="absolute inset-0 bg-gradient-to-br from-deepBlue/90 via-navBlack/95 to-thirdTheme/20 backdrop-blur-sm transition-opacity duration-300"
    />

    <!-- Conteúdo do menu -->
    <div class="relative z-10 w-full max-w-md px-6">
      <!-- Itens do menu -->
      <div class="space-y-3 py-8">
        <a
          v-for="(item, index) in menuItems"
          :key="index"
          :href="item.href"
          @click="closeMenu"
          :class="[
            'block transform transition-all duration-500',
            props.menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          ]"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="relative overflow-hidden group">
            <!-- Card do item com gradiente sutil -->
            <div
              class="relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-thirdTheme/30 hover:shadow-lg hover:shadow-thirdTheme/10 group-hover:scale-[1.02]"
            >
              <!-- Gradiente animado no hover -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-thirdTheme/10 via-transparent to-secondaryTheme/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <!-- Texto -->
              <div class="relative flex items-center justify-between">
                <span class="text-xl font-semibold text-myWhite">
                  {{ $t(item.key) }}
                </span>

                <!-- Ícone decorativo -->
                <svg
                  class="w-5 h-5 text-thirdTheme transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>

      <!-- Botão de idioma -->
      <div
        :class="[
          'mt-8 transform transition-all duration-500',
          props.menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        ]"
        style="transition-delay: 500ms"
      >
        <button
          @click="toggleLanguage"
          class="w-full py-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-thirdTheme/30 transition-all duration-300 group"
        >
          <div class="flex items-center justify-center gap-3">
            <!-- Ícone de idioma -->
            <div
              class="w-8 h-8 rounded-full bg-gradient-to-br from-thirdTheme/20 to-secondaryTheme/20 flex items-center justify-center"
            >
              <svg
                class="w-4 h-4 text-thirdTheme group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
            </div>

            <!-- Texto -->
            <span class="text-myWhite font-medium">
              {{ locale === 'pt' ? 'Switch to English' : 'Mudar para Português' }}
            </span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const props = defineProps<{
  menuOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'update:menuOpen', value: boolean): void
}>()

// Itens do menu simplificados
const menuItems = [
  { key: 'navbar.menu.home', href: '#home' },
  { key: 'navbar.menu.sobre', href: '#about' },
  { key: 'navbar.menu.experiencia', href: '#experiencia' },
  { key: 'navbar.menu.projetos', href: '#projects' },
  { key: 'navbar.menu.depoimentos', href: '#depoimentos' },
]

const closeMenu = () => {
  emit('update:menuOpen', false)
}

const toggleLanguage = () => {
  locale.value = locale.value === 'pt' ? 'en' : 'pt'
}
</script>

<style scoped>
/* Animação de entrada suave */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
