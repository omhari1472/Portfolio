'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Tilt from 'react-parallax-tilt';

const STATS = [
  { value: '100k+', label: 'emails / day', sub: 'dispatch engine' },
  { value: '3k+',   label: 'chrome users', sub: '4.6★ rated' },
  { value: '5',     label: 'queue pipeline', sub: 'redis / bullmq' },
  { value: '90%',   label: 'workflow cut', sub: 'via ai agent' },
];

const ROLES = ['AI Systems Engineer', 'Distributed Infrastructure', 'Backend Engineer'];

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col justify-center items-center min-h-screen pt-20 overflow-hidden">

      {/* ── Ambient glow — amber only ─────────────────────────────── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 800, height: 800,
          top: '-20%', left: '50%', translateX: '-50%',
          background: 'radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 500, height: 500,
          bottom: '5%', right: '-5%',
          background: 'radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="mb-8"
          >
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable glareMaxOpacity={0.08} glareBorderRadius="100%" scale={1.03} transitionSpeed={2000}>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44"
              >
                {/* Amber ring */}
                <div className="absolute inset-0 rounded-full opacity-40 blur-xl" style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.6) 0%, transparent 70%)' }} />
                <motion.div
                  className="absolute inset-[-3px] rounded-full"
                  style={{ background: 'conic-gradient(#F97316, #22D3EE, #F97316, #EA580C, #F97316)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                />
                <div className="absolute inset-[3px] rounded-full bg-background z-10" style={{ backgroundColor: '#0A0A0A' }} />
                <div className="absolute inset-[3px] rounded-full overflow-hidden z-20">
                  <Image
                    src="/images/profile.jpg"
                    alt="Hari Om"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 176px"
                  />
                </div>
              </motion.div>
            </Tilt>
          </motion.div>

          {/* Live status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
          >
            <span
              className="w-2 h-2 rounded-full bg-primary"
              style={{ animation: 'status-pulse 2s ease-in-out infinite' }}
            />
            <span className="text-xs font-mono-label text-primary tracking-widest uppercase">
              Currently Building · Watevs, London
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="mb-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display tracking-wide leading-none uppercase"
            style={{ fontFamily: 'var(--font-display), Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
          >
            <span className="text-[#F0EDE8]">Hari</span>
            <span className="text-gradient">&nbsp;Om</span>
          </motion.h1>

          {/* Roles — static horizontal pill list, not typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {ROLES.map((role, i) => (
              <span
                key={role}
                className="px-3 py-1 text-xs sm:text-sm font-mono-label tracking-widest uppercase border rounded-full"
                style={{
                  borderColor: i === 0 ? 'rgba(249,115,22,0.4)' : 'rgba(255,255,255,0.08)',
                  color: i === 0 ? '#FB923C' : '#888888',
                  background: i === 0 ? 'rgba(249,115,22,0.06)' : 'transparent',
                  fontFamily: 'var(--font-mono), JetBrains Mono, monospace',
                }}
              >
                {role}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="mb-10 max-w-2xl text-base sm:text-lg leading-relaxed"
            style={{ color: '#888888' }}
          >
            Building a{' '}
            <span style={{ color: '#F97316', fontWeight: 600 }}>100k+ email/day dispatch engine</span>
            {' '}and an AI orchestration agent for a London startup —
            distributed queues, IMAP pooling, multi-service automation.
            Open to senior backend &amp; AI roles at US/UK startups.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="flex flex-wrap gap-3 justify-center mb-16"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-full transition-all duration-300 text-black"
              style={{ background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)', boxShadow: '0 0 30px rgba(249,115,22,0.3)' }}
            >
              See My Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-full border transition-all duration-300"
              style={{ borderColor: 'rgba(255,255,255,0.12)', color: '#F0EDE8', background: 'rgba(255,255,255,0.03)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(249,115,22,0.4)'; (e.currentTarget as HTMLElement).style.color = '#F97316'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'; (e.currentTarget as HTMLElement).style.color = '#F0EDE8'; }}
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex gap-5 mb-20"
          >
            {[
              { href: 'https://github.com/omhari1472', icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/om-hari/', icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:omhari1472@gmail.com', icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="transition-colors duration-200"
                style={{ color: '#555555' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#F97316'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#555555'; }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ── Stats Strip ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 rounded-2xl overflow-hidden"
            style={{ borderColor: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.12)', background: 'rgba(249,115,22,0.03)' }}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.08, duration: 0.4 }}
                className="flex flex-col items-center justify-center py-6 px-4 group"
                style={{ borderColor: 'rgba(249,115,22,0.1)' }}
              >
                <div
                  className="stat-number text-4xl sm:text-5xl mb-1 transition-colors duration-200 group-hover:text-primary"
                  style={{ color: '#F0EDE8', fontFamily: 'var(--font-display), Bebas Neue, sans-serif' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs uppercase tracking-widest mb-0.5"
                  style={{ color: '#888888', fontFamily: 'var(--font-mono), JetBrains Mono, monospace' }}
                >
                  {stat.label}
                </div>
                <div
                  className="text-xs"
                  style={{ color: '#444444', fontFamily: 'var(--font-mono), JetBrains Mono, monospace' }}
                >
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: '#333333' }}
      >
        <motion.div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, transparent, #F97316)' }}
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        />
        <span
          className="text-xs tracking-[0.4em] uppercase"
          style={{ fontFamily: 'var(--font-mono), JetBrains Mono, monospace', color: '#444' }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
