'use client';

import { AnimatePresence, motion } from 'framer-motion';

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.15)_0%,_transparent_70%)]" />

          <div className="relative flex flex-col items-center gap-6">
            {/* Logo mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
              className="text-7xl font-bold font-heading bg-gradient-to-r from-primary via-accent-cyan to-accent-pink bg-clip-text text-transparent"
            >
              HO
            </motion.div>

            {/* Loading bar */}
            <motion.div className="w-32 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent-cyan rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.9, delay: 0.2, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
