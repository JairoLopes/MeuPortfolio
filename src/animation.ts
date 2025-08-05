// src/animation.ts

// Animação de entrada com zoom e fade
export const scaleIn = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 500,
    },
  },
}

// Animação de entrada suave (desaparecendo)
export const fadeIn = {
  initial: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1000 } },
}

// Animação de entrada subindo
export const slideUp = {
  initial: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', duration: 1000, delay: 200 } },
}

// --- NOVAS ANIMAÇÕES ---

// Animação de entrada deslizando da esquerda para a direita
export const slideInLeft = {
  initial: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 10,
      delay: 0,
    },
  },
}

// Animação de entrada deslizando da direita para a esquerda
export const slideInRight = {
  initial: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 10,
      delay: 0,
    },
  },
}

// Efeito de virar (flip) no eixo Y
export const flipY = {
  initial: { rotateY: -90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
}

// Animação de rotação (spin)
export const spin = {
  initial: { rotate: -180, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: 200,
    },
  },
}

// Animação de entrada com zoom e deslize da esquerda
export const scaleInLeft = {
  initial: { x: -20, scale: 0.8, opacity: 0 },
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 10,
      delay: 300,
    },
  },
}

// Animação de entrada com zoom e deslize da direita
export const scaleInRight = {
  initial: { x: 20, scale: 0.8, opacity: 0 },
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 10,
      delay: 300,
    },
  },
}

// Animação de entrada subindo com um pequeno "bounce"
export const popUp = {
  initial: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
}
