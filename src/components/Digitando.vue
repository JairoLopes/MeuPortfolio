<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Define as propriedades (props) que o componente espera.
const props = defineProps<{
  textos: string[] // Uma lista de strings para serem digitadas.
  classesTw: string // Classes CSS para o texto.
  classeCursor: string // Classes CSS para o cursor.
}>()

// O estado reativo para o texto sendo exibido.
const textoExibido = ref('')
// O estado para o índice do texto atual na lista.
const indexTextoAtual = ref(0)
// O estado para o índice da letra dentro do texto atual.
const indexCaractere = ref(0)
// Estado que controla se o texto está sendo apagado.
const deletando = ref(false)
// Estado que controla a visibilidade do cursor para o efeito de piscar.
const mostrarCursor = ref(true)

const velocidadeDigitar = 80
const velocidadeDeletar = 40
const pausaNoFinalDigitar = 2000
const pausaNoFinalDeletar = 500

let timeout: ReturnType<typeof setTimeout> | null = null
let cursorInterval: ReturnType<typeof setInterval> | null = null

// Função principal para gerenciar a lógica de digitação e deleção.
const iniciarDigitacao = () => {
  const textoAtual = props.textos[indexTextoAtual.value]

  if (deletando.value) {
    // Se estiver deletando...
    if (indexCaractere.value > 0) {
      // Remove a última letra do texto e continua a deleção.
      indexCaractere.value--
      textoExibido.value = textoAtual.slice(0, indexCaractere.value)
      timeout = setTimeout(iniciarDigitacao, velocidadeDeletar)
    } else {
      // Terminou de deletar, muda para o próximo texto e começa a digitar novamente.
      timeout = setTimeout(() => {
        deletando.value = false
        indexTextoAtual.value = (indexTextoAtual.value + 1) % props.textos.length
        iniciarDigitacao()
      }, pausaNoFinalDeletar)
    }
  } else {
    // Se estiver digitando...
    if (indexCaractere.value < textoAtual.length) {
      // Adiciona a próxima letra e continua a digitação.
      indexCaractere.value++
      textoExibido.value = textoAtual.slice(0, indexCaractere.value)
      timeout = setTimeout(iniciarDigitacao, velocidadeDigitar)
    } else {
      // Terminou de digitar, faz uma pausa e começa a deleção.
      timeout = setTimeout(() => {
        deletando.value = true
        iniciarDigitacao()
      }, pausaNoFinalDigitar)
    }
  }
}

// O hook 'onMounted' é chamado quando o componente é montado no DOM.
onMounted(() => {
  iniciarDigitacao()
  // Inicia um ciclo separado para o cursor piscante.
  cursorInterval = setInterval(() => {
    mostrarCursor.value = !mostrarCursor.value
  }, 500)
})

// O hook 'onUnmounted' garante que os temporizadores sejam limpos.
onUnmounted(() => {
  if (timeout) clearTimeout(timeout)
  if (cursorInterval) clearInterval(cursorInterval)
})
</script>

<template>
  <h1 :class="classesTw" class="text-secondaryTheme min-h-[30px] flex items-center justify-center">
    <!-- Exibe o texto sendo digitado/deletado. -->
    {{ textoExibido }}
    <!-- Span para o cursor, com opacidade controlada pelo estado 'mostrarCursor'. -->
    <span
      :class="classeCursor"
      :style="{ opacity: mostrarCursor ? 1 : 0 }"
      class="inline-block w-[0.5ch] transition-opacity"
      >|</span
    >
  </h1>
</template>
