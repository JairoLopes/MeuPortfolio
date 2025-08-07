<script setup lang="ts">
import { ref, watch } from 'vue'
import emailjs from '@emailjs/browser'
import { scaleIn } from '@/animation'

// Estado reativo para os campos do formulário
const nome = ref('')
const email = ref('')
const mensagem = ref('')
const enviado = ref(false)

// Função para manipular o envio do formulário
const handleSubmit = (e: Event) => {
  e.preventDefault()

  // Validação dos campos
  if (nome.value === '' || email.value === '' || mensagem.value === '') {
    alert('Preencha todos os campos!')
    return
  }

  // Configuração do EmailJS
  const templateParams = {
    from_name: nome.value,
    from_email: email.value,
    message: mensagem.value,
  }

  emailjs.send('service_c384sav', 'template_3a4qd4o', templateParams, 'NChENVlj8_NFLEaU0').then(
    (resposta) => {
      console.log(`${resposta.status}, ${resposta.text}`)
      enviado.value = true
      nome.value = ''
      email.value = ''
      mensagem.value = ''
    },
    (erro) => {
      console.log(erro)
      alert('Ocorreu um erro ao enviar a mensagem!')
    },
  )
}

// O 'watch' observa a variável 'enviado' e executa uma função quando ela muda
watch(enviado, (novoValor) => {
  if (novoValor) {
    const timer = setTimeout(() => {
      enviado.value = false
    }, 2000)

    // Limpeza para evitar vazamentos de memória
    // Não é estritamente necessário no Vue, mas é uma boa prática
    return () => clearTimeout(timer)
  }
})
</script>

<template>
  <section id="contact" class="min-h-screen flex justify-center pt-[10%] pb-20">
    <!-- Div que engloba todo o CONTACT -->
    <div class="relative px-4 w-150">
      <!-- TITULO -->
      <h2 class="text-center text-2xl sm:text-3xl font-bold mb-16 gradient-text">Contato</h2>

      <form @submit="handleSubmit" class="space-y-6">
        <!-- CONTAINER ONDE FICA O INPUT DE NOME -->
        <div class="relative">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            v-model="nome"
            required
            class="input-style"
          />
        </div>

        <!-- CONTAINER ONDE FICA O INPUT DE EMAIL -->
        <div class="relative">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="exemplo@gmail.com"
            v-model="email"
            required
            class="input-style"
          />
        </div>

        <!-- CONTAINER ONDE FICA A TEXTAREA -->
        <div class="relative">
          <textarea
            id="msg"
            name="msg"
            placeholder="Sua mensagem..."
            v-model="mensagem"
            required
            rows="5"
            class="input-style resize-none"
          />
        </div>

        <button type="submit" class="w-full btn-submit">Enviar</button>
      </form>

      <!-- Renderiza a mensagem de sucesso caso o formulário tenha sido enviado -->
      <Transition name="fade">
        <span
          v-if="enviado"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-secondaryTheme text-white font-bold rounded-lg shadow-lg p-7"
        >
          Mensagem enviada com sucesso!
        </span>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
/* Transição para a mensagem de sucesso */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
