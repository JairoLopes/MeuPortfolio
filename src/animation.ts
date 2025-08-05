// animation.js
// Variants para VueUse Motion (animações de entrada)

// Animação: Texto inicia pequeno e sem opacidade, crescendo até o tamanho original e ganhando opacidade
export const growIn = {
  initial: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: 'easeInOut' },
  },
}

// Animação: Elemento desliza de cima para baixo enquanto ganha opacidade
export const slideDownFadeIn = {
  initial: { translateY: -50, opacity: 0 },
  enter: {
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

// Animação: Elemento surgindo de baixo para cima com fade-in
export const slideUpFadeIn = {
  initial: { translateY: 50, opacity: 0 },
  enter: {
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

// Animação: Elemento gira em 360 graus enquanto ganha opacidade
export const rotate360In = {
  initial: { rotate: -360, opacity: 0 },
  enter: {
    rotate: 0,
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
}

// Animação: Elemento aparece de forma pulsante, aumentando e diminuindo levemente de tamanho
export const pulseIn = {
  initial: { scale: 0.8, opacity: 0 },
  enter: {
    scale: [0.8, 1.1, 1],
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

// Animação: Elemento desliza da esquerda para a posição original enquanto ganha opacidade
export const slideRight = {
  initial: { x: '-100%', opacity: 0 },
  enter: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

// Animação: Elemento desliza da direita para a posição original enquanto ganha opacidade
export const slideLeft = {
  initial: { x: '100%', opacity: 0 },
  enter: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}
