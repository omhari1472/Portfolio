'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { fadeIn, slideUp } from '@/lib/animations';

const roles = ['Full-Stack Developer', 'AI Engineer', 'Software Engineer', 'Problem Solver'];

// Deterministic particles — no Math.random() in render to avoid hydration mismatch
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: 10 + ((i * 37 + 13) % 80),
  top: 10 + ((i * 53 + 7) % 80),
  size: 1 + (i % 3),
  color: (['bg-primary/30', 'bg-accent-cyan/30', 'bg-accent-pink/20', 'bg-accent-neon/20'] as const)[i % 4],
  duration: 4 + (i % 4),
  delay: (i * 0.3) % 4,
  yRange: 20 + (i % 20),
  xRange: (i % 2 === 0 ? 1 : -1) * (5 + (i % 10)),
}));

// Inline SplitText — character-by-character 3D flip reveal
function SplitText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className} style={{ display: 'inline-block', perspective: '1000px' }}>
      {text.split('').map((char, i) => (
        <motion.span
          // biome-ignore lint/suspicious/noArrayIndexKey: index is intentional for stagger
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 60, rotateX: -90, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
          transition={{
            delay: delay + i * 0.05,
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

export default function Hero() {
  return (
    <section id="home" className="flex overflow-hidden relative justify-center items-center pt-20 min-h-screen">
      {/* ── Animated Background ───────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background" />

        {/* Aurora blobs */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 700,
            height: 700,
            top: '-15%',
            left: '-10%',
            background: 'radial-gradient(ellipse, rgba(139,92,246,0.45) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 550,
            height: 550,
            bottom: '5%',
            right: '-8%',
            background: 'radial-gradient(ellipse, rgba(6,182,212,0.35) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{ x: [0, -30, 20, 0], y: [0, 20, -40, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 3 }}
        />
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 400,
            height: 400,
            top: '40%',
            left: '50%',
            background: 'radial-gradient(ellipse, rgba(255,0,110,0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{ x: [0, 20, -40, 0], y: [0, -20, 30, 0], scale: [1, 1.15, 0.9, 1] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 6 }}
        />

        {/* Floating particles */}
        {PARTICLES.map((p) => (
          <motion.div
            key={`particle-${p.id}`}
            className={`absolute rounded-full ${p.color}`}
            style={{ width: p.size, height: p.size, left: `${p.left}%`, top: `${p.top}%` }}
            animate={{
              y: [0, -p.yRange, 0],
              x: [0, p.xRange, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* ── Content ───────────────────────────────────────── */}
      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">

          {/* Avatar with 3D tilt + spinning conic border */}
          <motion.div variants={fadeIn} initial="hidden" animate="visible" className="mb-8">
            <Tilt
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              glareEnable
              glareMaxOpacity={0.15}
              glareBorderRadius="100%"
              scale={1.04}
              transitionSpeed={1500}
            >
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
              >
                {/* Glow backdrop */}
                <div className="absolute inset-0 rounded-full opacity-60 blur-2xl bg-gradient-primary animate-glow" />

                {/* Spinning conic border ring */}
                <motion.div
                  className="absolute inset-[-4px] rounded-full"
                  style={{ background: 'conic-gradient(#8B5CF6, #06B6D4, #FF006E, #8B5CF6)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
                />

                {/* Inner dark mask to create border effect */}
                <div className="absolute inset-[3px] rounded-full bg-background z-10" />

                {/* Profile image */}
                <div className="absolute inset-[3px] rounded-full overflow-hidden z-20">
                  <Image
                    src="/images/profile.jpg"
                    alt="Hari Om - Full-Stack Developer & AI Engineer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                  />
                </div>
              </motion.div>
            </Tilt>
          </motion.div>

          {/* Name — split-text 3D flip */}
          <motion.h1
            initial="hidden"
            animate="visible"
            className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl font-heading"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hi, I&apos;m{' '}
            </motion.span>
            <SplitText text="Hari Om" className="text-gradient" delay={0.35} />
          </motion.h1>

          {/* Typewriter roles */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mb-6 h-12 text-xl sm:text-2xl md:text-3xl text-muted-foreground"
          >
            <TypewriterText texts={roles} />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="mb-8 max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground"
          >
            Software Engineer at <span className="font-semibold text-primary">Watevs</span>, specialising
            in building scalable web applications and AI-powered solutions
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <a
              href="#contact"
              className="px-8 py-3 font-medium text-white rounded-full transition-all duration-300 bg-gradient-primary hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 font-medium text-white rounded-full transition-all duration-300 glass hover:bg-white/10 hover:scale-105"
            >
              View Projects
            </a>
          </motion.div>

          {/* Social Links — staggered with hover glow */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.8 } },
            }}
            className="flex gap-6"
          >
            {[
              { href: 'https://github.com/omhari1472', icon: Github, label: 'GitHub', color: 'hover:text-white' },
              { href: 'https://www.linkedin.com/in/om-hari/', icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
              { href: 'mailto:omhari1472@gmail.com', icon: Mail, label: 'Email', color: 'hover:text-accent-cyan' },
            ].map(({ href, icon: Icon, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                whileHover={{ scale: 1.25, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-all duration-300 text-muted-foreground ${color}`}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-transparent to-primary"
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          />
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown className="w-4 h-4 text-primary" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}

// ── Typewriter component ──────────────────────────────────────────────
function TypewriterText({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
          if (currentText === fullText) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length - 1));
          if (currentText === '') {
            setIsDeleting(false);
            setCurrentIndex((currentIndex + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <span className="text-gradient">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
