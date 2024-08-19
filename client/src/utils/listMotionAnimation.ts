export const listMotion = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const listItemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -30 },
}