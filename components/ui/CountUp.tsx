'use client';

import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CountUpProps {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function CountUp({ to, duration = 1.5, suffix = '', prefix = '', decimals = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) motionValue.set(to);
  }, [isInView, motionValue, to]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
      }
    });
  }, [springValue, suffix, prefix, decimals]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
