<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  textos: string[]
  classesTw?: string
}>()

const atual = ref(0)
const visivel = ref(true)
const entrando = ref(true)

let intervalId: ReturnType<typeof setInterval> | null = null

// tempo entre trocas
const tempoTroca = 2700
// duração do fade + slide + blur
const duracaoFade = 600

onMounted(() => {
  intervalId = setInterval(() => {
    // fase de saída (fade-out, slide-left, blur)
    visivel.value = false
    entrando.value = false

    setTimeout(() => {
      // troca o texto
      atual.value = (atual.value + 1) % props.textos.length

      // prepara para animação de entrada
      entrando.value = true
      visivel.value = true
    }, duracaoFade)
  }, tempoTroca)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <h1
    :class="classesTw"
    class="transition-all duration-700 ease-out relative inline-block"
    :style="{
      opacity: visivel ? '1' : '0',
      transform: visivel ? (entrando ? 'translateX(0)' : 'translateX(15px)') : 'translateX(-15px)',
      filter: visivel ? 'blur(0px)' : 'blur(6px)',
    }"
  >
    {{ props.textos[atual] }}
  </h1>
</template>
