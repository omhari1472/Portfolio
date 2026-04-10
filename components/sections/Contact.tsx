'use client';

import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { slideUp, staggerContainer } from '@/lib/animations';
import { PERSONAL_INFO } from '@/src/data/constants';

export default function Contact() {
  return (
    <section id="contact" className="overflow-hidden relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #0A0A0A, #0D0D0D, #0A0A0A)' }} />
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ x: [0, -20, 10, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />

      <div className="container relative px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideUp}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-12" style={{ background: 'rgba(249,115,22,0.4)' }} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: '#F97316', fontFamily: 'var(--font-mono), JetBrains Mono, monospace' }}
            >
              Contact
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide mb-3"
            style={{ fontFamily: 'var(--font-display), Bebas Neue, sans-serif', color: '#F0EDE8' }}
          >
            Let&apos;s <span className="text-gradient">Talk</span>
          </h2>
          <p className="text-base max-w-xl" style={{ color: '#666' }}>
            Open to new roles, interesting projects, and good conversations about engineering.
            Email me directly — no fluff, just a straightforward chat.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          {/* Contact Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6"
          >
            {/* Email */}
            <motion.div variants={slideUp} whileHover={{ y: -3, transition: { duration: 0.2 } }}>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="block h-full">
                <SpotlightCard
                  className="p-6 rounded-2xl glass-elite group h-full"
                  spotlightColor="rgba(249,115,22,0.1)"
                >
                  <div className="flex flex-col h-full">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.2)' }}
                    >
                      <Mail className="w-5 h-5" style={{ color: '#F97316' }} />
                    </div>
                    <div
                      className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: '#555', fontFamily: 'var(--font-mono), JetBrains Mono, monospace' }}
                    >
                      Email
                    </div>
                    <div className="text-sm font-medium" style={{ color: '#F0EDE8' }}>
                      {PERSONAL_INFO.email}
                    </div>
                    <div className="mt-auto pt-4">
                      <span className="text-xs" style={{ color: '#F97316' }}>Send a message →</span>
                    </div>
                  </div>
                </SpotlightCard>
              </a>
            </motion.div>

            {/* LinkedIn */}
            <motion.div variants={slideUp} whileHover={{ y: -3, transition: { duration: 0.2 } }}>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="block h-full">
                <SpotlightCard
                  className="p-6 rounded-2xl glass-elite group h-full"
                  spotlightColor="rgba(59,130,246,0.1)"
                >
                  <div className="flex flex-col h-full">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.2)' }}
                    >
                      <Linkedin className="w-5 h-5" style={{ color: '#60A5FA' }} />
                    </div>
                    <div
                      className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: '#555', fontFamily: 'var(--font-mono), JetBrains Mono, monospace' }}
                    >
                      LinkedIn
                    </div>
                    <div className="text-sm font-medium" style={{ color: '#F0EDE8' }}>
                      /in/om-hari
                    </div>
                    <div className="mt-auto pt-4">
                      <span className="text-xs" style={{ color: '#60A5FA' }}>Connect →</span>
                    </div>
                  </div>
                </SpotlightCard>
              </a>
            </motion.div>

            {/* GitHub */}
            <motion.div variants={slideUp} whileHover={{ y: -3, transition: { duration: 0.2 } }}>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="block h-full">
                <SpotlightCard
                  className="p-6 rounded-2xl glass-elite group h-full"
                  spotlightColor="rgba(255,255,255,0.05)"
                >
                  <div className="flex flex-col h-full">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      <Github className="w-5 h-5" style={{ color: '#AAAAAA' }} />
                    </div>
                    <div
                      className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: '#555', fontFamily: 'var(--font-mono), JetBrains Mono, monospace' }}
                    >
                      GitHub
                    </div>
                    <div className="text-sm font-medium" style={{ color: '#F0EDE8' }}>
                      /omhari1472
                    </div>
                    <div className="mt-auto pt-4">
                      <span className="text-xs" style={{ color: '#AAAAAA' }}>View repos →</span>
                    </div>
                  </div>
                </SpotlightCard>
              </a>
            </motion.div>
          </motion.div>

          {/* Availability bar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={slideUp}
          >
            <div
              className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 rounded-2xl"
              style={{ border: '1px solid rgba(249,115,22,0.15)', background: 'rgba(249,115,22,0.04)' }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#22C55E', boxShadow: '0 0 8px #22C55E' }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <span className="text-sm font-medium" style={{ color: '#F0EDE8' }}>
                  Open to new roles
                </span>
              </div>
              <div className="flex items-center gap-2" style={{ color: '#666' }}>
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span
                  className="text-xs"
                  style={{ fontFamily: 'var(--font-mono), JetBrains Mono, monospace' }}
                >
                  {PERSONAL_INFO.location} · IST (UTC+5:30) · UK/US overlap available
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
