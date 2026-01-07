<template>
  <div
    :class="{ 'opacity-0': isFading, 'opacity-100': !isFading }"
    class="flex flex-col items-center justify-center fixed inset-0 z-50 bg-navBlack transition-all duration-300"
  >
    <!-- Elementos decorativos de fundo -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Gradiente animado de fundo -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-deepBlue via-navBlack to-thirdTheme/10"
      ></div>

      <!-- Partículas animadas -->
      <div
        v-for="n in 12"
        :key="n"
        class="absolute rounded-full"
        :style="getParticleStyle(n)"
      ></div>
    </div>

    <!-- Conteúdo principal -->
    <div class="relative z-10 flex flex-col items-center">
      <!-- Container do logo/círculo animado -->
      <div class="relative mb-8">
        <!-- Círculo externo com gradiente animado -->
        <div class="relative w-32 h-32">
          <!-- Círculo de fundo com brilho -->
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-br from-thirdTheme/20 to-secondaryTheme/20 blur-md"
          ></div>

          <!-- Círculo giratório -->
          <div class="absolute inset-2 rounded-full border-2 border-transparent animate-spin-slow">
            <div
              class="absolute inset-0 rounded-full border-2 border-thirdTheme/30 border-t-transparent border-r-transparent"
            ></div>
            <div
              class="absolute inset-2 rounded-full border-2 border-secondaryTheme/30 border-b-transparent border-l-transparent"
            ></div>
          </div>

          <!-- Círculo interno pulsante -->
          <div
            class="absolute inset-8 rounded-full bg-gradient-to-br from-thirdTheme to-secondaryTheme animate-pulse-slow"
          ></div>

          <!-- J central -->
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-4xl font-bold text-myWhite tracking-wider">J</span>
          </div>
        </div>

        <!-- Pontos orbitais -->
        <div
          v-for="n in 4"
          :key="`orbital-${n}`"
          class="absolute w-4 h-4 rounded-full bg-gradient-to-br from-thirdTheme to-secondaryTheme"
          :style="getOrbitalStyle(n)"
        ></div>
      </div>

      <!-- Texto de loading -->
      <motion.div
        :initial="{ opacity: 0, y: 10 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }"
        class="mb-6"
      >
        <span class="text-lg font-medium text-thirdTheme tracking-wider">Carregando</span>
      </motion.div>

      <!-- Barra de progresso sutil -->
      <div class="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          class="h-full bg-gradient-to-r from-thirdTheme to-secondaryTheme animate-progress"
        ></div>
      </div>

      <!-- Informação adicional -->
      <div class="mt-8 text-center">
        <p class="text-sm text-myWhite/50 font-light tracking-wide">Frontend Developer</p>
        <div class="flex items-center justify-center gap-2 mt-2">
          <div class="w-1 h-1 rounded-full bg-thirdTheme animate-pulse"></div>
          <div
            class="w-1 h-1 rounded-full bg-secondaryTheme animate-pulse"
            style="animation-delay: 0.2s"
          ></div>
          <div
            class="w-1 h-1 rounded-full bg-thirdTheme animate-pulse"
            style="animation-delay: 0.4s"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { motion } from 'motion-v'

const props = defineProps<{
  onComplete: () => void
}>()

const isFading = ref(false)

// Funções para estilos dinâmicos
const getParticleStyle = (index: number) => {
  const size = Math.random() * 4 + 2
  const duration = Math.random() * 3 + 2
  const delay = Math.random() * 2
  const color = index % 3 === 0 ? 'thirdTheme' : index % 3 === 1 ? 'secondaryTheme' : 'mainTheme'

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    backgroundColor: `var(--color-${color})`,
    opacity: 0.1 + Math.random() * 0.2,
    animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
  }
}

const getOrbitalStyle = (index: number) => {
  const angle = index * 90 * (Math.PI / 180)
  const radius = 56
  const x = radius * Math.cos(angle)
  const y = radius * Math.sin(angle)
  const duration = 4 + index * 0.5

  return {
    left: `calc(50% + ${x}px - 8px)`,
    top: `calc(50% + ${y}px - 8px)`,
    animation: `orbit ${duration}s linear infinite`,
  }
}

onMounted(() => {
  // Reduzido o tempo total: 800ms até começar fade + 300ms fade = 1100ms total
  setTimeout(() => {
    isFading.value = true

    setTimeout(() => {
      props.onComplete()
    }, 300)
  }, 1000)
})
</script>

<style scoped>
/* Animações personalizadas */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(0.95);
  }
}

@keyframes progress {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(-20px) translateX(10px);
  }
}

@keyframes orbit {
  0% {
    transform: rotate(0deg) translateX(40px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(40px) rotate(-360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 2s ease-in-out infinite;
}

.animate-progress {
  animation: progress 1.5s ease-in-out infinite;
}

/* Ajustes para cores do tema */
:root {
  --color-thirdTheme: #00cc99;
  --color-secondaryTheme: #33adff;
  --color-mainTheme: #c7c7d1;
  --color-deepBlue: #050505;
  --color-navBlack: #000000;
  --color-myWhite: #e2e6e9;
}
</style>
