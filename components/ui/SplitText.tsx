'use client';

import { motion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
}

export function SplitText({ text, className = '', delay = 0, charDelay = 0.04 }: SplitTextProps) {
  return (
    <span className={className} style={{ display: 'inline-block', perspective: '1000px' }}>
      {text.split('').map((char, i) => (
        <motion.span
          // biome-ignore lint/suspicious/noArrayIndexKey: character index is intentional here
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 60, rotateX: -90, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
          transition={{
            delay: delay + i * charDelay,
            duration: 0.6,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          style={{ display: 'inline-block', transformOrigin: '50% 100%' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}
