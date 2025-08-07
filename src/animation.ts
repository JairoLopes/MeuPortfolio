export const scaleIn = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5, // segundos, pois motion-v usa segundos, não milissegundos
    },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
}

export const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 150,
      damping: 10,
    },
  },
}

export const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      stiffness: 150,
      damping: 10,
      delay: 0,
    },
  },
}

export const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      stiffness: 150,
      damping: 10,
      delay: 0,
    },
  },
}

export const flipY = {
  hidden: { rotateY: -90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: {
      stiffness: 100,
      damping: 10,
    },
  },
}

export const spin = {
  hidden: { rotate: -180, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      stiffness: 100,
      damping: 15,
      delay: 0.2,
    },
  },
}

export const scaleInLeft = {
  hidden: { x: -20, scale: 0.8, opacity: 0 },
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      stiffness: 150,
      damping: 10,
      delay: 0.3,
    },
  },
}

export const scaleInRight = {
  hidden: { x: 20, scale: 0.8, opacity: 0 },
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      stiffness: 150,
      damping: 10,
      delay: 0.3,
    },
  },
}

export const popUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 100,
      damping: 12,
    },
  },
}
