'use client';

import Loader from '@/components/ui/Loader';
import MagneticCursor from '@/components/ui/MagneticCursor';
import Lenis from 'lenis';
import { useEffect, useState } from 'react';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Page load animation — show for 1.4 s then dismiss
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      <MagneticCursor />
      {children}
    </>
  );
}
