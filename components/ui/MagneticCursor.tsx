'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function MagneticCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Inner dot — very snappy
  const dotX = useSpring(mouseX, { stiffness: 3000, damping: 100 });
  const dotY = useSpring(mouseY, { stiffness: 3000, damping: 100 });

  // Outer ring — lags behind for trail effect
  const ringX = useSpring(mouseX, { stiffness: 200, damping: 28 });
  const ringY = useSpring(mouseY, { stiffness: 200, damping: 28 });

  useEffect(() => {
    // Only activate on non-touch devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    document.documentElement.classList.add('custom-cursor');
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, [role="button"], input, select, textarea') !== null;
      setIsPointer(clickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.documentElement.classList.remove('custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Glowing inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{ width: isPointer ? 12 : 8, height: isPointer ? 12 : 8 }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full border border-primary/70"
          animate={{
            width: isPointer ? 48 : 36,
            height: isPointer ? 48 : 36,
            borderColor: isPointer ? 'rgba(139,92,246,0.9)' : 'rgba(139,92,246,0.5)',
          }}
          transition={{ duration: 0.2 }}
          style={{
            boxShadow: isPointer ? '0 0 15px rgba(139,92,246,0.4)' : '0 0 8px rgba(139,92,246,0.2)',
          }}
        />
      </motion.div>
    </>
  );
}
