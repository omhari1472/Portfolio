'use client';

import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
}

export function Marquee({
  children,
  reverse = false,
  pauseOnHover = true,
  className,
  speed = 'normal',
}: MarqueeProps) {
  const duration = speed === 'slow' ? '35s' : speed === 'fast' ? '15s' : '25s';

  return (
    <div
      className={cn('overflow-hidden relative', className)}
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}
    >
      <div
        className={cn(
          'flex gap-3 w-max',
          pauseOnHover && '[&:hover]:[animation-play-state:paused]',
          reverse ? 'animate-marquee-right' : 'animate-marquee-left'
        )}
        style={{ animationDuration: duration }}
      >
        {/* Double children for seamless infinite loop */}
        {children}
        {children}
      </div>
    </div>
  );
}
