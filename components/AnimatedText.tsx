'use client'

import { motion, Variants } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export function AnimatedText({ text, className = '', delay = 0 }: AnimatedTextProps) {
  const letters = text.split('')

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      className={`inline-block ${className}`}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          custom={index + delay * 10}
          variants={letterVariants}
          className="inline-block"
          style={{ whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  )
}
