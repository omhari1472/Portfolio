'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { fadeIn, slideUp } from '@/lib/animations';

const roles = ['Full-Stack Developer', 'AI Engineer', 'Software Engineer', 'Problem Solver'];

export default function Hero() {
  return (
    <section id="home" className="flex overflow-hidden relative justify-center items-center pt-20 min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        {/* Floating particles - Reduced for performance */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <motion.div variants={fadeIn} initial="hidden" animate="visible" className="mb-8">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
            >
              <div className="absolute inset-0 rounded-full opacity-50 blur-xl bg-gradient-primary animate-glow" />
              <div className="relative p-1 w-full h-full rounded-full bg-gradient-primary">
                <div className="flex justify-center items-center w-full h-full text-4xl font-bold rounded-full bg-background sm:text-5xl md:text-6xl text-gradient">
                  HO
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={slideUp}
            initial="hidden"
            animate="visible"
            className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl font-heading"
          >
            Hi, I'm <span className="text-gradient">Hari Om</span>
          </motion.h1>

          {/* Typing Animation for Roles */}
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
            Software Development Engineer at <span className="font-semibold text-primary">NxtJob.ai</span>, specializing
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

          {/* Social Links */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="flex gap-6"
          >
            <a
              href="https://github.com/omhari1472"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 text-muted-foreground hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/om-hari/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 text-muted-foreground hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:omhari1472@gmail.com"
              className="transition-colors duration-300 text-muted-foreground hover:text-primary"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center transition-colors text-muted-foreground hover:text-primary"
        >
          <span className="mb-2 text-sm">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </section>
  );
}

// Typewriter component
function TypewriterText({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentIndex];

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

// Add React import
import React from 'react';
