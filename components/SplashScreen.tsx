'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function SplashScreen() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('splashShown')) return
    setShow(true)
    sessionStorage.setItem('splashShown', '1')
    const timer = setTimeout(() => setShow(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-slate-950"
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-2xl shadow-primary-500/30"
          >
            <span className="text-white font-display font-bold text-4xl">R</span>
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 text-xl font-display font-semibold gradient-text"
          >
            Rudrek Pan
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
